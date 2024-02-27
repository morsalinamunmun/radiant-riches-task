import { IoMdCheckmark } from "react-icons/io";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
// import { useState } from "react";
const SingleCard = () => {
    // const [rating, setRating] = useState(3);
    return (
        <div className="max-w-5xl mx-auto">
            <div className="bg-[#FFFFFF] text-[#2C384A] mb-10 px-3 pb-3 rounded-lg relative">
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
                    <div className="text-center text-[#626E79]">
                        <img src="https://i.ibb.co/r4M2zQZ/lapto-web.png" className="w-52 flex mx-auto rounded-lg pt-3" />
                        <p>CDK</p>
                    </div>
                    <div className="pt-3">
                        <div>
                            <p><span className="font-semibold text-base">CDK Resposive Builder: </span>An extensive library of widgets and apps, and detailed step-by-step guides</p>
                        </div>
                        <p className="text-[#074786] rounded px-2 bg-sky-100 w-20">20% Off</p>
                        <p className="text-base font-bold">Main HighLight</p>
                        <div className="bg-[#FFF4ED] p-5 rounded-xl ml-3">
                            <div className="flex pb-2"><p className="text-[#074786] rounded px-2 bg-[#FFFFFF]">9.9</p>building responsive</div>
                            <div className="flex pb-2"><p className="text-[#074786] rounded px-2 bg-[#FFFFFF]">8.9</p>Cool</div>
                            <div className="flex"><p className="text-[#074786] rounded px-2 bg-[#FFFFFF]">8.9</p>Docs</div>
                        </div>
                        <div>
                            <h3>Why we love it</h3>
                            <ul>
                                <li className="flex gap-1"><p className="bg-sky-100 rounded-full px-1 py-1 mb-1 "><IoMdCheckmark /></p><p>Documentation</p></li>
                                <li className="flex gap-1"><p className="bg-sky-100 rounded-full px-1 py-1 mb-1"><IoMdCheckmark /></p><p>Easy Use</p></li>
                                <li className="flex gap-1"><p className="bg-sky-100 rounded-full px-1 pt-1 "><IoMdCheckmark /></p><p>Out of box</p></li>
                            </ul>
                        </div>
                        <div className="text-base font-normal text-[#1B88F4] flex gap-1 items-center">
                            <p className="">Show more</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="ml-36">
                            <div className="">
                                <div className="bg-[#F3F9FF] w-36 rounded-b-lg text-center">
                                    <p>9.1</p>
                                    <p>Very Good</p>
                                    <Rating
                                                className="mb-1"
                                                initialRating={5}
                                                emptySymbol={
                                                    <AiOutlineStar className="text-orange-300 w-4 h-4" />
                                                }
                                                fullSymbol={
                                                    <AiFillStar className="text-orange-300 w-4 h-4" />
                                                }
                                            ></Rating>
                                    <div className="flex gap-1">
                                    </div>
                                </div>
                            </div>
                            <button className="flex mx-auto mt-48 bg-[#1B88F4] text-white px-20 py-3 rounded-xl">View</button>
                        </div>
                    </div>
                </div>
                <div className="-left-2 bottom-64 absolute ">
                    <p className="bg-[#FFFFFF] rounded-full px-2 border"></p>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;