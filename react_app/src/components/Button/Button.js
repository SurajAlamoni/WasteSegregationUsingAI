import React, { useState, useCallback, useRef } from "react";
import "./Button.css";
import Webcam from "react-webcam";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

// function Button_({ text, onClick }) {
//   const [isShowVideo, setIsShowVideo] = useState(false);
//   const accessCam = () => {
//     setIsShowVideo(!isShowVideo);
//   };
//   return (
//     <div>
//       {isShowVideo && <Webcam />}
//       <button
//         onClick={() => {
//           accessCam();
//         }}
//       >
//         {text}
//       </button>
//     </div>
//   );
// }

// export default Button_;

const videoConstraints = {
  width: 720,
  height: 720,
  facingMode: "user",
};

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [isShowVideo, setIsShowVideo] = useState(false);

  const capture = () => {
    setIsShowVideo(!isShowVideo);
    setImageSrc(webcamRef.current.getScreenshot());
  };
  return (
    <>
      {imageSrc && (
        <div>
          <img alt="not fount" width={"250px"} src={imageSrc} />
          <br />
          <button onClick={() => setImageSrc(null)}>Remove</button>
        </div>
      )}
      {isShowVideo && (
        <Webcam
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        />
      )}
      <button onClick={capture}>Capture photo</button>
    </>
  );
};

export default WebcamCapture;
