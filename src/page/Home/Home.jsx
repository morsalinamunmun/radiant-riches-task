import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Top from "../../components/Top/Top";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="bg-[#FBFCFD] mt-5">
                <Top></Top>
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default Home;