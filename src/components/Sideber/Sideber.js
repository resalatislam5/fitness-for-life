import React from 'react';
import { Toaster } from 'react-hot-toast';
import Break from '../Break/Break';
import Exercise from '../Exercise/Exercise';
import Introduction from '../Introduction.js/Introduction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sideber = () => {
    const notify = () => toast("Wow so easy!");
    return (
        <div className='bg-slate-200 h-full w-full px-5'>
            <Introduction></Introduction>
            <Exercise></Exercise>
            <div className='mt-5'>
                <button className='bg-lime-400 text-white w-full p-3 rounded-lg text-xl' onClick={notify}>Activity Completed</button>
        <ToastContainer />
            </div>
        </div>
    );
};

export default Sideber;