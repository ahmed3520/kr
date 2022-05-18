import React from 'react'

const Lesson = ({name, id, earning, studentNumber}) => {
  return (
    <div className='dflex djspacebetween f-les'>
        <div className='dflex fcenter les-left'>
            <div className='les-bkg dflex fcenter falcenter'>
                <img src='/les-sub.png' alt='lesson icon'/>
            </div>
            <div className='les-name dflex fcol'>
                <span className='le-name'>
                    {name}
                </span>
                <span className='le-id'>
                    #{id}
                </span>
            </div>
        </div>
        <div className='les-right dflex fcol'>
            <span className='le-earn'>
                {earning}
            </span>
            <span className='le-id'>
                {studentNumber} students
            </span>
        </div>
    </div>
  )
}

export default Lesson