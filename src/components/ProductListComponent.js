import ItemComponent from "./ItemComponent"

const ProductListComponent = (props) => {

    const {product, onDeleteItem} = props

    return (
        <section>
            {product.map((e,i) => <ItemComponent {...e} key={i} onDelete={() => onDeleteItem(i)}/>)}
        </section>
    )

}

export default ProductListComponent