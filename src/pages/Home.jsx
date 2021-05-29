//import Footer from "./Footer"
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HotelsContainer from "../components/Hotels/HotelsContainer";
import NavBar from "../components/Navbar/navbar";
import Service from "../components/Services/Service";

const Home = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <HotelsContainer />
            <Service />
            <Footer />
        </div>
    );
};

export default Home;
