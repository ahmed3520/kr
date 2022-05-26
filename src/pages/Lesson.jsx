import React, {useState, useEffect} from 'react'
import Uploader from '../components/dropzone'
import Input from '../components/Lesson/Input'
import DashNav from '../components/navbar/DashNav'
import style from './css/lesson.module.css'
const Lesson = () => {
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()
  const [nextButton, setNext] = useState(false)
  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined)
        return
    }

    // getting first image
    setSelectedFile(e.target.files[0])
}
  return (
    < div className={style.dcont}>
     <DashNav/>

     <div className={style.len_cont}>

       <div className={style.len_header}>
         <h4>
         Schedule a new lesson
         </h4>
       </div>
       { nextButton ===false?
       <div className={style.len_details}>
         <div className={style.len_title} style={{marginTop:'10px'}}>
           <span>Details</span>
         </div>
         {/*focl */}
         <div className={style.focl} style={{display:'flex', justifyContent:'space-between'}}>
         <div className={style.len_left}>
           <div className={style.les_thumb}>
             <span className={style.les_span}>
             Lesson Thumbnail
             </span>
           <div className={style.lesson_prev}>
           {selectedFile &&  <img src={preview} className={style.thumb_prev} alt='preview'/> }
             <label className={style.dzu_inputLabel}>
             Drop image of your class here or browse
               <input type="file" accept='*'  onChange={onSelectFile}/>
             </label>
             <span className={style.thumb_note}>Max file size 2mb</span>
             </div>  
           </div>
           <div className={style.les_price}>
             <span className={style.les_span}>
               Lesson Price
             </span>
             <Input width={520} height={52} place="Type here"/>
           </div>
           <div className={style.zoom_link}>
             <span className={style.les_span}>
             Zoom Lesson Link
             </span>
             <Input width={520} height={75} place="Type here"/>

           </div>
         </div>

         <div className={style.len_right}> 
           <div style={{display:'flex', flexDirection:'column'}}>
             <span className={style.les_span}>Lesson Title</span>
             <Input width={479} height={52} place="Type here"/>
           </div>
           
           <div className={style.les_desc}>
              <span className={style.les_span}>
              Lesson Description
              </span>
              <div className={style.cs_input} style={{width:'542px', height:'130px'}}>
              <textarea name="comment[body]" placeholder='Type here'  style={{paddingTop:'1rem', width:'520px'}} className='les-input' rows="1" cols="50" wrap="physical" id="comment_text_area"></textarea>

              </div>
            </div> 
            <div className={style.les_drop}>
              <div className={style.curren}>
                <span className={style.les_span}>
                  Currency
                </span>
            <select name="" className={style.crnc}>
            <option value="egp">egp</option>
           </select>
              </div>
              <div className={style.cat}>
                <span className={style.les_span}>Lesson Category</span>
              <select name="" className={style.crnc}>
              <option value="eng">eng</option>
             </select>
             </div>
            </div>

            <div className={style.zoom_pas}>
              <span className={style.les_span}>
              Zoom Lesson  Password
              </span>
              <Input width={479} height={75} place="Type here"/>
            </div>
         </div>
         </div>

         <div className={style.btns_les}>
         <button className={style.cancel_btn}>Cancel</button>

           <button className='bkg-cy' onClick={()=>setNext(!nextButton)}>Next</button>
         </div>
       </div>
            :<>
            <div className={style.len_detail}>
            <div className={style.len_title}>
             <span>Lesson Details</span>
            </div>
            <div  style={{display:'flex', flexDirection:'column'}}>
              <div 
              className='dt'
              style={{display:'flex',  justifyContent:'space-between'}}>
              <div className={style.les_price}>
             <span className={style.les_span}>
               Lesson Price
             </span>
             <Input width={520} height={52} place="Type here"/>
             </div>
             <div className={style.les_price + ' '+ style.mrr1} >
             <span className={style.les_span}>
             Time for the Lesson
             </span>
             <Input width={470} height={52} place="Type here"/>
           </div>
              </div>

              <div className={style.crs}>
                <div  style={{display:'flex'}}>
                <span>Create a Schedule for the Sub Lessons</span>
                <img src='/Calendar Plus.png' alt='calender'/>
                </div>
              </div>

              <div style={{display:'flex', justifyContent:'space-between', }} className='dt'>
              <div className={style.les_price}>
             <span className={style.les_span}>
             Sub Lesson Details?
             </span>
             <Input width={520} height={52} place="Type here"/>
             </div>        
              <div className={style.lis +' '+style.les_price+' '+ style.le_dr}>
                <span className={style.les_span}>
                  Currency
                </span>
            <select name="" className={style.les_time}>
            <option value="egp">egp</option>
           </select>
              </div>
              </div>
              <div style={{display:'flex', flexDirection:'column'}}>
                <div className={style.les_price+ ' '+ style.mrr1}>
              <span className={style.les_span}>
              Date
              </span>
              <Input width={470} height={52} place={"DD/MM/YY"}/>
                </div>
                <button className={style.add_sc}>
                  Add to Schedule
                </button>
              </div>
              <div className={style.btns_les + ' '+ style.pbtn}>
           <button className='bkg-cy'>Publish</button>
         </div>
            </div>
            </div>
            </>
          }

     </div>

     </div>
  )
}

export default Lesson