import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This magic brain can detect faces in your pictures. Give it a try!'}
            </p>
            <div className='center'>
                <div className='form br4 pa4 br3'>
                    <input className='f4 pa2 w-70 center' type='text'onChange={onInputChange} />
                    <button 
                        className='br4 w-30 grow f4 link pv3' 
                        style={{marginTop:'20px'}}
                        onClick={onButtonSubmit}>
                        Detect!
                    </button>
                </div>
                
            </div>
        </div>
    );
};

export default ImageLinkForm;