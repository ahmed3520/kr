import React from 'react'
import { useLocation } from "react-router-dom";
import { Dash, Class, Lesson, Setting, Dashunvisited, Classunvisited, Lessonunvisited } from '../icons'
import { useNavigate } from "react-router-dom";
import style from './dash.module.css'
const DashNav = () => {
    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    let navigate = useNavigate();
    function navigateUser(path){
    navigate(`/${path}`);
    }
  return (
    <div className={style.l_nav}>
        <div className={style.d_left}>
          <div className={style.hp_cont +' '+ style.d_left} style={{position:'relative'}}>
            <div className={style.up}>
                <div className={style.up_cont}>
                <div className={style.up_left}>
                    <img src='/rec-dash.svg' alt='rec'/>
                </div>
                <div className={style.up_right}>
                    <h5>
                    Instructor
                    </h5>
                    <span>
                    DASHBOARD
                    </span>
                </div>
                </div>
            </div>
            <div className={style.mid}>
                <div className={style.umid_cont}>
                    <div className={style.umid_ch+' '+`${splitLocation[1] === "dashboard" ? "bkg-cy" : ""}`} onClick={()=>navigate('/dashboard')}>
                        <div className={style.up_ic}>
                            {splitLocation[1] === "dashboard" ?
                        <Dash fill="blue" width="24" height="100%" />
                        :<Dashunvisited/>
                            }
                        </div>
                        <div className={style.up_name}>
                        <span> Dashboard</span>
                        </div>

                    </div>
                    <div className={style.umid_ch+' '+`falcenter dflex ${splitLocation[1] === "schedulelessons" ? "bkg-cy" : ""}`} onClick={()=>navigate('/schedulelessons')}>

                    <div className={style.up_ic}>
                    {splitLocation[1] === "schedulelessons" ?
                        <Lesson  width="18px" height="19px" />
                        :<Lessonunvisited/>
                            }
                       </div>
                       <div className={style.up_name}>
                        <span> Schedule Lessons</span>
                        </div>
                    </div>
                    <div className={style.umid_ch+' '+`falcenter dflex ${splitLocation[1] === "myclasses" ? "bkg-cy" : ""}`} onClick={()=>navigate('/myclasses')}>

                    <div className='dflex up-ic'>

                    {splitLocation[1] === "myclasses" ?
                        <Class width="24" height="100%" />
                        :
                        <Classunvisited/>
                            }
                    </div>
                        <div className='dflex up-name'>
                    
                        <span> My Classes</span>
                        </div>
                    </div>
                    <div className={style.umid_ch+' '+`falcenter dflex ${splitLocation[1] === "settings" ? "bkg-cy" : ""}`} onClick={()=>navigate('/settings')}>
                    <div className={style.up_ic}>
                        
                        <img src='/dashboard/setting.svg' alt='Dashboard icon'/>
                       </div>
                       <div className={style.up_name}>
                        <span> Settings</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className={style.lg_out +' '+  style.d_left} style={{position:'relative', height:'10%'}}>
                <div className={style.im_c}>
                <img className='lg-img' src='/lg-out.png' alt="log out"/>
                </div>
                <span className={style.lg_span+' '+ style.up_name}>Log Out</span>
            </div>
        </div>
    </div>
  )
}

export default DashNav