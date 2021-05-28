import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/navbar";
import Service from "../components/Services/Service";
import HotelsContainer from "../components/Hotels/HotelsContainer";

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
