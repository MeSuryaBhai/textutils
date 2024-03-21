import React, {useState} from "react";


export default function TextForm(props) {
  const handleUpClick = ()=>{
    props.showAlert('Converted to Uppercase','success');
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = ()=>{
    props.showAlert('Converted to Lowercase','success');
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event)=>{
    console.log("Onchange");
    setText(event.target.value);
  }
  const handleClear = ()=>{
    props.showAlert('Text Area Cleared','danger');
    setText('');
  }
  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text Copied Successfully','warning');
  }
  const handleExtraSpaces = ()=>{
    let newText  = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra Spaces Removed Successfully','success');
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'#0c2448':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#404040',color:props.mode==='light'?'#0c2448':'white'}} id="myBox" rows="2"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
      <button className="btn btn-danger mx-1 my-1" onClick={handleClear}>Clear</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='light'?'#0c2448':'white'}}>
        <h2>
            Your Text Summary
        </h2>
        <p>
            {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 *text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"output Preview"}</p>
    </div>
    </>
  );
}
