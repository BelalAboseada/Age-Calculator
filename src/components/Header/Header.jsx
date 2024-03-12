import "./Header.scss";
import Calc from "../../assets/Calculator-rafiki.svg"

const Hearder = () => {
  return (
    <div className="Header">
      {/* logo  */}
      <img src={Calc} loading="lazy" alt="logo" />
      {/* text  */}
      <h1 className="logoText">Age Calculator</h1>
      <p className="description">
      Simple Web App To Calculate  Your Age Based On The Date You Were Born.
      </p>
    </div>
  );
};

export default Hearder;
