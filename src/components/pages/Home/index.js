import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const onClickHandler = () => {};

  const { provider, ownAPI, email, role } = useSelector((state) => state.user)

  return (
    <div>
      <h2>Home</h2>
      <div>{provider}</div>
      <div>{ownAPI}</div>
      <div>{email}</div>
      <div>{role}</div>
    </div>
  )
}

export default Home