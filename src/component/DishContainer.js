import { useState } from "react";
import Dish from './Dish'

const DishContainer = (props) => {
    const { data, showItems, setState} = props;

    const handleClick = () => {
        setState();
    };


    return (
        <div onClick={handleClick}>
            <div className='flex items-center justify-between border-b-2 py-3 px-1 cursor-pointer my-4'>
            <h1 className='text-xl font-semibold'>{data?.card?.card?.title} ({data?.card?.card?.itemCards.length})</h1>
            <span>🔼</span>
            </div>

            {showItems && data?.card?.card?.itemCards.map((items, index)=>(
                <Dish menu={items} key={index}/>
            ))}

        </div>

    );

};

export default DishContainer;