import React, {useState} from "react";

export default function TextFrom(props) {
  const handleUpClick = ()=>{
    // console.log("UpperCase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "danger");
  }
  const handleLowClick = ()=>{
    // console.log("LowerCase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "warning");
  }
  const handleOnChange = (event)=>{
    // console.log("On Change")
    setText(event.target.value);
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("TextBox is now clear", "primary");

  }
  const handleCopyClick = ()=>{
    let newText = document.getElementById("myBox")
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copyed Text Successfully to Clipboard.", "success");
  }
  const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("ExtraSpaces removed succesfully", "danger");
  }

  const [text, setText] = useState('Enter Text Here!');
  // text = "new Text"; //Wrong way to change the state
  // setText('new Text'); //Correct way to change the state
  return (
    <>
    <div className="container my-2" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}>
      <h5>{props.heading}</h5>
      <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-secondary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
      <button className="btn btn-dark mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}>
      <h5>Your Text Summary</h5>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>You can read this paragraph in approx { 0.008 * text.split(" ").length} Minutes.</p>
      <h5>Preview</h5>
      <p>{text.length>0?text:"Enter something above in the TextBox to preview it here!"}</p>
    </div>
    </>
  );
}
