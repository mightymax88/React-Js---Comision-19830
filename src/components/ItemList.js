import Item from "./Item";

function ItemList(data){
    data.map(item=>
        <Item
        key={item.id}
        title={item.title}
        price={item.price}
        thumbnail={item.thumbnail}
        category={item.category}
        description={item.description}
        stock={item.stock}
        />
    )
}

export default ItemList;