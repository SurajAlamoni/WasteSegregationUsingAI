import React, { useState } from "react";
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./UploadImageButton.css";
import * as tf from "@tensorflow/tfjs";

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

const UploadImageButton_ = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  function switch_statement(data) {
    switch (data["0"]) {
      case 0:
        console.log("cardboard");
        break;
      case 1:
        console.log("e-waste");
        break;
      case 2:
        console.log("glass");
        break;
      case 3:
        console.log("metal");
        break;
      case 4:
        console.log("paper");
        break;
      case 5:
        console.log("plastic");
        break;
    }
  }
  const load_model_2 = async (image_1) => {
    const model_2 = await tf.loadGraphModel("../data2_web/model.json");
    const prediction_number_2 = model_2.predict(image_1);
    prediction_number_2.print();
    prediction_number_2
      .squeeze()
      .argMax()
      .data()
      .then((data) => switch_statement(data));
  };
  const classify = async () => {
    const imageElement = new Image(225, 225);
    imageElement.src = URL.createObjectURL(selectedImage);

    // Relative URL provided for my-model.json.

    const model_1 = await tf.loadGraphModel("../data1_web/model.json");
    const classify_2 = (image_1, arr) => {
      if (arr[0] < 0.5) {
        console.log("Organic");
      } else {
        load_model_2(image_1);
      }
    };
    // Once model is loaded, let's try using it to make a prediction!
    // Print to developer console for now.
    let image = tf.browser.fromPixels(imageElement);
    const normalize = tf.scalar(255);
    image = tf.div(image, normalize);
    const image_1 = image.reshape([1, 225, 225, 3]);

    const prediction_number_1 = model_1.predict(image_1);
    prediction_number_1.array().then((arr) => classify_2(image_1, arr));
    // console.log(image.shape);

    // When image object is loaded
  };
  //   console.log("classification done");

  return (
    <div>
      <h3 className="mb-3">Upload an image from your computer</h3>
      {selectedImage && (
        <div>
          <Row>
            <img
              alt="not fount"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
            />
          </Row>
          <Row>
            <Col>
              <Button className="mt-3" variant="danger" size="md" onClick={() => setSelectedImage(null)}>Remove</Button>
            </Col>
            <Col>
              <Button className="mt-3 ml-3" variant="success" size="md" onClick={() => classify()}>Classify</Button>
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
            }} />
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
