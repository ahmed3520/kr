import React from 'react'
import { useNavigate } from "react-router-dom";
import navStyle from './css/nav.module.css'
const Nav = () => {
    let navigate = useNavigate();
    function navigateUser(path){
    navigate(`/${path}`);
    }
  return (
      <>
        <div className={navStyle.nav}>
            <div className={navStyle.nav_left}>
                <span className={navStyle.plogo}>Logo</span>{ /*replace it with image */}
            </div>
            <div className={navStyle.nav_right}>
                <button className={navStyle.btn_login} onClick={()=>navigateUser('signin')}>
                    Login
                </button>
                <button className={navStyle.btn_reg}onClick={()=>navigateUser('signup')}>
                    Register
                </button>
            </div>
        </div>
      </>
  )
}

export default Nav