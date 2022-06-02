function ShopItem({item}) {
  return (
    <div key={item.name + item.color + item.price} className='item'>
      <img src={item.img} alt={`${item.name} ${item.color}`}/>
      <h2 className='title'>{item.name}</h2>
      <h3 className='color'>{item.color}</h3>
      <div className='price'>${item.price}</div>
      <button className='button__add'>Add to card</button>
    </div>
  );
}

export default ShopItem;