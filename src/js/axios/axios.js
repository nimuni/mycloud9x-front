import axios from 'axios'
// https://velog.io/@wooya/axios-interceptors%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-token%EB%A7%8C%EB%A3%8C%EC%8B%9C-refreshToken-%EC%9E%90%EB%8F%99%EC%9A%94%EC%B2%AD

let axiosInstance;
const initInstance = () => {
  try {
    if(!axiosInstance){
      axiosInstance = axios.create({
        // baseURL: 'https://nimuni.ml/api/',
        baseURL: 'http://localhost:8080/api/',
        headers: { "Content-type": "application/json" },
        withCredentials: true
      });
    }
    return axiosInstance
  } catch (error) {
    console.error(error)  
  }
}
initInstance();

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use(
  (config) => {
    // 요청전 수행할 일
    const accessToken = localStorage.getItem("accessToken");
    // 토큰 있으면 넣어주기
    if (config.headers && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      console.log("config=")
      console.log(config)
      return config;
    } else {
      return config
    }
  },
  (error) => {
    return Promise.reject(error)
  }  
);
// 응답 인터셉터 추가
axiosInstance.interceptors.response.use(
  (response) => {
    // 응답 데이터를 가공
    return response;
  },
  async (error) => {
    const { config, response: { status } } = error
    console.log("call response, error ")
    console.log(config)
    console.log(status)
    console.log(error.response.data)
    console.log(error.response.data.message === "Invalid access token")
    if (status === 401) {
      // response에서 unAuthorization 에러 발생시. 인터셉트. 
      if (error.response.data.message === "Invalid access token") {
        const originalRequest = config;

        try {
          // 토큰 재발급
          const result = await axiosInstance.post(`/reGenerateAccessToken`)
          const newAccessToken = result.data.Authorization.split(' ')[1];
          localStorage.setItem("accessToken", newAccessToken);
          originalRequest.headers.authorization = `Bearer ${newAccessToken}`;
          console.log("originalRequest")
          console.log(originalRequest)
        } catch (reTokenError) {
          console.log(reTokenError)
          return Promise.reject(error);
        }

        // 401로 요청 실패했던 요청 새로운 accessToken으로 세팅해서 재요청
        return axios(originalRequest);
      } else {
        console.log("else Invalid access token")
      }
    }
    // 오류 응답을 처리
    return Promise.reject(error);
  }
);
export default axiosInstance