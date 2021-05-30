import Header from "../components/Header/Header";
import HotelsContainer from "../components/Hotels/HotelsContainer";
import Service from "../components/Services/Service";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
    return (
        <div>
            <Header />
            <Sidebar/>
            <HotelsContainer />
            <Service />
        </div>
    );
};

export default Home;
