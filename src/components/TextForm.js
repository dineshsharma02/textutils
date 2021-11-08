import React , {useState} from 'react'

export default function TextForm() {
    // const handle
    const [text, settext] = useState("Enter text here");
    const handleUpClick = () =>{
        console.log("button was clicked");
        const  newtext = text.toUpperCase()

        settext(newtext)
    }
    const handleLoClick = () =>{
        console.log("button was clicked");
        const  newtext = text.toLowerCase()

        settext(newtext)
    }
    const handleChange=(event)=>{
        console.log("ta changed");
        settext(event.target.value)
    }
    const handleCopy=()=>{
        console.warn("copied text");
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    const handleClear = () =>{
        settext("")
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "))
    }

    return (
        <>
        <div className="container">
            <h2>Text to convert</h2>
            <textarea className="form-control" id="myBox" onChange={handleChange} rows="10" value = {text} ></textarea>
            <br />
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary m-2" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary m-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary m-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary m-2" onClick={handleClear}>Reset</button>

        </div>
        <div className="container">
            <h3>Text analysis</h3>
            <p>Chars = {text.length}</p>
            <p>Words : {text.split(" ").length}</p>
            <p>Reading time - {(text.split(" ").length)/125} min</p>
        </div>
        <div className="container">
            <h3>Text preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
