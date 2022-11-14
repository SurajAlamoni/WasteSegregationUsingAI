import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Button from "./components/Navbar/Navbar";
import Button_ from "./components/Button/Button";
import ModelPrediction from "./components/ModelPrediction/ModelPrediction";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Button_ id="webcam" text="Webcam"></Button_>
      <Button_ id="upload" text="Upload"></Button_>
      {/* <ModelPrediction /> */}
    </div>
  );
}
export default App;
