import PropertyListItem from "./PropertyListItem";
import './PropertyList.css'

function PropertyList({ property }) {
  return (
    <ul className="property-ul">
      {property.map((p) => (
        <PropertyListItem key={p.id} {...p} />
      ))}
    </ul>
  );
}

export default PropertyList;
