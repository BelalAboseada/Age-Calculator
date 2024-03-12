import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Input from "../components/input/input";
import "./Home.scss";

const AgeCalculator = () => {
  return (
    <div className="age-calculator">
      <div className="container">
        <Header />
        <Input/>
        <Footer />
      </div>
    </div>
  );
};

export default AgeCalculator;
