import React from 'react';

const Break = () => {
    return (
        <div className='text-slate-500 mt-5'>
            <h1>Add A Break</h1>
            <div className='flex mt-5 bg-slate-400 text-white rounded-xl justify-between p-4'>
                <button className='bg-slate-500 rounded-full p-1 m-1 hover:bg-white hover:text-black'>10s</button>
                <button className='bg-slate-500 rounded-full p-1 m-1 hover:bg-white hover:text-black'>20s</button>
                <button className='bg-slate-500 rounded-full p-1 m-1 hover:bg-white hover:text-black'>30s</button>
                <button className='bg-slate-500 rounded-full p-1 m-1 hover:bg-white hover:text-black'>40s</button>
                <button className='bg-slate-500 rounded-full p-1 m-1 hover:bg-white hover:text-black'>50s</button>
            </div>
        </div>
    );
};

export default Break;