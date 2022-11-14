async function predict() {
  // Relative URL provided for my-model.json.
  const model = await tf.loadGraphModel("data1_web/model.json");
  // Once model is loaded, let's try using it to make a prediction!
  // Print to developer console for now.
  const zeros = tf.zeros([1, 225, 225, 3]);
  model.predict(zeros).print();
}

predict();
