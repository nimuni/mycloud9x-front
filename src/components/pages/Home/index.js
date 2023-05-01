import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const onClickHandler = () => {};

  const { user } = useSelector((state) => state.user)

  return (
    <div>
      <h2>Home</h2>
      <div>{user.provider}</div>
      <div>{user.ownAPI}</div>
      <div>{user.email}</div>
      <div>{user.role}</div>
    </div>
  )
}

export default Home