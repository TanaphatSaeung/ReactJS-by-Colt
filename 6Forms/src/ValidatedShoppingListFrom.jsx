import { useState } from "react";

export default function ValidatedShoppingListFrom({addItem}) {
  const [formData, setFormDate] = useState({ product: "", quantity: '' });
  const [isProductValid, setIsProductValid] = useState(true);
  const handleChange = (e) =>
    setFormDate(currForm => ({ ...currForm, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(formData)
    setFormDate({product: '', quantity: ''})
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="product">Product name</label>
      <input
        type="text"
        placeholder="product name"
        name="product"
        id="product"
        onChange={handleChange}
        value={formData.product}
      />
      { !isProductValid && <p style={{color:'red'}}>Product name cannot be empty</p>}
      <label htmlFor="quantity">Quantity</label>
      <input
        type="number"
        placeholder="0"
        name="quantity"
        id="quantity"
        onChange={handleChange}
        value={formData.quantity }
      />
      <button>Add Item</button>
    </form>
  );
}
