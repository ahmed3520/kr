import React from 'react'
import { useNavigate } from "react-router-dom";

const Nav = () => {
    let navigate = useNavigate();
    function navigateUser(path){
    navigate(`/${path}`);
    }
  return (
      <>
        <div className='dflex djspacebetween nav'>
            <div className='nav-left'>
                <span className='plogo'>Logo</span>{ /*replace it with image */}
            </div>
            <div className='nav-right dflex'>
                <button className='btn-auth dbrw mr' onClick={()=>navigateUser('signin')}>
                    Login
                </button>
                <button className='btn-auth dbrwb'onClick={()=>navigateUser('signup')}>
                    Register
                </button>
            </div>
        </div>
      </>
  )
}

export default Nav