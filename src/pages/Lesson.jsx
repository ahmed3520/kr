import React, {useState, useEffect} from 'react'
import Uploader from '../components/dropzone'
import Input from '../components/Lesson/Input'
import DashNav from '../components/navbar/DashNav'
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
    < div className='dflex dcont'>
     <DashNav/>

     <div className='len-cont'>

       <div className='len-header dflex '>
         <h4>
         Schedule a new lesson
         </h4>
       </div>
       { nextButton ===false?
       <div className='len-details ' >
         <div className='len-title'>
           <span>Details</span>
         </div>

         <div className='dflex focl djspacebetween'>
         <div className='len-left dflex fcol'>
           <div className='dflex fcol les-thumb'>
             <span className='les-span'>
             Lesson Thumbnail
             </span>
           <div className='lesson-prev dflex falcenter fcol fcenter'>
           {selectedFile &&  <img src={preview} className="thumb-prev" alt='preview'/> }
             <label className='dzu-inputLabel'>
             Drop image of your class here or browse
               <input type="file" accept='*'  onChange={onSelectFile}/>
             </label>
             <span className='thumb-note'>Max file size 2mb</span>
             </div>  
           </div>
           <div className='les-price dflex fcol'>
             <span className='les-span'>
               Lesson Price
             </span>
             <Input width={520} height={52} place="Type here"/>
           </div>
           <div className='dflex fcol zoom-link'>
             <span className='les-span'>
             Zoom Lesson Link
             </span>
             <Input width={520} height={75} place="Type here"/>

           </div>
         </div>

         <div className='len-right dflex fcol'> 
           <div className='les-title dflex fcol'>
             <span className='les-span'>Lesson Title</span>
             <Input width={479} height={52} place="Type here"/>
           </div>
           <div className='les-desc dflex fcol'>
              <span className='les-span'>
              Lesson Description
              </span>
              <div className='cs-input' style={{width:'542px', height:'130px'}}>
              <textarea name="comment[body]" placeholder='Type here'  style={{paddingTop:'1rem', width:'520px'}} className='les-input' rows="1" cols="50" wrap="physical" id="comment_text_area"></textarea>

              </div>
            </div> 
            <div className='les-drop dflex'>
              <div className='dflex fcol curren'>
                <span className='les-span'>
                  Currency
                </span>
            <select name="" className="crnc">
            <option value="egp">egp</option>
           </select>
              </div>
              <div className='dflex fcol cat'>
                <span className='les-span'>Lesson Category</span>
              <select name="" className="crnc">
              <option value="eng">eng</option>
             </select>
             </div>
            </div>
            <div className='dflex fcol zoom-pas'>
              <span className='les-span'>
              Zoom Lesson  Password
              </span>
              <Input width={479} height={75} place="Type here"/>
            </div>
         </div>
         </div>

         <div className='dflex mrt-15 btns-les'>
         <button className='cancel-btn'>Cancel</button>

           <button className='bkg-cy' onClick={()=>setNext(!nextButton)}>Next</button>
         </div>
       </div>
            :<>
            <div className='len-detail mr-50 mrr-50'>
            <div className='len-title'>
             <span>Lesson Details</span>
            </div>
            <div className='dflex fcol'>
              <div className='dflex dt djspacebetween'>
              <div className='les-price dflex fcol'>
             <span className='les-span'>
               Lesson Price
             </span>
             <Input width={520} height={52} place="Type here"/>
             </div>
             <div className='les-price dflex fcol mrr1'>
             <span className='les-span'>
             Time for the Lesson
             </span>
             <Input width={470} height={52} place="Type here"/>
           </div>
              </div>

              <div className='dflex crs'>
                <div className='dflex'>
                <span>Create a Schedule for the Sub Lessons</span>
                <img src='/Calendar Plus.png' alt='calender'/>
                </div>
              </div>

              <div className='dflex slc djspacebetween'>
              <div className='les-price dflex fcol'>
             <span className='les-span'>
             Sub Lesson Details?
             </span>
             <Input width={520} height={52} place="Type here"/>
             </div>        
              <div className='dflex fcol lis les-price le-dr'>
                <span className='les-span'>
                  Currency
                </span>
            <select name="" className="les-time">
            <option value="egp">egp</option>
           </select>
              </div>
              </div>
              <div className='dflex fcol'>
                <div className='les-price dflex fcol mrr1'>
              <span className='les-span'>
              Date
              </span>
              <Input width={470} height={52} place={"DD/MM/YY"}/>
                </div>
                <btn className="add-sc dflex fcenter falcenter">
                  Add to Schedule
                </btn>
              </div>
              <div className='dflex btns-les'>
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