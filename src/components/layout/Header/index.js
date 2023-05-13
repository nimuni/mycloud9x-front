import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import CustomAppbar from '@components/parts/CustomAppbar';

function Header() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          {/* 추후, 공통으로 사용하지 말고 각 페이지별로 meta태그 선언할때에는 각 페이지에 Helmet을 첨부하여 사용 */}
          <meta name="viewport" content="initial-scale=2, width=device-width" />
          {/* <meta property="og:title" content="page one" />
          <meta property="og:description" content="hi there :) page one" />
          <meta property="og:image" content="%PUBLIC_URL%/logo192.png" /> */}
        </Helmet>
      </HelmetProvider>
      <CustomAppbar />
    </>
  )
}

export default Header