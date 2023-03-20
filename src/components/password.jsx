import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Login = () => {
    const [inputPwdNow,
        setInputPwdNow] = useState('')
    const [inputPw,
        setInputPw] = useState('')
    const [inputPw2,
            setInputPw2] = useState('')
    const [pMessage,
        setpMessage] = useState('')
    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputPwdNow = (e) => {
        console.log("handleInputPwdNow")
        console.log(e.target.value)
        setInputPwdNow(e.target.value)
    }

    const handleInputPw = (e) => {
        console.log("handleInputPw")
        console.log(e.target.value)
        setInputPw(e.target.value)

      if(inputPw2 != e.target.value){
        setpMessage(<font size="3" color="red">비밀번호가 일치하지 않습니다.</font>);
      }else if(inputPw2 == e.target.value){
        setpMessage("비밀번호가 일치합니다.");
      }
    }

    const handleInputPw2 = (e) => {
        setInputPw2(e.target.value)

      if(inputPw != e.target.value){
        setpMessage(<font size="3" color="red">비밀번호가 일치하지 않습니다.</font>);
      }else if(inputPw == e.target.value){
        setpMessage("비밀번호가 일치합니다.");
      }

      console.log("handleInputPw2")
      console.log(e.target.value)
    }

    // login 버튼 클릭 이벤트
    const onClickLogin = () => {
        const id ="kym9788";

        let data = {'password' : inputPwdNow};
        let pwdChangeData = {'password' : inputPw};
        let token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoia3ltOTc4OCIsInByb3ZpZGVyIjoib3duQVBJIiwiZW1haWwiOiJreW05Nzg4QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjc5MzE1NzA2LCJleHAiOjE2NzkzMTY2MDZ9.Uqk_lh_8DxbTTWm-lBdibo8UBQrwuHGQFnRYzjn52KQ";

        const auth = {headers : {'Authorization': `Bearer ${token}`}};

        const res = axios.post('http://nimuni.ml:8080/api/user/checkPassword/'+id, data);

        res.then((data)=>{
            
        if(!data.data.result){
            alert(data.data.message);
            return;
        }
        

        // 비밀번호 변경하고나서 화면전환
        if(inputPw == inputPw2){
            const res2 = axios.put('http://nimuni.ml:8080/api/user/'+id, pwdChangeData, auth);

            res2.then((data)=>{
                console.log(data.data);
            });
        }else{
            return;
        }

        });

       
    }

    // 페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(() => {
        console.log("call useEffect")
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])

    return (
        <div>
            <h1>MyCloud9x</h1>
            <div>
                <label htmlFor='input_pwd_now'>현재 비밀번호 :
                </label>
                <input type='text' name='input_pwd_now' value={inputPwdNow} onChange={handleInputPwdNow}/>
            </div>
            <div>
                <label htmlFor='input_pw'>변경할 비밀번호 :
                </label>
                <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw}/>
            </div>
            <div>
                <label htmlFor='input_pw2'>변경할 비밀번호 확인:
                </label>
                <input type='password' name='input_pw2' value={inputPw2} onChange={handleInputPw2}/>
            </div>
            <div><p className="maintext">{pMessage}</p></div>
            <div>
                <Button type='button' onClick={onClickLogin}>확인</Button>
            </div>
        </div>
    )
}

export default Login;