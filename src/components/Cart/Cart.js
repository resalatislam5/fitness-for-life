import React from 'react';
const Cart = (props) => {
    const {id, name, img, age,des, time} = props.cart;
    console.log(id)
    return (
        <div className='shadow-2xl rounded-lg h-96 relative '>
            <div className='flex flex-col items-center'>
                <img className='w-72 rounded-lg' src={img} alt="" />
            </div>
            <div className='ml-4'>
                <h3 className='font-bold text-xl py-1'>{name}</h3>
                <p className='text-sm text-gray-500'>{des > 50 ? des:des.slice(0,60)+'...'}</p>
                <p className='font-bold py-1'>For age: <span className='font-normal'>{age}</span></p>
                <p className='font-bold'>Time required: <span className='font-normal'>{time}</span></p>
            </div>
            <div className='ml-4 absolute bottom-3'>
                <button className='w-72  bg-lime-500 text-xl p-2 rounded-xl '>Add to list</button>
            </div>
        </div>
    );
};

export default Cart;