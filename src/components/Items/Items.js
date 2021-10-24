import React, { useContext, useEffect } from 'react';
import './items.scss'
import AppContext from '../../store/app-context';
import Item from './Item/Item';


const Items = () => {

    const { appData, getData, isLoading, error } = useContext(AppContext);

    useEffect(() => {
        getData()
    }, [getData])

    let content = isLoading && <p className="loading-text loading-bump">...Loading</p>;
    if (!isLoading) {
        content = appData.map(item => {
            return <Item key={item.id} {...item} />
        })
    }
    if(error){
        content=<p className="loading-text">{error}</p>;
    }

    return (
        <>
            <div className="title">
                <h2>Our Menu</h2>
                <hr />
            </div>
            <div className='item-container'>
                {content}
            </div>
        </>
    );
};

export default Items;