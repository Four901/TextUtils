import React,{useState} from 'react'



export default function TextForm(props) {
    const [text,setText]=useState("");
    const onChangeHandler=(event)=>{
      setText(event.target.value);
    };
    const onUpClickHandler=()=>{
      setText(text.toUpperCase());
      props.showAlert("Converted To UpperCase","success");
    };
    const onLowClickHandler=()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted To LowerCase","success");
      };
      const onRampClickHandler=()=>{
        var newText="";
        for(let i=0;i<text.length;i++)
        {
         if(i%2==0)
         {
             newText+=(text[i].toLowerCase());
         }
         else{
             newText+=(text[i].toUpperCase());
         }
        }
        setText(newText);
        props.showAlert("Converted To RampCase","success");
      };
      const onCopyClickHandler=()=>{
           var str=document.getElementById("exampleFormControlTextarea1");
           str.select();
           console.log(str);
            props.showAlert(str.toLowerCase,"success");
           navigator.clipboard.writeText(str.value);
          
      }
      const onRemoveSpacesClickHandler=()=>{
        var newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Are Removed","success");
      }
      const onClearClickHandler=()=>{
        setText("");
        props.showAlert("Text Cleared","success");
      };
    var getLengthOk=()=>{

        if (text.length==0)
        {
            return 0;
        }
        else
        {
            return (text.split(" ").length);
        }
      };

    //we can change the text with only the settext can not change by assigning something directly into text 
    return (
        
        <>
        <div className="container my-3" style={{color:props.mode=='light'?'black':'white'}} >
              <div className="mb-3">
   <h1 >{props.heading}</h1>
  <textarea className="form-control" style={{backgroundColor:props.mode=='light'?'dark':'darkgray' , color:props.mode=='light'?'black':'black'}} value={text} onChange={onChangeHandler} id="exampleFormControlTextarea1" rows="8"></textarea>

</div>
   <button className="btn btn-primary mx-1" onClick={onUpClickHandler}>ConvertToUpper</button>
   
  <button className="btn btn-primary mx-1" onClick={onLowClickHandler}>ConvertToLower</button>
  <button className="btn btn-primary mx-1" onClick={onRampClickHandler}>ConvertToRamp</button>
  <button className="btn btn-primary mx-1" onClick={onClearClickHandler}>ClearText</button>
  <button className="btn btn-primary mx-1" onClick={onCopyClickHandler}>Copy Text</button>
  <button className="btn btn-primary mx-1" onClick={onRemoveSpacesClickHandler}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode=='light'?'black':'white'}}>
            <h1>Text Summary</h1>
            
            <p>Number of words :- {getLengthOk()}</p>
            <p>Number of characters :- {text.length}</p>
            <p>Minutes to read:-{0.08*text.split(" ").length}</p>
            <h2>Preview</h2>
            <p>{text.length!=0?text:"Enter Something To Preview"}</p>
        </div>
      
        </>


    )
}
