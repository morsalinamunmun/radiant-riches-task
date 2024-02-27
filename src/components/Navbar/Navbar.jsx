import { LiaGreaterThanSolid } from "react-icons/lia";
const Navbar = () => {
    return (
        <div className="ml-36">
            <ul className="flex gap-5 text-sm font-normal text-[#4B5665] items-center">
                <li className="bg-[#FFFFFF] rounded-xl px-3 py-2 w-32 h-9">Tools</li>
                <li className="bg-[#FFFFFF] rounded-xl px-3 py-2 w-32 h-9">AWS Builder</li>
                <li className="bg-[#FFFFFF] rounded-xl px-3 py-2 w-32 h-9">Start Build</li>
                <li className="bg-[#FFFFFF] rounded-xl px-3 py-2 w-32 h-9">Build Supplies</li>
                <li className="bg-[#FFFFFF] rounded-xl px-3 py-2 w-32 h-9">Tooling</li>
                <li className="bg-[#FFFFFF] rounded-xl px-3 py-2 w-32 h-9">BlueHosting</li>
            </ul>
            <ul className="flex gap-5 text-sm text-[#5C6874] font-normal items-center mt-5">
                <li>Home</li>
                <li><LiaGreaterThanSolid /></li>
                <li>AWS Builder</li>
                <li><LiaGreaterThanSolid /></li>
                <li>Hosting</li>
                <li><LiaGreaterThanSolid /></li>
                <li>Hosting6</li>
                <li><LiaGreaterThanSolid /></li>
                <li>Hosting5</li>
            </ul>
        </div>
    );
};

export default Navbar;