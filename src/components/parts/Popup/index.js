import "./Popup.css";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';

import { setPopupVisible, showPopup, hidePopup, setEmail } from '@parts/Popup/popupSlice';

export default function Popup(props) {
  const dispatch = useDispatch();
  const { popupVisible, width, height, popupTitle, popupContent, popupImgSrc, email, okCallback, cancelCallback } = useSelector(
    (state) => state.popup
  );

  const handleInputEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  function Image() {
    if (popupImgSrc) {
      return <img src={popupImgSrc} className="modal-image" />;
    } else {
      return null;
    }
  }

  function Title() {
    if (popupTitle) {
      return <Typography variant="h5">{popupTitle}</Typography>;
    } else {
      return null;
    }
  }

  function Content() {
    if (popupContent) {
      return <Typography variant="body2">{popupContent}</Typography>;
    } else {
      return null;
    }
  }
  const ButtonOK = () => {
    if (okCallback){
      return <Button variant="text" onClick={(event)=>{
        okCallback()
        dispatch(hidePopup())
      }}>OK</Button>
    } else {
      return ;
    }
  }
  const ButtonCancel = () => {
    if (cancelCallback){
      return <Button variant="text" onClick={()=>{
        cancelCallback()
        dispatch(hidePopup())
      }}>Cancle</Button>
    } else {
      return ;
    }
  }
  const ButtonClose = () => {
    return <Button variant="text" onClick={()=>{
      dispatch(setPopupVisible(false))
    }}>Close</Button>
  }

  return popupVisible && (
    <Box className={`modal-background ${popupVisible ? "" : "d-none"}`}>
      <div
        style={{
          'width': `${width}px`,
          'maxWidth': `100vw`,
          'maxHeight': `100vh`,
          'display': 'flex',
          'flexDirection': 'column',
          'overflowY': 'auto',
          'background': 'white',
          'borderRadius': `8px`
        }}
      >
        <Image/>
        <div
          style={{
            'display': 'flex',
            'flexDirection': 'column',
            'padding': '16px'
          }}
        >
          <Title style={{ mb:1.5}}/>
          <Content/>
          {props.children}
          <div
            style={{
              'display': 'flex',
              'justifyContent': 'right'
            }}
          >
            <ButtonOK/>
            <ButtonCancel/>
            <ButtonClose/>
          </div>
        </div>
      </div>
    </Box>
  );
}
