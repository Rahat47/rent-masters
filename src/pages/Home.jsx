//import Footer from "./Footer"
import Header from "../components/Header/Header";
import Service from "../components/Services/Service";
import HotelsContainer from "../components/Hotels/HotelsContainer";

const Home = () => {
    return (
        <div>
            <Header />
            <HotelsContainer />
            <Service />
        </div>
    );
};

export default Home;
