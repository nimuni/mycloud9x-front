import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/css/membership.css";

import { loadBucket } from "../counter";
import { useDispatch, useSelector } from "react-redux";

const MembershipPage = (props) => {
  const count = useSelector((state) => state.counter.list);
  const dispatch = useDispatch();

  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputPw2, setInputPw2] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputetcEmail, setInputEtcEmail] = useState("");
  const [pMessage, setpMessage] = useState("");
  const [eMessage, seteMessage] = useState("");

  const handleInputId = (e) => {
    console.log("handleInputId");
    console.log(e.target.value);
    setInputId(e.target.value);
  };

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);

    var email = document.getElementById("sel_email").value;
    var check = "";
    var email2 = document.getElementById("etc_email").value;

    if (email == "etc") {
      check = e.target.value + "@" + email2;
    } else {
      check = e.target.value + "@" + email;
    }

    const res = axios.get(
      "https://nimuni.ml/api/user/duplicateEmailCheck/" + check
    );

    res.then((data) => {
      if (data.data) {
        seteMessage(
          <font size="3" color="red">
            중복된 이메일이 존재합니다.
          </font>
        );
      } else {
        seteMessage(
          <font size="3" color="blue">
            중복된 이메일이 존재하지 않습니다.
          </font>
        );
      }
    });
  };

  const handleInputEtcEmail = (e) => {
    console.log("handleInputEtcEmail");
    console.log(e.target.value);
    setInputEtcEmail(e.target.value);
  };

  const handleSelectEmail = (e) => {
    var email = document.getElementById("sel_email").value;
    var check = "";

    const textcheck = document.getElementById("etc_email");

    var email2 = document.getElementById("etc_email").value;

    if (email == "etc") {
      textcheck.style.display = "block";
      check = inputEmail + "@" + email2;
    } else {
      textcheck.style.display = "none";
      check = inputEmail + "@" + email;
    }

    const res = axios.get(
      "https://nimuni.ml/api/user/duplicateEmailCheck/" + check
    );

    res.then((data) => {
      if (data.data) {
        seteMessage(
          <font size="3" color="red">
            중복된 이메일이 존재합니다.
          </font>
        );
      } else {
        seteMessage(
          <font size="3" color="blue">
            중복된 이메일이 존재하지 않습니다.
          </font>
        );
      }
    });
  };

  const handleInputPw = (e) => {
    console.log("handleInputPw");
    console.log(e.target.value);
    setInputPw(e.target.value);

    if (inputPw2 != e.target.value) {
      setpMessage(
        <font size="3" color="red">
          비밀번호가 일치하지 않습니다.
        </font>
      );
    } else if (inputPw2 == e.target.value) {
      setpMessage("비밀번호가 일치합니다.");
    }
  };

  const handleInputPw2 = (e) => {
    setInputPw2(e.target.value);

    if (inputPw != e.target.value) {
      setpMessage(
        <font size="3" color="red">
          비밀번호가 일치하지 않습니다.
        </font>
      );
    } else if (inputPw == e.target.value) {
      setpMessage("비밀번호가 일치합니다.");
    }

    console.log("handleInputPw2");
    console.log(e.target.value);
  };

  // 아이디 중복확인
  const onClickIdCheck = () => {
    dispatch(loadBucket());

    console.log("count : " + count);
  };

  // 회원가입 버튼 클릭 이벤트
  const onClickMembership = () => {
    const email = document.getElementById("sel_email").value;
    var email2 = document.getElementById("etc_email").value;
    var emailValue = "";

    if (email == "etc") {
      emailValue = inputEmail + "@" + email2;
    } else {
      emailValue = inputEmail + "@" + email;
    }

    let body = {
      provider: "ownAPI",
      id: inputId,
      email: emailValue,
      password: inputPw,
    };

    console.log("click login");
    console.log(inputId);
    console.log(inputPw);
    console.log(inputPw2);
    console.log(inputEmail);

    const res = axios.post("https://nimuni.ml/api/user", body);

    res.then((data) => {
      if ((data.status = "201")) {
        window.location.href = "/";
      }
    });
  };

  return (
    <>
      <center>
        <font size="10" color="blue">
          <h2>Sign Up{count}</h2>
        </font>
        <br />
        <div className="form">
          <div>
            <p>Count: {count}</p>
            <table>
              <tr>
                <label htmlFor="input_id">ID : </label>
                <td>
                  <input
                    type="text"
                    name="input_id"
                    value={inputId}
                    onChange={handleInputId}
                  />
                  <Button type="button" onClick={onClickIdCheck}>
                    중복체크
                  </Button>
                </td>
              </tr>
              <br />
              <tr>
                <label htmlFor="input_pw">비밀번호 :</label>
                <td>
                  <input
                    type="password"
                    name="input_pw"
                    value={inputPw}
                    onChange={handleInputPw}
                  />
                </td>
              </tr>
              <br />
              <tr>
                <label htmlFor="input_pw2">비밀번호 확인 : &nbsp;</label>
                <td>
                  <input
                    type="password"
                    name="input_pw2"
                    value={inputPw2}
                    onChange={handleInputPw2}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <p className="maintext">{pMessage}</p>
                </td>
              </tr>
              <tr>
                <label htmlFor="input_id">Email :</label>
                <td>
                  <input
                    type="text"
                    name="input_Email"
                    className="input_box"
                    value={inputEmail}
                    onChange={handleInputEmail}
                  />{" "}
                  @{" "}
                  <input
                    type="text"
                    name="etc_email"
                    id="etc_email"
                    value={inputetcEmail}
                    onChange={handleInputEtcEmail}
                  />
                  <select id="sel_email" onChange={handleSelectEmail}>
                    <option value="etc">직접입력</option>
                    <option value="naver.com">naver.com</option>
                    <option value="hanmail.net">hanmail.net</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="yahoo.com">yahoo.com</option>
                    <option value="hotmail.com">hotmail.com</option>
                    <option value="korea.com">korea.com</option>
                    <option value="nate.com">nate.com</option>
                  </select>{" "}
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <p className="maintext">{eMessage}</p>
                </td>
              </tr>
            </table>
          </div>
          <br />
          <div>
            <Button type="button" onClick={onClickMembership}>
              회원가입
            </Button>{" "}
            <Link to="/Login">
              <Button type="button">취소하기</Button>
            </Link>
          </div>
        </div>
      </center>
    </>
  );
};

export default MembershipPage;
