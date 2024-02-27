import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Top from "../../components/Top/Top";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="bg-[#FBFCFD] mt-5">
                <Top/>
                <Navbar/>
                <Card/>
            </div>
        </div>
    );
};

export default Home;