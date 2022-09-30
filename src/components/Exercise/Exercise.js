import React, { useState } from 'react';
import Break from '../Break/Break';

const Exercise = () => {
    const [counter, setCounter] = useState(0);
    const handleAddTOList = () =>{
        setCounter(10)
            setInterval(() => {
                setCounter(seconds => seconds - 1)
            }, 1000)
        }
        const handleAddTOList1 = () =>{
            setCounter(20)
            setInterval(() => {
                setCounter(seconds => seconds - 1)
            }, 1000)
        }
        const handleAddTOList2 = () =>{
            setCounter(30)
            setInterval(() => {
                setCounter(seconds => seconds - 1)
            }, 1000)
        }
        const handleAddTOList3 = () =>{
            setCounter(40)
            setInterval(() => {
                setCounter(seconds => seconds - 1)
            }, 1000)
        }
        const handleAddTOList4 = () =>{
            setCounter(50)
            setInterval(() => {
                setCounter(seconds => seconds - 1)
            }, 1000)
        }
        if(counter === -1){
            clearInterval(setCounter(0))
        }
    return (
        <div>
            <Break handleAddTOList={handleAddTOList} handleAddTOList1={handleAddTOList1} handleAddTOList2={handleAddTOList2} handleAddTOList3={handleAddTOList3} handleAddTOList4={handleAddTOList4}></Break>
                <div className='mt-5 text-slate-500'>
                    <h1>Exercise Details</h1>
                    <div className='mt-2'>
                        <div className='flex bg-slate-400 justify-between items-center p-2 rounded-lg'>
                            <h4 className='2xl:text-2xl text-xl'>Exercise Details</h4>
                            <p className='text-gray-300'><span>0</span> seconds</p>
                        </div>
                        <div className='flex bg-slate-400 justify-between items-center p-2 rounded-lg mt-2'>
                            <h4 className='2xl:text-2xl text-xl'>Break time</h4>
                            <p className='text-gray-300'><span>{counter}</span> seconds</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Exercise;