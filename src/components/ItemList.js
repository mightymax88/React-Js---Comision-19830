import Item from "./Item";

function ItemList(props){
    const games=props.games;
    return(
        games.map(item=>
            <Item
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            thumbnail={item.thumbnail}
            category={item.category}
            description={item.description}
            stock={item.stock}
            />
        )   
    );
}

export default ItemList;