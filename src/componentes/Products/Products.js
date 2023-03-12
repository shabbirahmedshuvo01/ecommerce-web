import React, { useEffect, useState } from 'react';

const Products = () => {

    const [cloths, setCloths] = useState([]);

    useEffect(() => {
        fetch("Items.json")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCloths(data)
            })
    }, [])

    return (
        <section>
            <h1 className='text-3xl text-primary mt-5'>Top Products Of the Year</h1>
            <div className='grid grid-cols-3 p-5'>
                {
                    cloths.map(cloth => <section key={cloth.id} className="flex flex-col items-center justify-center mt-10">
                        <img className='shadow-xl h-72 hover:shadow-gray-400 hover:scale-110' src={cloth.img} alt="" />
                        <p className='font-bold text-xl hover:border border-gray-600 mt-6 px-5 py-2 hover:text-2xl'>{cloth.name}</p>
                        <p className='font-semibold text-2xl'>$ {cloth.price}</p>
                    </section>)
                }
            </div>
            <div>
                <button className='btn btn-link'>See more</button>
            </div>
        </section>
    );
};

export default Products;