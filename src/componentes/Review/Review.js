import React from 'react';

const Review = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="avatar mt-3">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYAc-AChkaLET2xGawQ2x7Fzl0JKSKFPO7Bw&usqp=CAU" />
                        </div>
                    <h2 className="font-semibold text-xl pl-10 mt-16">Jhons Hatson</h2>
                    </div>
                    <p className='mt-5 text-start'>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
        </div>
    );
};

export default Review;