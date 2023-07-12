import React, { useState } from "react";

const Photo = ({setImage}) => {
  
  const [fileName, setFileName] = useState("No selected file");
  return (
    <div>
      <form onClick={() => document.querySelector(".input-field").click()}>
        <input
          type="file"
          accept="image/*"
          className="input-field"
          hidden
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            if (files) {
              setImage(URL.createObjectURL(files[0]));
            }
          }}
        />
        {
        // image ? (
        //   <img src={image} alt={fileName} />
        // ) : 
        (
          <>
            {/* <MdCloudUpload color="black" size={60} /> */}
            <p>Photo</p>
          </>
        )}
      </form>
    </div>
  );
};

export default Photo;
