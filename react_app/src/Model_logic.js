import * as tf from "@tensorflow/tfjs";
import React, { useState } from "react";
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
const classify = async (selectedImage) => {
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
  let image = tf.browser.fromPixels(imageElement);
  const normalize = tf.scalar(255);
  image = tf.div(image, normalize);
  const image_1 = image.reshape([1, 225, 225, 3]);

  const prediction_number_1 = model_1.predict(image_1);
  prediction_number_1.array().then((arr) => classify_2(image_1, arr));
};

export default classify;