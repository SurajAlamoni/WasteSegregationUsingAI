import React, { useState, useCallback, useRef } from "react";
import Button from "react-bootstrap/Button";
import "./Button.css";
import Webcam from "react-webcam";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classify from "../../Model_logic";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

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
          <Row>
            <Col>
              <Button
                className="mt-3 mb-3"
                variant="danger"
                size="md"
                onClick={() => setImageSrc(null)}
              >
                Remove
              </Button>
            </Col>
            <Col>
              <Button
                className="mt-3 mb-3"
                variant="success"
                size="md"
                onClick={() => classify(imageSrc, "camera")}
              >
                Classify
              </Button>
            </Col>
          </Row>
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
      <Button className="mt-3" variant="success" size="md" onClick={capture}>
        Capture photo
      </Button>
    </>
  );
};

export default WebcamCapture;
// Commented out because this Button isnt being used anywhere in this app.
