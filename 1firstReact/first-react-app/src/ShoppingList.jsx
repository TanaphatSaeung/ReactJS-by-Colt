import ShopingListItem from "./ShoppingListItem";

function ShoppingList({ items }) {
  return (
    <>
      <h2>Lists</h2>
      <ul>
        {items.map((i) => (
        //   <ShopingListItem
        //     key={i.id}
        //     completed={i.completed}
        //     item={i.item}
        //     quantity={i.quantity}
        //   />
          <ShopingListItem
            key={i.id}
            {...i}
          />
        ))}
      </ul>
    </>
  );
}

// id: 1,
//     item: 'eggs',
//     quantity: 12,
//     completed: true,

export default ShoppingList;
