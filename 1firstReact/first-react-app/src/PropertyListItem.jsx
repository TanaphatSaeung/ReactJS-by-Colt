

function PropertyListItem({ name , rating, price }) {
  return (
    <li style={{listStyle: 'none', margin: '10px'}}>
      <h1>{name}</h1>
      <h2>${price} a night</h2>
      <h3>{rating} ⭐</h3>
    </li>
  );
}

PropertyListItem.PropTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
}

export default PropertyListItem;
