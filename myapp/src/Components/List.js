import Note from "./Note";
import axios from 'axios';
import { useEffect, useState } from "react";
import './Liststyle.css';
import AddNote from "./AddNote";


function List({query}){

    const [Item,setItem] = useState([]); 
    const [title,setTitle] = useState("") ;
    const [content,setContent] = useState("") ;
    const [editreq , setEditreq ] = useState(false) ;
    const [Idtitle,setIdTitle] = useState("") ;

    useEffect(() => {
        getdata();
    }, []);

    const getdata = async () => {
          console.log("hello");
          const response = await axios.get("http://localhost:3002/get");
         // const response = await axios.get("/get");
         // console.log("response  : ", response);
            console.log("response array : ", response.data);
         // console.log("response data : ", response.data[0]);
          setItem(response.data);
      }



    return(<>
        <center>
        <AddNote getdata={getdata} title={title} setTitle={setTitle} 
        content={content} setContent={setContent} setEditreq={setEditreq}
         editreq={editreq} Idtitle={Idtitle} setIdTitle={setIdTitle} />
         </center>
         <div className="ListContainer">
         {  
            Item.filter((item) =>
                item.title.toLowerCase().includes(query)
              )
             .map(
                (item) => <Note obj={item} getdata={getdata} 
                title={title} setTitle={setTitle} 
                content={content} setContent={setContent} 
                setEditreq={setEditreq}  setIdTitle={setIdTitle} />
             )
         }
         </div>
        
    </>)
}

export default List ;


