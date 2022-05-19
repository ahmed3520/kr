import React, { useEffect, useState } from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

export default function Uploader() {
  const [img, setImg] = useState("");

  const handleChangeStatus = ({ meta }, status) => {
    console.log( meta);
    setImg(meta.previewUrl)
  };

  // const saveBase64AsFile = (base64, fileName) => {
  //   var link = document.createElement("a");

  //   link.setAttribute("href", base64);
  //   link.setAttribute("download", fileName);
  //   link.click();
  // };

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta));
    const reader = new FileReader();
    reader.onload = e => {
      // saveBase64AsFile(e.target.result, files[0].meta.name);
      setImg(e.target.result);
    };
    reader.readAsDataURL(files[0].file);

    // allFiles.forEach(f => f.remove());
  };
  useEffect(()=>{
    console.log('img', img);

  },[img])
  return (
    <>
      { img?
      <img className="thumb-prev" src={img} alt="preview" />
      :
      <></>
      }
      <Dropzone
        inputContent={"Drop image of your class here or browse"}
        // getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        styles={{ dropzone: { minHeight: 250, maxHeight: 300 } }}
      />
    </>
  );
}
