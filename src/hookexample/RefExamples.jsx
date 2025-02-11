import React,{useEffect, useRef, useState} from 'react'
import VIDEO from "./video.mp4"
const RefExamples = () => {
    const [play, setPlay] = useState(true);
    const eleRef = useRef();
    const videoRef = useRef();
    console.log(videoRef);
    useEffect(()=>{
        eleRef.current.style.color = "teal";
        eleRef.current.innerText = "React Ref"
    });

    let PlayORpause = ()=>{
        if(play == true){
            videoRef.current.play();
            console.log(play);
            setPlay(false);
        }
        else{
            videoRef.current.pause();
            console.log(play);
            setPlay(true);
        }
    }
  return (
    <div>
        <h1 ref={eleRef}>RefExamples</h1>
        <video src={VIDEO} ref={videoRef} onClick={PlayORpause}></video>
    </div>
  )
}

export default RefExamples