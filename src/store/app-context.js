import axios from 'axios';
import React, { useCallback, useState } from 'react'
// import data from '../data';

const AppContext = React.createContext({
    appData: '',
    isCartOpen: '',
    openCart: () => { },
    closeCart: () => { },
    cartItems: [],
    addItem: () => { },
    totalAmount: '',
    setCartItems: () => { },
    updateTotalAmount: () => { },
    clearCart: () => { },
    getData: () => { },
    isLoading:'',
    error:''
});
export default AppContext;

const url = 'https://meals-4e093-default-rtdb.firebaseio.com/meals.json'

export const AppContextProvider = (props) => {

    const [appData, setAppData] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState('')

    //---------------------------------C A R T-------------------------------------
    //open the cart
    const openCart = () => {
        setIsCartOpen(true)
    }
    //close the cart
    const closeCart = () => {
        setIsCartOpen(false)
    }


    //---------------------------------D A T A-------------------------------------
    //get the data
    const getData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(url);
            const data = await response.data;
            const itemList = [];
            for(const key in data){
                const {name,description,price} = data[key];
                itemList.push({
                    id:key,
                    name,
                    description,
                    price
                })
            }
            setAppData(itemList)
        } catch (err) {
            setError('something went wrong')
        }
        setIsLoading(false);
    },[])

    //update the total
    const updateTotalAmount = (amount, action) => {
        if (action === 'add') {
            setTotalAmount(prevAmount => prevAmount + amount)
        }
        else if (action === 'remove') {
            setTotalAmount(prevAmount => prevAmount - amount)
        }
    }


    //add an item
    const addItem = (item) => {
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
        const existingItem = cartItems[existingItemIndex]
        if (existingItem) {
            setCartItems(prevItems =>
                prevItems.map(prevItem => {
                    if (prevItem.id === item.id) {
                        return {
                            ...prevItem,
                            amount: prevItem.amount + item.amount
                        }
                    }
                    return prevItem
                })
            )
        } else {
            setCartItems(prevItems => [item, ...prevItems])
        }
        setTotalAmount(prevAmount => prevAmount + item.itemTotal)
    }

    //clearCart
    const clearCart = () => {
        setCartItems([]);
        closeCart();
    }


    return (
        <AppContext.Provider value={{
            appData,
            isCartOpen,
            openCart,
            closeCart,
            cartItems,
            addItem,
            totalAmount,
            setCartItems,
            updateTotalAmount,
            clearCart,
            getData,
            isLoading,
            error
        }}>
            {props.children}
        </AppContext.Provider>)
}