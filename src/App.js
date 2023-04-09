import "./styles.css"
import { useState } from "react";
import Slider from "@mui/material/Slider";

export default function App() {
  const [sliders, setSliders] = useState({
    debt: 7500,
    deposit: 50
  });

  function handleChange(e) {
    setSliders({ ...sliders, [e.target.name]: e.target.value });
  }

  function checkValue(e) {
    if (e.target.name === "debt" && (e.target.value < 7500 || e.target.value > 100000)) {
      alert("Please enter a number between $7,500 and $100,000")
      setSliders({ ...sliders, debt: 7500 })
    } else if (e.target.name === "deposit" && (e.target.value < 50 || e.target.value > 2000)) {
      alert("Please enter a number between $50 and $2,000")
      setSliders({ ...sliders, deposit: 50 })
    }
  }

  return (
    <div className="App">
      <img id="logo" src="https://yourdebtpartner.com/wp-content/uploads/2022/11/ydp-stacked.jpg" alt="YourDebtPartner Logo" />
      <div id="sliders">
        <h1>How Much Can You Save?</h1>
        <section>
          <p>How much debt do you owe?</p>
          <div className="slider-box">
            <p className="min-max">$7,500</p>
            <Slider
              className="slider"
              name="debt"
              value={sliders.debt}
              min={7500}
              max={100000}
              onChange={handleChange}
            ></Slider>
            <p className="min-max">$100k</p>
          </div>
          <p>$<input name="debt" type="number" min={7500} onChange={handleChange} onBlur={checkValue} value={sliders.debt}></input></p>
        </section>
        <section>
          <p>What is your desired monthly program deposit?</p>
          <div className="slider-box">
            <p className="min-max">$50</p>
            <Slider
              className="slider"
              name="deposit"
              value={sliders.deposit}
              min={50}
              max={2000}
              onChange={handleChange}
            ></Slider>
            <p className="min-max">$2,000</p>
          </div>
          <p>$<input name="deposit" type="number" min={50} onChange={handleChange} onBlur={checkValue} value={sliders.deposit}></input></p>
        </section>
      </div>
      <div className="total">
        <div className="result-header">
          <h2>Debt Settlement</h2>
        </div>
        <p>Your monthly program deposit:</p>
        <h3>${sliders.deposit}</h3>
        <p>Your savings:</p>
        <h3><span className="green">${(sliders.debt * 0.23).toFixed()}</span> Savings</h3>
        <p>
          <strong>{Math.ceil(sliders.debt * 0.78 / sliders.deposit)} months</strong> to pay off your current debt listed above.
        </p>
      </div>
      <hr />
      <div className="total">
        <div className="result-header">
          <h2 style={{ textAlign: "center", margin: "5%" }}>Debt Consolidation or Credit Counseling</h2>
        </div>
        <p>Your monthly payment:</p>
        <h3>${sliders.deposit}</h3>
        <p>No savings:</p>
        <h3>You'll pay <span style={{ color: "red" }}>${(sliders.debt * 0.57912).toFixed()}</span> more than you owe currently</h3>
        <p>
          <strong>{Math.ceil(sliders.debt * 1.58 / sliders.deposit)} months</strong> to pay off your current debt listed above.
        </p>
        <small>*Assumed average interest of 15%</small>
      </div>
      <hr />
      <div className="total">
        <div className="result-header">
          <h2 style={{ textAlign: "center", margin: "5%" }}>Pay Minimum Monthly Payments</h2>
        </div>
        <p>Your monthly payment:</p>
        <h3>${sliders.deposit}</h3>
        <p>No savings:</p>
        <h3>You'll pay <span style={{ color: "red" }}>${(sliders.debt * 1.168).toFixed()}</span> more than you owe currently</h3>
        <p>
          <strong>{Math.ceil((sliders.debt * 2.168 / sliders.deposit) / 12)} years</strong> to pay off your current debt listed above.
        </p>
        <small>*Assumed average interest of 20%</small>
      </div>
    </div>
  );
}
