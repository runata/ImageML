import React from 'react';
import './imageRecognition.css';

const ImageRecognition = ({ imageURL, box }) =>{
    return (
        <div className='center ma'>
        <div className = 'absolute mt2'>
            <img id = 'inputImage' src = {imageURL} alt = 'Recognition' width='500px' height='auto'/>
            <div className = 'bounding-box'
                style = {{ top: box.topRow, bottom: box.bottomRow, left: box.leftCol, right: box.rightCol}}></div>
        </div>
           
        </div>
    );
}

export default ImageRecognition;