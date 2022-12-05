export default function ListViev({ items }) {
  return (
    <ul className="list">
      {items.map((item, idx) => {
        return <li key={idx} className='list__item item'>
          <div className="item_image-container" style={
            {
              backgroundImage: `url(${item.img})`,
            }
          }></div>
          <div className="item_text-container">
            <div className='item_name'>{item.name}</div>
            <div className='item_color'>{item.color}</div>
            <div className='item_price'>{item.price}</div>
            <button className='item_button' type='button'>Add to card</button>
          </div>
        </li>
      })}
    </ul>
  )
}