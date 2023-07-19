import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.swAlert("Converted to UpperCase", 'success');
    }
    const handleLowCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.swAlert("Converted to LowerCase", 'success');
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    let countWord = (text) => {
        if (text == '') return 0;
        var count = 0;
        var arr = text.split(" ")
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != "") count++;
        }
        return count;
    }
    const [text, setText] = useState("Enter text here");
    return (
        <>
            <div className="container" style={{ color: props.DLmode === 'dark' ? 'white' : 'black' }}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.DLmode === 'light' ? 'white' : '#222c41', color: props.DLmode === 'dark' ? 'white' : 'black' }} id="myBox" rows="9"></textarea>
                </div>
                <button className="btn-1 mx-1" onClick={handleUpCase}>Convert to UpperCase</button>
                <button className="btn-2 mx-1" onClick={handleLowCase} >Convert to LowerCase</button>
            </div>
            <div className="container" style={{ color: props.DLmode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{countWord(text)} words and {text.length - text.split(" ").length + 1} characters</p>
            </div>
        </>
    )
}