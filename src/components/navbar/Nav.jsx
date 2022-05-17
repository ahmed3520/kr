import React from 'react'

const Nav = () => {
  return (
      <>
        <div className='dflex djspacebetween nav'>
            <div className='nav-left'>
                <span className='plogo'>Logo</span>{ /*replace it with image */}
            </div>
            <div className='nav-right dflex'>
                <button className='btn-auth dbrw mr'>
                    Login
                </button>
                <button className='btn-auth dbrwb'>
                    Register
                </button>
            </div>
        </div>
      </>
  )
}

export default Nav