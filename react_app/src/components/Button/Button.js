import React, { useState, useCallback, useRef } from "react";
import Button from "react-bootstrap/Button"
import "./Button.css";
import Webcam from "react-webcam";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

// Commented out because this Button isnt being used anywhere in this app.
// export const Button = ({
//   children,
//   type,
//   onClick,
//   buttonStyle,
//   buttonSize,
// }) => {
//   const checkButtonStyle = STYLES.includes(buttonStyle)
//     ? buttonStyle
//     : STYLES[0];

//   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

//   return (
//     <button
//       className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//       onClick={onClick}
//       type={type}
//     >
//       {children}
//     </button>
//   );
// };

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
      <h3 className="mb-3">Use your camera to take a picture</h3>

      {imageSrc && (
        <div>
          <img alt="not fount" width={"250px"} src={imageSrc} />
          <br />
          <Button className="mt-3 mb-3" variant="danger" size="md" onClick={() => setImageSrc(null)}>Remove</Button>
        </div>
      )}
      {isShowVideo && (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
      )}
      <Button className="mt-3" variant="success" size="md" onClick={capture}>Capture photo</Button>
    </>
  );
};

export default WebcamCapture;
