import "./Footer.scss";
import GitHub from "../../assets/github.svg"
const Footer = () => {
  return (
    <div className="Footer text-center">
      <p className="opensource">
      The project is open source and you can access it from .
        <a target="_blank"  href="https://github.com/BelalAboseada/Age-Calculator">
          <br></br>
          <img src={GitHub} loading="lazy" alt="GitHub" />
        </a>
      </p>
    </div>
  );
};

export default Footer;
