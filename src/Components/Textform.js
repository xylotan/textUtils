import React,{useState}from 'react'

export default function Textform(props) {
    const [text,setText]=useState('');
    //setText("Text Changed");
    const len=(text)=>{
      if(text.length===0){
        return 0;
      }
      let word=text.trim().split(/\s+/);
      return word.length;
    };
    const handleClear=()=>{
      let newText="";
      setText(newText);
      props.showAlert('Text Cleared',"success");
    }
   
    const handleUpClick=()=>{
        console.log("UpperCase was clicked");
       
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert('Converted to Upper Case',"success");
    }
    const handleOnChange=(e)=>{
        console.log("OnChange was clicked");
        setText(e.target.value);
        ;
    }
    const handleLoClick=()=>{
      const newText=text.toLowerCase();
       
      setText(newText);
      props.showAlert('Converted to Lower Case',"success");
    }
    const copyText=()=>{
      let t=document.getElementById("myBox");
      t.select();//highlight the selected text
      navigator.clipboard.writeText(t.value);//copy the value of t into clipboard
      props.showAlert('Text Copied to',"success");
    }

    const removeSpaces=()=>{
      let t=document.getElementById("myBox");
      let trimmed=t.value.trim().replace(/\s+/g,' ');
      t.value=trimmed;
    }
    
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
     <h2>{props.heading}</h2>
<div className="mb-3">
   
  <label htmlFor="myBox" className="form-label"></label>
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(33 37 41)':'white',color:props.mode==='dark'?'white':'black'}} rows="9" placeholder='Enter your text here'></textarea>
</div>
<button className="btn btn-success mx-1" onClick={handleUpClick}>Convert to Uppercase </button>
<button className="btn btn-success mx-1" onClick={handleLoClick}>Convert to Lower Case</button>
<button className="btn btn-success mx-1" onClick={copyText}>Copy Text</button>
<button className="btn btn-success mx-1" onClick={removeSpaces}>Remove Space</button>
<button className="btn btn-success mx-1" onClick={handleClear}>Clear Text</button>
</div>
  
  <div className="container" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
  <h2>Your Text Summary</h2>
  <p><b>{len(text)} words & {text.length} characters</b></p>
  <p><b>{(0.008 *len(text)).toFixed(2)} Minutes read</b></p>
  <p><b>{text.length===0? 0 :(text.length/len(text)).toFixed(2)} Average word length</b></p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter into the above textbox to preview it here"}</p>
</div>
</>
  )
}
