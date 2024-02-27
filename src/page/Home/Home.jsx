import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import SingleCard from "../../components/SingleCard/SingleCard";
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
                <SingleCard/>
                <SmallCard/>
                <Search/>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;