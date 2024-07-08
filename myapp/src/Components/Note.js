import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import axios from 'axios';
import "./Notestyle.css"

function Note({obj, getdata, title,setTitle,content,setContent, setEditreq, setIdTitle  }) {

    const deletedata = async () => {
        const response = await  axios.delete("http://localhost:3002/del", { data: { title: obj.title }, headers: { "Authorization": "***" } });
         getdata();
        console.log("response array : ", response.data);
      }



      const putdata1 = async (obj) => {
          setTitle(obj.title)
          setContent(obj.content);
          setEditreq(true) ;
          setIdTitle(obj.title) ;
      }
    

    return (<>
        <div  className="notecontainer">
          
        <h3> {obj.title} </h3> 
        <p> {obj.content} </p>

        <div className="deleditbtns">
       <button className="deletebtn" onClick={deletedata }> <MdDelete size = '3x'/> </button>
      
        <button className="editbtn" onClick={() =>putdata1(obj) }> <MdModeEdit size = '3x'/></button>  
        </div>
     </div>
     
    </>)

}

export default Note ;


{/* <center>
        <div  className="notecontainer">
     <div className="Itemnote">
        <div> <h3>title {obj.title} </h3> </div>
        <div><p>content {obj.content} </p></div>
     </div>
     <div className="deletebtn" > <button className="deletebtn" onClick={deletedata }>
     <MdDelete size = '3x'/></button>  
        </div>
        <div className="deletebtn" > <button className="editbtn" onClick={() =>putdata(obj.title) }>
        <MdModeEdit size = '3x'/></button>  
        </div>
     </div>
     </center> */}