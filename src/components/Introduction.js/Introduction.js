import React from 'react';
// import logo from '../../../public/logo192.png'
const Introduction = () => {
    return (
        <div>
            <div className='flex items-center pt-5'>
                <div>
                     <img className='w-20 rounded-full' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn3-Y8_EW2LkWzjaY71LMLlhBhkZLvxvdBgw&usqp=CAU'} alt="" />
                </div>
                <div className='ml-4'>
                    <h3 className='text-2xl'>Resalat Islam</h3>
                    <h3 className='text-2xl'><i class="fa-solid fa-location-dot"></i>Gaibandha</h3>
                </div>
            </div>
            <div className='bg-slate-400 flex justify-between text-white mt-8 rounded-lg p-2'>
                <div>
                    <h3 className='text-2xl'>50<span className='text-sm text-yellow-50'>kg</span></h3>
                    <p className='text-lg'>Weight</p>
                </div>
                <div>
                    <h3 className='text-2xl'>5.5</h3>
                    <p className='text-lg'>Heoght</p>
                </div>
                <div>
                    <h3 className='text-2xl'>25<span className='text-sm text-yellow-50'>yre</span></h3>
                    <p className='text-lg'>Age</p>
                </div>
            </div>
        </div>
    );
};

export default Introduction;