import React, { useState } from "react";
import "./UploadImageButton.css";
import * as tf from "@tensorflow/tfjs";

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

const UploadImageButton_ = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  async function classify() {
    // Relative URL provided for my-model.json.
    const model = await tf.loadGraphModel("../../data1_web/model.json");
    // Once model is loaded, let's try using it to make a prediction!
    // Print to developer console for now.
    const zeros = tf.zeros([1, 225, 225, 3]);
    model.predict(zeros).print();
  }

  return (
    <div>
      <h1>Upload and Display Image usign React Hook's</h1>
      {selectedImage && (
        <div>
          <img
            alt="not fount"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
          <button onClick={classify()}>Classify</button>
        </div>
      )}
      <br />

      <br />
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadImageButton_;
