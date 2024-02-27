import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
const Card = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className="max-w-5xl mx-auto mt-5">
            {
                cards?.map(card =>
                    <div key={card.id} className="bg-[#FFFFFF] text-[#2C384A] mb-10 px-3 pb-3 rounded-lg relative">
                        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
                            <div className="text-center text-[#626E79]">
                                <img src={card?.picture} className="w-52 flex mx-auto rounded-lg pt-3" />
                                <p>{card?.builder}</p>
                            </div>
                            <div className="pt-3">
                                <div>
                                    <p><span className="font-semibold text-base">{card?.title}</span>{card?.description}</p>
                                </div>
                                <div>
                                    <h1 className="text-base font-bold">{card?.category}</h1>
                                    <p className="py-6 text-base ml-5">{card?.description2}</p>
                                    <div className="text-base font-normal text-[#1B88F4] flex gap-1 items-center">
                                        <p className="">Show more</p>
                                        <HiChevronDown />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <div className="">
                                        <div className="bg-[#F3F9FF] w-32 rounded-b-lg text-center">
                                            <p>{card?.ratingNo}</p>
                                            <p>{card?.result}</p>
                                            {/* <Rating 
                                        style={{ maxWidth: 180 }}
                                        value={card.rating}
                                        //onChange={setRating}
                                    /> */}
                                        </div>
                                    </div>
                                    <button className="flex mx-auto mt-48 bg-[#1B88F4] text-white px-20 py-3 rounded-xl">View</button>
                                </div>
                            </div>
                        </div>
                        <div className="-left-2 bottom-64 absolute ">
                            <p className="bg-[#FFFFFF] rounded-full px-2 border">{card?.no}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Card;