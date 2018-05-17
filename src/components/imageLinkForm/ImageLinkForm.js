import React from 'react';
import './imageLinkForm.css';
const ImageLinkForm = () =>{
    return(
        <div>
            <p className='f3'>
                {`This Magic Brain will detect faces in your images. Give it a try!`}
            </p>
            <div className='center'>
                <div className='center pa4 br3 shadow-5 form'>
                    <input type = 'text' placeholder='Put image link here...' className='f4 pa2 w-70 center'/>
                    <button className = 'w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
                </div>
            </div>
        </div>
      
    )
}
export default ImageLinkForm;