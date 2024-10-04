import './ItemComponent.css'

const ItemComponent = (props) => {

    const {name, price, onDelete} = props

    const addComma = number => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    return (

        <div className='contain-item'>
            <div className="item">
                <div>{name}</div>
                <div>{addComma(price)} ฿</div>
            </div>
            <button onClick={onDelete}><i class="fa-solid fa-trash-can"></i></button>
        </div>

    )

}

export default ItemComponent