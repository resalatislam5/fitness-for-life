import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart/Cart';
const Work = () => {
    const [gym, setGym] = useState([]);
    useEffect(()=>{
        fetch('gym.json')
        .then(res => res.json())
        .then(data =>setGym(data))
    }, [])
    return (
        <div className='mx-5'>
            <h2 className='text-xl mb-5 font-bold'>Select today's exercise</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                {
                    gym.map(item => <Cart cart={item} key={item.id}></Cart>)
                }
                
            </div>
        </div>
    );
};

export default Work;