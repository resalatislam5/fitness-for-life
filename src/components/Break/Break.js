import React, { useState } from 'react';

const Break = (props) => {
    return (
        <div className='text-slate-500 mt-5'>
            <h1>Add A Break</h1>
            <div className='flex mt-5 bg-slate-400 text-white rounded-xl justify-between p-4'>
                <button onClick={props.handleAddTOList} className='bg-slate-500 rounded-full p-1 m-1 hover:bg-white hover:text-black'>10s</button>
                <button onClick={props.handleAddTOList1} className='bg-slate-500 rounded-full p-1 m-1 hover:bg-white hover:text-black'>20s</button>
                <button onClick={props.handleAddTOList2} className='bg-slate-500 rounded-full p-1 m-1 hover:bg-white hover:text-black'>30s</button>
                <button onClick={props.handleAddTOList3} className='bg-slate-500 rounded-full p-1 m-1 hover:bg-white hover:text-black'>40s</button>
                <button onClick={props.handleAddTOList4} className='bg-slate-500 rounded-full p-1 m-1 hover:bg-white hover:text-black'>50s</button>
            </div>
        </div>
    );
};

export default Break;