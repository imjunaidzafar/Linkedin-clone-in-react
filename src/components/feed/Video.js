import React from "react";

const Video = ({ setVideoFile }) => {
  // const [fileName, setFileName] = useState("No selected file");
  return (
    <div>
      <form onClick={() => document.querySelector(".video-field").click()}>
        <input
          type="file"
          accept="video/*"
          className="video-field"
          hidden
          onChange={({ target: { files } }) => {
            if (files) {
              setVideoFile(URL.createObjectURL(files[0]));
            }
          }}
        />
        {
          // image ? (
          //   <img src={image} alt={fileName} />
          // ) :
          <>
            {/* <MdCloudUpload color="black" size={60} /> */}
            <p>Video</p>
          </>
        }
      </form>
    </div>
  );
};

export default Video;
