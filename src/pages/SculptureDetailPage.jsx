import { useParams } from "react-router-dom";
import { sculptureList } from "../data";
import { useNavigate } from 'react-router-dom';

export default function SculptureDetailPage() {
    const { id } = useParams();
// TODO: const { id } = useParams(); find sculpture by id
// TODO: show all fields; render location only if it exists
// TODO: "Back to list" link

const navigate = useNavigate();
const handleClick = () => {
    navigate('/');
};

const handleClickEdit = () => {
    navigate(`/sculptures/${id}/edit`);
};

const  sculpt = sculptureList.find((scultp) => scultp.id == id);

return(
    <>
    <h2>Sculpture's Detail</h2>
    
    <div>
      <img src={sculpt?.url} width="300" alt={sculpt?.alt}/>
      <h2> Name: {sculpt?.name}</h2>
      <h3> Artist: {sculpt?.artist}</h3>
      <h3> Year: {sculpt?.year}</h3>
      {sculpt?.location && <h3>Location: {sculpt?.location}</h3>}
      <h4> Description: {sculpt?.description}</h4>

      <button type="button" onClick={handleClickEdit} > 
        Edit
      </button>
          
      <button type="button" onClick={handleClick} > 
        Back to List
      </button>
    </div>  
    </>


   )
}
