import * as tf from "@tensorflow/tfjs";
import { loadGraphModel } from "@tensorflow/tfjs-converter";

const MODEL_URL = "Data_Models/Saved_models/models_json/data1_web/model.json";

async function ModelPrediction() {
  const model = await tf.loadGraphModel(MODEL_URL);
  // const cat = document.getElementById("cat");
  // model.execute(tf.browser.fromPixels(cat));
  const zeros = tf.zeros([1, 225, 225, 3]);
  return (
    <div>
      <p>{model.execute(zeros)}</p>
    </div>
  );
}

export default ModelPrediction;
