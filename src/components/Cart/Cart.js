// import React from 'react';
import React, { useState, useEffect } from 'react';
const Cart = (props) => {
    const {name, img, age,des, time} = props.cart;
    const [counter, setCounter] = useState(30);


        const handleAddTOList = () =>{
            setInterval(() => {
                setCounter(seconds => seconds - 1)
            }, 1000)
        }
        if(counter === -1){
            clearInterval(setCounter(0))
        }
    return (
        <div className='shadow-2xl rounded-lg h-96 relative '>
            <div className='flex flex-col items-center'>
                <img className='w-72 rounded-lg' src={img} alt="" />
            </div>
            <div className='ml-4'>
                <h3 className='font-bold text-xl py-1'>{name}</h3>
                <p className='text-sm text-gray-500'>{des > 50 ? des:des.slice(0,60)+'...'}</p>
                <p className='font-bold py-1'>For age: <span className='font-normal'>{age}</span></p>
                <p className='font-bold'>Time required:<span className='font-normal'>{counter}</span></p>
            </div>
            <div className='ml-4 absolute bottom-3'>
                <button onClick={handleAddTOList} className='w-72  bg-lime-500 text-xl p-2 rounded-xl '>Add to list</button>
            </div>
        </div>
    );
};

export default Cart;