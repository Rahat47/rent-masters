import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/navbar";
import Service from "../components/Services/Service";
import HotelCard from "../components/Hotels/HotelCard";


const Home = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <HotelCard></HotelCard>
            <Service/>
            <Footer />
        </div>
    );
};

export default Home;
