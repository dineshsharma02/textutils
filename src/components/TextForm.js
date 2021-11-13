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
        window.getSelection().removeAllRanges()
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
            <textarea className="form-control" style = {{ backgroundColor: props.mode==="light"?'white':'#5c5a5a',color: props.mode==="light"?'black':'white'}} id="myBox" onChange={handleChange} rows="10" value = {text} ></textarea>
            <br />
            <button  disabled = {text.length===0} className="btn btn-primary m-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled = {text.length===0}  className=" fiueh  btn btn-primary m-2" onClick={handleLoClick}>Convert to lowercase</button>
            <button disabled = {text.length===0}  className="btn btn-primary m-2" onClick={handleCopy}>Copy text</button>
            <button  disabled = {text.length===0} className="btn btn-primary m-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled = {text.length===0}  className="btn btn-primary m-2" onClick={handleClear}>Reset</button>

        </div>
        <div className="container">
            <h3>Text analysis</h3>
            <p>Words = {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
            <p>Chars = {text.length}</p>
            
            <p>Reading time = {(text.split(/\s+/).filter((element)=>{return element.length!==0}).length)/125} min</p>
        </div>
        <div className="container">
            <h3>Text preview</h3>
            <p>{text.length>0?text:"Nothing to preview here!"}</p>
        </div>
        </>
    )
}
