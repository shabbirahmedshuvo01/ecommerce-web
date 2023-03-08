import React from 'react';

const Products = () => {
    return (
        <div>
            <div className="card text-start w-96 bg-base-100 shadow-xl">
                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmcIG1zC2OfVGhkrpecv--I2dLQOz2eoSfgA&usqp=CAU" alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: Shuvo</h2>
                    <h2 className="text-s">Price: 100</h2>
                    <h2 className="text-s">Minimum Order: 111 Items</h2>
                    <h2 className="text-xs">Quantity: 500</h2>
                    <p>goood to go</p>
                    <div className="flex justify-evenly">
                        <p className='mt-3'>Status : <span className='text-green-400'>In Stock</span></p>
                        <button className="btn mt-2">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;