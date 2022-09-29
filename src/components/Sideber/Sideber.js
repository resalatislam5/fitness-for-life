import React from 'react';
import Break from '../Break/Break';
import Exercise from '../Exercise/Exercise';
import Introduction from '../Introduction.js/Introduction';

const Sideber = () => {
    return (
        <div className='bg-slate-200 h-full w-full px-5'>
            <Introduction></Introduction>
            <Break></Break>
            <Exercise></Exercise>
            <div className='mt-5'>
                <button className='bg-lime-400 text-white w-full p-3 rounded-lg text-xl'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Sideber;