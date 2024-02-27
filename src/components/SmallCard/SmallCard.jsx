import { useEffect, useState } from "react";

const SmallCard = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mt-5 gap-5">
            {
                cards?.map(card =>
                    <div key={card.id} className="p-5 bg-[#FFFFFF]">
                        <img className="w-52 flex mx-auto" src={card.picture} alt="" />
                        <div className="flex mt-2 gap-2">
                            <p className="text-[#074786] rounded px-2 bg-sky-100">20% Off</p>
                            <p className="text-[#074786] rounded px-2 bg-sky-100">Limitted time</p>
                        </div>
                        <p className="text-[#626E79] font-bold text-center">Web builder 1</p>
                        <p className="text-[#626E79]">Computer  Modern clasic with wix support</p>
                        <div className="flex gap-2 mb-2">
                        <p className="text-[#626E79] text-xl">$39.92</p>
                            <ul className="flex gap-2 mt-2">
                                <li className="text-[#9FA9B3] text-sm">$49.96</li>
                                <li className="text-red-500 text-sm">(20% Off)</li>
                            </ul>
                        </div>
                        <button className="bg-[#1B88F4] text-white w-full rounded-lg py-2">View deal</button>
                    </div>
                )
            }
        </div>
    );
};

export default SmallCard;