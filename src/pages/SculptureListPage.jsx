// src/pages/SculptureListPage.jsx
import { Link, useOutletContext } from "react-router-dom";
import { sculptureList } from "../data";
import { useState } from "react";

export default function SculptureListPage() {
  //const { sculptures } = useOutletContext();
  // TODO: map sculptures → card rows
  //   <img src={s.url} alt={s.alt} width="80" />
  //   name, artist, year
  //   <Link to={`/sculptures/${s.id}`}>View</Link>
  //   <Link to={`/sculptures/${s.id}/edit`}>Edit</Link>
  //   <button>Delete</button>  (calls deleteSculpture from context)

  const [index, setIndex] = useState(0); 


  function handlerOnClick(){
    setIndex(
      index + 1
    )
  }

   return(
    <>
    <br />
    <br />
    <br />
    <h2>Sculptures Gallery</h2>  
    <button id="next" onClick={handlerOnClick} >Next</button>
    <p>({index} of {sculptureList.length})</p>
    <p>{sculptureList[index].name}</p>
    <p>{sculptureList[index].year}</p>
    <img src= {sculptureList[index].url} width="80" alt={sculptureList[index].alt}/>
    <p>{sculptureList[index].description}</p>
    </>


   )
}