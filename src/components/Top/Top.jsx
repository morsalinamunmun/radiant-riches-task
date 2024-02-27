import { CiCircleInfo, CiCircleChevDown } from "react-icons/ci";
const Top = () => {
    return (
        <div>
            <div className="flex flex-col gap-4 justify-center items-center p-4 my-6 max-w-5xl mx-auto">
                <h1 className="text-4xl w-[400px] md:w-[992px] lg:w-[1006px] md:text-5xl lg:text-5xl font-normal ">
                    Best Website builders in the US
                </h1>

                <div className="relative p-3 border-t border-b border-gray-200  w-full flex flex-warp items-center ">
                    <div className="flex">
                        <ul className="flex gap-5 text-xs text-[#4B5665]">
                            <li className="flex gap-2 items-center"><CiCircleChevDown /><p>Last Updated-February 22, 2020</p></li>
                            <li className="flex gap-2 items-center"><CiCircleInfo /><p>Advertising Disclosure</p></li>
                        </ul>
                    </div>

                    <div className="absolute top-10 lg:top-0 lg:right-6">
                        <select id="pricingType" name="pricingType"
                            className="text-xs w-full h-10  focus:outline-none  text-[#4B5665] bg-transparent  px-2 md:px-3 py-0 md:py-1 ">
                            <option value="Top" selected="">Top Relevant</option>
                            <option value="Freemium">Freemium</option>
                            <option value="Free">Free</option>
                            <option value="Paid">Paid</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;