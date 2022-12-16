# WasteSegregationUsingAI

Demo at https://waste-segregation-ml.web.app/

Waste Segregation has become a major task in Recycling Plants and Material recovery facilities.

We aim to solve this problem by using openly available datasets trained on different machine learning models to categorize different material types such as organic, plastic, metal, paper, cardboard, e-waste, and glass waste.

We will be using 3 datasets ([data1](https://www.kaggle.com/datasets/techsash/waste-classification-data), [data2](https://github.com/garythung/trashnet), and [data3](https://github.com/nikhilvenkatkumsetty/TrashBox)) to train a CNN model.

We have trained two Deep Learning Models and integrated them together to get the desired results.

Model 1 is binary classification model which classifies an image into Organic or Recyclable waste.

Model 2 is a multi classification model which further segregates the Recyclable image into 6 classes namely plastic, metal, paper, cardboard, e-waste, and glass waste.

Outline of model architecture
![Model Architecture](./assets/Model%20arch.png)

For serving the model to users we have created a ReactJS UI application which can take images from camera or file uploads to classify the images in the browser itself. Models are loaded on the client side in the React application using TensorFlow JS. Firebase hosting is used to host our single page react application.

JSON formatted saved models are stored in the drive at this [link](https://drive.google.com/file/d/1PqHKeyZ96IhzvuQCKxVJGJnBhNlZWIda/view?usp=sharing)

Overall Application architecture
![Model Architecture](./assets/whole%20architecture.png)

A screenshot of the Web App
![Model Architecture](./assets/Web%20UI.png)
