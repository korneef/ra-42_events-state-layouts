export default function CardsViev({ cards }) {
  return (
    <div className="cards">
      {cards.map((item, idx) => {
        return <div key={idx} className='cards__item card'>
          <div className='card__name'>{item.name}</div>
          <div className='card__color'>{item.color}</div>
          <div className="card__image-container" style={{ backgroundImage: `url(${item.img})` }}></div>
          <div className="card__purchase">
            <div className='card__price'>{item.price}</div>
            <button className='card__button' type='button'>Add to card</button>
          </div>
        </div>
      })}
    </div>
  )
}