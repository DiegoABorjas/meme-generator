import React from 'react';
import memesData from '../memesData';

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNum = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNum].url)
    }


    return (
        <main className='meme-form'>
            <div className='form'>
                <input type="text" placeholder="Top text" className='form-input' />
                <input type="text" placeholder="Bottom text" className='form-input' />
                <button className='form-button' onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <img src={memeImage} alt="" className='meme-image' />
        </main>
    )
}