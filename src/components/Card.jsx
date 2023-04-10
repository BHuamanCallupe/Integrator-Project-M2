import { Link } from "react-router-dom/dist";

export default function Card({id, name, status, species, gender, image, onClose, origin}) {
   
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
         <h2>{`status: ${status}`}</h2>
         <h2>{`species: ${species}`}</h2>
         <h2>{`gender: ${gender}`}</h2>
         <h2>{`origin: ${origin?.name}`}</h2>
         <img src={image} alt='' />
      </div>
   );
}
