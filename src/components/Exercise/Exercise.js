import React from 'react';

const Exercise = () => {
    return (
        <div className='mt-5 text-slate-500'>
            <h1>Exercise Details</h1>
            <div className='mt-2'>
                <div className='flex bg-slate-400 justify-between items-center p-2 rounded-lg'>
                    <h4 className='2xl:text-2xl text-xl'>Exercise Details</h4>
                    <p className='text-gray-300'><span>0</span> seconds</p>
                </div>
                <div className='flex bg-slate-400 justify-between items-center p-2 rounded-lg mt-2'>
                    <h4 className='2xl:text-2xl text-xl'>Break time</h4>
                    <p className='text-gray-300'><span>0</span> seconds</p>
                </div>
            </div>
        </div>
    );
};

export default Exercise;