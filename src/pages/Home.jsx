import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/navbar";
import Service from "../components/Services/Service";

const Home = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <Service/>
            <Footer />
        </div>
    );
};

export default Home;
