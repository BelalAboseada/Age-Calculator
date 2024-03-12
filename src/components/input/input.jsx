import { useState, useEffect } from "react";
import "./input.scss";
import congrates from "../../assets/Congrates.jpg";

const Input = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
  const [showModal, setShowModal] = useState(false);

  // Function to calculate age
  const calculateAge = () => {
    const today = new Date();
    const birthday = new Date(birthDate);
    let years = today.getFullYear() - birthday.getFullYear();
    let months = today.getMonth() - birthday.getMonth();
    let days = today.getDate() - birthday.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
      const tempDate = new Date(today);
      tempDate.setMonth(today.getMonth() - 1);
      days = Math.floor((today.getTime() - tempDate.getTime()) / (1000 * 60 * 60 * 24));
    }

    setAge({ years, months, days });
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Listen for Escape key press to close modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setShowModal(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div className="form">
      <input
        type="date"
        id="date_input"
        placeholder="mm/dd/yyyy"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button className="Calculate" onClick={calculateAge}>
        Calculate
      </button>
      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={congrates} alt="congrates image" />
            <p>
              Your age is: {age.years} years, {age.months} months, and {age.days} days
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Input;
