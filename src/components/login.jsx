import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Modal from 'components/modal';

const Login = () => {
    const [inputId,
        setInputId] = useState('')
    const [inputPw,
        setInputPw] = useState('')
    const [inputEmail,
        setInputEmail] = useState('')
    const [inputEmail2,
        setInputEmail2] = useState('')
    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        console.log("handleInputId")
        console.log(e.target.value)
        setInputId(e.target.value)
    }
    const handleInputEmail = (e) => {
        console.log("handleInputEmail")
        console.log(e.target.value)
        setInputEmail(e.target.value)
    }
    const handleInputEmail2 = (e) => {
        console.log("handleInputEmail2")
        console.log(e.target.value)
        setInputEmail2(e.target.value)
    }
    const handleInputPw = (e) => {
        console.log("handleInputPw")
        console.log(e.target.value)
        setInputPw(e.target.value)
    }

    // login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log('click login')
        console.log(inputId)
        console.log(inputPw)
    }

    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);

    // id 찾기 버튼 클릭 이벤트
     const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    // pwd 찾기 버튼 클릭 이벤트
    const openModal2 = () => {
        setModalOpen2(true);
    };
    const closeModal2 = () => {
        setModalOpen2(false);
    };
    const onClickFindId = () => {
        console.log('id check')
        console.log(inputEmail)
    };
    const onClickFindPwd = () => {
        console.log('pwd check')
        console.log(inputEmail2)
    };
    
    // pwd 찾기 버튼 클릭 이벤트
    const onClickPwdsearch = () => {
        console.log('pwd check')
        console.log(inputId)
        console.log(inputPw)
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
                <label htmlFor='input_id'>ID :
                </label>
                <input type='text' name='input_id' value={inputId} onChange={handleInputId}/>
            </div>
            <div>
                <label htmlFor='input_pw'>PW :
                </label>
                <input
                    type='password'
                    name='input_pw'
                    value={inputPw}
                    onChange={handleInputPw}/>
            </div>
            <div>
                <Button type='button' onClick={onClickLogin}>Login</Button>
            </div>
            <div>
                <Button type='button' onClick={openModal}>아이디찾기</Button>
                <Modal open={modalOpen} close={closeModal} header="아이디 찾기">
                    <div>
                        <label htmlFor='input_email'>email :</label>
                        <input type='text' name='input_email' value={inputEmail} onChange={handleInputEmail}/>
                    </div>
                    <div>
                        <Button type='button' onClick={onClickFindId}>보내기</Button>
                    </div>
                </Modal> |
                <Button type='button' onClick={openModal2}>비번찾기</Button> |
                <Modal open={modalOpen2} close={closeModal2} header="비번 찾기">
                    <div>
                        <label htmlFor='input_email2'>email :</label>
                        <input type='text' name='input_email2' value={inputEmail2} onChange={handleInputEmail2}/>
                    </div>
                    <div>
                        <Button type='button' onClick={onClickFindPwd}>보내기</Button>
                    </div>
                </Modal> |
                <Link to='/membership'><Button type='button' >회원가입</Button></Link>
            </div>
        </div>
    )
}

export default Login;