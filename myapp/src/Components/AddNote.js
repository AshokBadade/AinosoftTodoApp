import axios from 'axios';
import { useState , useRef , useEffect } from "react";
import "./AddNotestyle.css" ;
import './Liststyle.css';
import Note from "./Note";
 
 
function AddNote({getdata,title,setTitle,content,setContent,setEditreq,editreq,Idtitle,setIdTitle}){

  const [inputValue,setInputValue] = useState({}); 
  const textAreaRef = useRef(null);
  const inputRef = useRef(null);
  
   



     const handleChangeTitle = (e)=>{
       setInputValue({ ...inputValue,  [e.target.name]: e.target.value  })
        setTitle(e.target.value)
     }

     const handleChangeContent = (e)=>{
      setInputValue({ ...inputValue,  [e.target.name]: e.target.value  })
      setContent(e.target.value) ;
      autoResizeTextarea(); 
   }
    
   
        
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(inputValue)
    if(editreq==false){
      adddata()
    }
    else{
      putdata(title,content,Idtitle) ;
      setEditreq(false) ;
    }
    setTitle("");
    setContent("") ;
    textAreaRef.current.style.height = '16px';
  }

  const putdata = async (title,content,Idtitle) => {
    const response = await  axios.put("http://localhost:3002/put/"+Idtitle,  {
        title: title,
        content: content
    });
      console.log("response data: ", response.data);
      getdata();
  }

    
    const adddata = async() => {
        const response = await axios.post("http://localhost:3002/post",inputValue);
        console.log("response  : ", response);
        getdata()
    }

    
    const autoResizeTextarea = () => {
      const textArea = textAreaRef.current;
      if (textArea) {
        textArea.style.height = 'auto'; // Reset height to auto
        textArea.style.height = textArea.scrollHeight + 'px'; // Set height based on scrollHeight
      }
    };



    return (<>
    <center>
       <div className="divaddnote">
        
         <input type="text" className="addtitle" placeholder="title"  onChange={handleChangeTitle} name="title" 
          ref={inputRef} value={title}></input>

        <textarea  placeholder="Enter a note"  className="addnote"  onChange={handleChangeContent}  name="content" rows="4"
          cols="50"  ref={textAreaRef} value={content} ></textarea>

       <button className="addbtn" onClick={ handleSubmit }  >Add note</button>
    
       </div>

    </center>
    </>) ;
}

export default AddNote ;