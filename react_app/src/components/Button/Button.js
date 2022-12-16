import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Button.css";
import Webcam from "react-webcam";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classify from "../../Model_logic";

const videoConstraints = {
  width: 250,
  height: 250,
  facingMode: "environment",
};

const WebcamCapture = (props) => {
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
          <img alt="not fount" width="250" src={imageSrc} />
          <br />
          <Row>
            <Col>
              <Button
                className="mt-3 mb-3"
                variant="danger"
                size="md"
                onClick={() => {
                  setImageSrc(null);
                  props.finalState(null);
                }}
              >
                Remove
              </Button>
            </Col>
            <Col>
              <Button
                className="mt-3 mb-3"
                variant="success"
                size="md"
                onClick={() => classify(imageSrc, "camera", props.finalState)}
              >
                Classify
              </Button>
            </Col>
          </Row>
        </div>
      )}
      <Col>
        {isShowVideo && (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        )}
      </Col>
      <Col>
        <Button className="mt-3" variant="success" size="md" onClick={capture}>
          Capture photo
        </Button>
      </Col>
    </>
  );
};

export default WebcamCapture;
// Commented out because this Button isnt being used anywhere in this app.
