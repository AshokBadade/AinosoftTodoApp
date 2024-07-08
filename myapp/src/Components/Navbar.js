import { SiGooglekeep } from "react-icons/si";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";

function Navbar({setQuery}){

    const handleChangeSetQuery = (e) =>{
        setQuery(e.target.value.toLowerCase()) ;
    }


    return(<>
     <div className="mynav">
         <div className="logo">
          <SiGooglekeep size = '10x' />
          <h1>KEEP</h1>
         </div>
         <input type="text" placeholder="Search" className="Searchbar" onChange={handleChangeSetQuery} ></input>
         <div className="logo"><IoIosSettings  size = '2x' /></div>
         <div className="logo"><IoPersonCircleOutline  size = '2x' /></div>
     </div>

    </>);
}

export default Navbar ;