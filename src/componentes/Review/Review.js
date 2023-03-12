import React from 'react';

const Review = () => {

    const reviews = [
        { id: 1, name: "Jhons Hatson", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYAc-AChkaLET2xGawQ2x7Fzl0JKSKFPO7Bw&usqp=CAU", comment: "If a dog chews shoes whose shoes does he choose?" },
        { id: 2, name: "Jhons Hatson", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYAc-AChkaLET2xGawQ2x7Fzl0JKSKFPO7Bw&usqp=CAU", comment: "If a dog chews shoes whose shoes does he choose?" },
        { id: 3, name: "Jhons Hatson", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYAc-AChkaLET2xGawQ2x7Fzl0JKSKFPO7Bw&usqp=CAU", comment: "If a dog chews shoes whose shoes does he choose?" }
    ];

    return (
        <div className='grid grid-cols-3 mx-10 ml-10'>


            {
                reviews.map(review => <div key={review.id} className="card w-96 bg-base-100 shadow-xl mt-5">
                    <div className="card-body">
                        <div className="avatar mt-3">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={review.img} />
                            </div>
                            <h2 className="font-semibold text-xl pl-10 mt-16">{review.name}</h2>
                        </div>
                        <p className='mt-5 text-start'>{review.comment}</p>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Review;