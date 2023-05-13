import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '@axios/axios'

function Home() {
  const onClickHandler = () => {};
  const handleTest = async (event) => {
    event.preventDefault()

    const result = await axiosInstance.get(`/`)
    console.log("result")
    console.log(result)
  }

  const { provider, ownAPI, email, role } = useSelector((state) => state.user)

  return (
    <div>
      <h2>Home</h2>
      <div>{provider}</div>
      <div>{ownAPI}</div>
      <div>{email}</div>
      <div>{role}</div>
      <a onClick={handleTest}>123</a>
    </div>
  )
}

export default Home