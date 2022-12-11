import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./UploadImageButton.css";
import Classify from "../../Model_logic";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const UploadImageButton = ({
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

const UploadImageButton_ = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h3 className="mb-3">Upload an image from your computer</h3>
      {selectedImage && (
        <div>
          <img
            alt="not fount"
            width="250"
            src={URL.createObjectURL(selectedImage)}
          />
          <Row>
            <Col>
              <Button
                className="mt-3"
                variant="danger"
                size="md"
                onClick={() => {
                  setSelectedImage(null);
                  props.finalState(null);
                }}
              >
                Remove
              </Button>
            </Col>
            <Col>
              <Button
                className="mt-3 ml-3"
                variant="success"
                size="md"
                onClick={() => {
                  console.log(selectedImage);
                  Classify(selectedImage, "upload", props.finalState);
                }}
              >
                Classify
              </Button>
            </Col>
          </Row>
        </div>
      )}
      <div className="mt-3 d-flex justify-content-center">
        <div className="mb-3">
          <input
            className="form-control"
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
        </div>

        {/* SV asheesh sir's code for file input. pls replace if the code on top doesnt work */}
        {/* <input
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        /> */}
      </div>
    </div>
  );
};

export default UploadImageButton_;
