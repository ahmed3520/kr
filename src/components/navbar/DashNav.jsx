import React from 'react'
import { useLocation } from "react-router-dom";
import { Dash, Class, Lesson, Setting, Dashunvisited, Classunvisited, Lessonunvisited } from '../icons'
import { useNavigate } from "react-router-dom";
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
    <div className='dflex l-nav'>
        <div className='d-left dflex fcol'>
          <div className='hp-cont d-left' style={{position:'relative'}}>
            <div className='dflex up fcenter'>
                <div className='up-cont dflex'>
                <div className='up-left dflex'>
                    <img src='/rec-dash.svg' alt='rec'/>
                </div>
                <div className='up-right fcol'>
                    <h5>
                    Instructor
                    </h5>
                    <span>
                    DASHBOARD
                    </span>
                </div>
                </div>
            </div>
            <div className='dflex fcol mid'>
                <div className='umid-cont'>
                    <div className={`umid-ch falcenter dflex ${splitLocation[1] === "dashboard" ? "bkg-cy" : ""}`} onClick={()=>navigate('/dashboard')}>
                        <div className='dflex up-ic'>
                            {splitLocation[1] === "dashboard" ?
                        <Dash fill="blue" width="24" height="100%" />
                        :<Dashunvisited/>
                            }
                        </div>
                        <div className='dflex up-name'>
                        <span> Dashboard</span>
                        </div>

                    </div>
                    <div className={`umid-ch falcenter dflex ${splitLocation[1] === "schedulelessons" ? "bkg-cy" : ""}`} onClick={()=>navigate('/schedulelessons')}>

                    <div className='dflex up-ic'>
                    {splitLocation[1] === "schedulelessons" ?
                        <Lesson  width="18px" height="19px" />
                        :<Lessonunvisited/>
                            }
                       </div>
                        <div className='dflex up-name'>
                        <span> Schedule Lessons</span>
                        </div>
                    </div>
                    <div className={`umid-ch falcenter dflex ${splitLocation[1] === "myclasses" ? "bkg-cy" : ""}`} onClick={()=>navigate('/myclasses')}>

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
                    <div className={`umid-ch falcenter dflex ${splitLocation[1] === "settings" ? "bkg-cy" : ""}`} onClick={()=>navigate('/settings')}>
                    <div className='dflex up-ic'>
                        
                        <img src='/dashboard/setting.svg' alt='Dashboard icon'/>
                       </div>
                        <div className='dflex up-name'>
                        
                        <span> Settings</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='lg-out dflex d-left' style={{position:'relative', height:'10%'}}>
                <div className='dflex im-c'>
                <img className='lg-img' src='/lg-out.png' alt="log out"/>
                </div>
                <span className='lg-span up-name'>Log Out</span>
            </div>
        </div>
    </div>
  )
}

export default DashNav