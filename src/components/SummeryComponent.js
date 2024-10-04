import './SummeryComponent.css'

const SummeryComponent = ({ dataCart: { quantity, cost } }) => {

    const addComma = number => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    return (
        <div className='contain-cart'>
            <h1>Cart</h1>
            <div className='detail-cart'>
                <div className='info'>
                    <div>Quantity</div>
                    <div>{addComma(quantity)}</div>
                </div>
                <div className='info'>
                    <div>Total Cost</div>
                    <div>{addComma(cost)}</div>
                </div>
            </div>
        </div>
    )

}

export default SummeryComponent