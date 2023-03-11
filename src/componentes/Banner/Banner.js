import React from 'react';

const Banner = () => {


    return (
        <div>
            <section className='flex justify-evenly items-center mt-10 mx-10 bg-base-200 py-20'>
                <div className='text-start'>
                    <h2 className='text-6xl font-bold'>Box Office News!</h2>
                    <p className='text-xl w-96 text-start mt-5'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    <button className='btn rounded-full btn btn-outline btn-warning mt-6'>Learn More </button>
                </div>
                <div>
                    <img className='w-96 rounded-lg shadow-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNy42mVdJl0SK-KGeBZDyRyER8fp5fSUz_g&usqp=CAU" alt="" />
                </div>
            </section>
        </div>
    );
};

export default Banner;