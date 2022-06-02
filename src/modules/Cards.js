import Card from './Card';

function Cards({cards}) {
  return (
    <div className='cards'>
      {cards.map(card => <Card card={card}/>)}
    </div>
  );
}

export default Cards;