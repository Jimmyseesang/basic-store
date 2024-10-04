import { useEffect, useState } from 'react';
import './App.css';
import ProductListComponent from './components/ProductListComponent';
import ProductFormComponent from './components/ProductFormComponent';
import SummeryComponent from './components/SummeryComponent';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {

    const [trolley, setTrolley] = useState([])
    const [dataTrolley, setDataTrolley] = useState({
        quantity: '',
        cost: ''
    })

    const addItem = item => {
        setTrolley(prevItem => [...prevItem, item])
    }

    const deleteItem = (index) => {
        setTrolley(prevItem => prevItem.filter((_, i) => i !== index))
    }

    useEffect(() => {
        const quantity = trolley.length
        const cost = trolley.reduce((total, item) => total + Number(item.price), 0)
        setDataTrolley({
            quantity: quantity,
            cost: cost
        })
    }, [trolley])

    const NewComponent = () => {
        return (
            <div>
                <SummeryComponent dataCart={dataTrolley} />
                <ProductListComponent product={trolley} onDeleteItem={deleteItem} />
                <div>
                    <Link to={'/'}><button className='back'><i class="fa-solid fa-arrow-left"></i></button></Link>
                </div>
            </div>
        )
    }

    return (
        <Router>
            <div className='main'>
                <Routes>
                    <Route path='/' element={<ProductFormComponent onAddItem={addItem} />} />
                    <Route path='/cart' element={<NewComponent />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
