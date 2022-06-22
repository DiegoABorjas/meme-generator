import React from 'react';

export default function Header() {
    return (
        <nav className='header'>
            <div className='title-logo'>
                <img src='https://pngimg.com/uploads/trollface/trollface_PNG46.png' className='header-img' alt=''/>
                <h2 className='header-title' >Meme Generator</h2>
            </div>
            <h4 className='header-info' >React Project</h4>
        </nav>
    )
}