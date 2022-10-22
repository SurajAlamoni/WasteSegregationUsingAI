import React, {useState} from "react";
import './Button.css'
import Webcam from "react-webcam";

const STYLES = [
    'btn--primary',
    'btn--outline'
]


const SIZES = [
    'btn--medium',
    'btn--large'    
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}
        type = {type}>
            {children}
        </button>
    )

}

function Button_({text, onClick}) {
    const [isShowVideo, setIsShowVideo] = useState(false);
    const accessCam= ()=>{
      
      setIsShowVideo(!isShowVideo)
    }
    return (
      <div>
        {isShowVideo &&
        <Webcam/>}
        <button onClick={()=>{accessCam()}}>{text}</button>
      </div>
    );
  
  }

  export default Button_;