import React, { useContext, useState } from 'react';
import AppContext from '../../../store/app-context';
import './item.scss'

const Item = ({ id, name, description, price }) => {

    const {addItem} = useContext(AppContext)

    const [amount,setAmount] = useState(1);

    const sendItem=()=>{
        let item ={
            id,
            name,
            amount:parseInt(amount),
            price,
            itemTotal:amount*price
        }
        addItem(item);
    }

    const amountChangeHandler=(e)=>{
        setAmount(e.target.value);
    }

    return (
        <div className="item-card">
            <div className="desc">
                <h2>{name}</h2>
                <p className="about-food">{description}</p>
                <h3 id="price">${price}</h3>
            </div>
            <div className="form">
                <div className="amount">
                    <h4>Amount</h4>
                    <input type="number" 
                    name="amount" 
                    id="amount"
                    min={1}
                    max={5} 
                    value={amount}
                    onChange={amountChangeHandler}
                    />
                </div>
                <button className="add-btn" onClick={sendItem}>+ Add</button>
            </div>
        </div>
    );
};

export default Item;