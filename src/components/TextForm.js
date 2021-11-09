import React , {useState} from 'react'

export default function TextForm(props) {
    // const handle
    const [text, settext] = useState("");
    const handleUpClick = () =>{
        console.log("button was clicked");
        const  newtext = text.toUpperCase()

        settext(newtext)
        props.showAlert("Text convert to uppercase","success")
    }
    const handleLoClick = () =>{
        console.log("button was clicked");
        const  newtext = text.toLowerCase()

        settext(newtext)
        props.showAlert("Text convert to lowercase","success")
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
        props.showAlert("Text copied","info")
    }

    const handleClear = () =>{
        settext("")
        props.showAlert("Text Cleared","success")
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "))
        props.showAlert("Extra spaces removed","success")
    }

    return (
        <>
        <div className="container">
            <h2>Text to convert</h2>
            <textarea className="form-control" style = {{ backgroundColor: props.mode==="light"?'white':'grey'}} id="myBox" onChange={handleChange} rows="10" value = {text} ></textarea>
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
            <p>{text.length>0?text:"Enter your text to preview here!"}</p>
        </div>
        </>
    )
}
