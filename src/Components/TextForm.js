import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleDownClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }
    const handleEmptyClick = () => {
        let newText =("");
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value); //will change the value of textarea. 
    }
    const [text, setText] = useState('');
    return (
        <div className='container' style ={{color:props.mode==='#042743'?'white':'#042743'}}>
            <h1>{props.heading}</h1>

            <div className="my-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='#042743'?'#042743':'light', color:props.mode==='#042743'?'white':'#042743'}} id="myBox" rows="5"></textarea>
                <br />
                <button className="btn btn-info" onClick={handleUpClick} >UPPER CASE</button>
                
                <button className="btn btn-primary  my-3" onClick={handleDownClick} >Lower case</button>

                <button className="btn btn-danger  my-3" onClick={handleEmptyClick} >Clear Text</button>

                
            </div>
            <div className="container my-3" style ={{color:props.mode==='#042743'?'white':'#042743'}} >
                <h1>Your Text Summery</h1>
                <p> {text.split(" ").length} Words amd {text.length} Characters</p>
                <h3>Time To Read</h3>
                <p> {0.008*text.split(' ').length} </p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something to preview it "}</p>

            </div>

 

        </div>
    )
}
