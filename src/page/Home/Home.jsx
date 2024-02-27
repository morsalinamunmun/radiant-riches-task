import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import SmallCard from "../../components/SmallCard/SmallCard";
import Top from "../../components/Top/Top";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="bg-[#FBFCFD] mt-5">
                <Top/>
                <Navbar/>
                <Card/>
                <SmallCard/>
                <Search/>
            </div>
        </div>
    );
};

export default Home;