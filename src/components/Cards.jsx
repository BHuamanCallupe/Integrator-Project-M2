import Card from './Card';

export default function Cards({ characters }) {
   return (
      <>
      {characters.map( (personaje) => {
         return <Card {...personaje} key={personaje.id}></Card>
      })}
      </>
   );
}
