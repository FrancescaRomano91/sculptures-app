// src/pages/SculptureFormPage.jsx
import { useState } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { sculptureList } from "../data";



export default function SculptureFormPage() {
  const { id } = useParams(); // defined → edit mode
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const [sculptures, setSculptures] = useState(sculptureList)
  //const { /* TODO: get sculptures + handlers from context */ } = useOutletContext();

  
  // TODO: initialise form state from existing sculpture (edit) or blanks (create)
  // Fields: name, artist, year, location, url, alt, description
  const [sculpture, setSculpture] = useState(isEdit ? sculptureList.find((scultp) => scultp.id == id) : {
        id:"", 
        name: "",
        artist : "",
        year : "",
        location : "",
        url :"",
        alt : "", 
        description : ""
       
    })





  function handleSubmit(e) {
    //console.log(e.target.name);
    e.preventDefault();
    //const newId = sculptures.findLast((scultp) => true).id+1;
    const newId = isEdit ? id : sculptures.at(-1).id+1;

    if (!isEdit) {
    setSculptures([
      ...sculptures, 
      { id: newId,
        name: e.target.name.value,
        artist : e.target.artist.value,
        year : e.target.year.value,
        location : e.target.location.value,
        url : e.target.url.value,
        alt : e.target.alt.value, 
        description : e.target.description.value
       
    }])}
    else {

     let d = sculptures.filter((scultp) => scultp.id != id)

    setSculptures(
      sculptures.map((scultp) => scultp.id == id? 
      { id: id,
        name: e.target.name.value,
        artist : e.target.artist.value,
        year : e.target.year.value,
        location : e.target.location.value,
        url : e.target.url.value,
        alt : e.target.alt.value, 
        description : e.target.description.value
    }
  :scultp))

    /*setTareas((listaActual) =>
      listaActual.map((tarea) =>
        tarea.id === id
          ? { ...tarea, completada: !tarea.completada } // Copia modificada
          : tarea // Se queda igual
      )*/



    }
    // TODO: isEdit ? updateSculpture(...) : addSculpture(...)
    // TODO: navigate("/");
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setSculpture({
      ...sculpture,
      [name]: value, // <-- Usamos .value, NO .name
    });
  }

  return (
    <div> 

    <form 
      style={{
				  display: "flex",
				  flexDirection: "column",
				  gap: "12px",
				  maxWidth: "400px",
				  margin: "0 auto",
				}}
      
      onSubmit={handleSubmit}>

      
      <h2>New Sculpture</h2> 

      {/* TODO: one controlled <input> per field, <textarea> for description */}
      <label  style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
			Name:
			<input name="name"
			  value={sculpture.name}  
			  onChange={handleChange}       
			/>
		  </label>
		   <label style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
			Artist:
			<input name="artist"
			  value={sculpture.artist}  
			  onChange={handleChange}       
			/>
		  </label>

		   <label style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
			Year:
			<input name="year"
			  value={sculpture.year}  
			  onChange={handleChange}       
			/>
		  </label>
		   <label style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
			Location:
			<input name="location"
			  value={sculpture.location}  
			  onChange={handleChange}       
			/>
		  </label>
		   <label style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
			URL:
			<input name="url"
			  value={sculpture.url}  
			  onChange={handleChange}       
			/>
		  </label>
		   <label style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
			Alternative Text:
			<input name="alt"
			  value={sculpture.alt}  
			  onChange={handleChange}       
			/>
		  </label>
		   <label style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
			Description:
			<textarea name="description"
			  value={sculpture.description}  
			  onChange={handleChange}       
			/>
		  </label>
    
     
      <button type="submit">{isEdit ? "Save changes" : "Create sculpture"}</button>
    </form>
    {sculpture.name}
    <ul style={{listStyleType: 'none'}}>
    {sculptures.map((sculptur) => (<li key={sculptur.id}>{sculptur.id +" "+ sculptur.name + " - " + sculptur.artist}</li>))}
    </ul>
    </div>
  );
}