import { useState } from "react";

export default function ShoppingListForm({addItem}) {
  const [formData, setFormDate] = useState({ product: "", quantity: '' });
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
