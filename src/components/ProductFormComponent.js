import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ProductFormComponent.css'

const ProductFormComponent = (props) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [status, setStatus] = useState(false)

    const changeName = event => setName(event.target.value)
    const changePrice = event => setPrice(event.target.value)

    const saveItems = event => {

        event.preventDefault()

        const item = {
            name: name,
            price: price
        }
        props.onAddItem(item)
        setName('')
        setPrice(0)

    }

    useEffect(() => {

        const dataChack = name.trim().length > 0 && price >= 0 && price !== ''
        setStatus(dataChack)

    }, [name, price])

    return (
        <div>
            <h1>Add product list</h1>
            <form className="content-form" onSubmit={saveItems} >
                <div className="container-form">
                    <label htmlFor="p-name">Enter Product Name</label>
                    <input type="text" id="p-name" placeholder="product name" onChange={changeName} value={name} />
                </div>
                <div className="container-form">
                    <label htmlFor="p-price">Enter Price</label>
                    <input type="number" id="p-price" placeholder="product price" onChange={changePrice} value={price} />
                </div>
                    <div className='contain-button'>
                        <button type="submit" disabled={!status}>Enter</button>
                        <Link className='link' to={'/cart'}><button><i class="fa-solid fa-cart-shopping"></i></button></Link>
                    </div>
            </form>
        </div>
    )

}

export default ProductFormComponent