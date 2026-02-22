import { useState } from "react";
import ShoppingListForm from './ShoppingListForm'
import ValidatedShoppingListFrom from './ValidatedShoppingListFrom'
import {v4 as uuid} from 'uuid'

export default function ShoppingList() {
  const [items, setItmes] = useState([
    { id: uuid(), product: "Banana", quantity: 8 },
    { id: uuid(), product: "Eggs", quantity: 12 },
    { id: uuid(), product: "Bat", quantity: 3 },
  ]);

  const addItem = (item) =>{
    if (item.product !== '' && item.quantity > 0) {
        setItmes((currItem) => {
            return [...currItem,{id: uuid(), ...item }]
        })
    }
    
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.product} - {i.quantity}
          </li>
        ))}
      </ul>
      <ValidatedShoppingListFrom addItem={addItem} />
    </div>
  );
}
