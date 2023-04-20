// import { useSelector } from 'react-redux';
import Card from './Card';

export default function Cards({ characters, onClose }) {

   return (
      <>
         {characters.map((personaje) => {
            return <Card {...personaje} key={personaje.id} onClose={onClose}></Card>
         })}
      </>
   );
}
