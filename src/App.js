import "./styles.css"
import { useState } from "react";
import Slider from "@mui/material/Slider";

export default function App() {
  const [sliders, setSliders] = useState({
    debt: 100,
    deposit: 50
  });

  function handleChange(e) {
    setSliders({ ...sliders, [e.target.name]: e.target.value });
  }

  let savings = sliders.debt * 0.23; /* Please confirm formula */
  let timeline = (sliders.debt - savings) / sliders.deposit;
  let months = sliders.deposit > sliders.debt ? "0" : Math.ceil(timeline);

  // Todo: Conditional rendering for progams based on calculation
  // let programs;
  // switch (sliders.debt) {
  //   case sliders.debt < 1000:
  //     programs = ["A"];
  //     break;
  //   case sliders.debt > 1000 && sliders.debt < 5000:
  //     programs = ["B", "C"];
  //     break;
  //   case sliders.debt > 5000:
  //     programs = ["C"];
  //     break;
  //   default:
  //     break;
  // }
  return (
    <div className="App">
      <img id="logo" src="https://yourdebtpartner.com/wp-content/uploads/2022/11/ydp-stacked.jpg" alt="YourDebtPartner Logo" />
      <div id="sliders">
        <h1>How Much Can You Save?</h1>
        <br></br>
        <p>How much debt do you owe?</p>
        <Slider
          name="debt"
          value={sliders.debt}
          min={100}
          max={100000}
          onChange={handleChange}
        ></Slider>
        <p>${sliders.debt}</p>
        <br></br>
        <br></br>
        <p>What is your desired monthly program deposit?</p>
        <Slider
          name="deposit"
          value={sliders.deposit}
          min={50}
          max={100000}
          onChange={handleChange}
        ></Slider>
        <p>${sliders.deposit}</p>
      </div>
      <div class="total">
        <div class="result-header">
          <h2>Debt Settlement</h2>
        </div>
        <p>Your monthly program deposit:</p>
        <h3>${sliders.deposit}</h3>
        <p>Your savings:</p>
        <h3><span class="green">${savings.toFixed()}</span> Savings</h3>
        <p>
          <strong>{months} months</strong> to pay off your current debt listed above.
        </p>
      </div>
      <hr />
      <div class="total">
        <div className="result-header">
          <h2 style={{ textAlign: "center", margin: "5%" }}>Debt Consolidation or Credit Counseling</h2>
        </div>
        <p>Your monthly payment:</p>
        <h3>${sliders.deposit}</h3>
        <p>No savings:</p>
        <h3>You'll pay <span style={{ color: "red" }}>${(sliders.debt * 0.0191).toFixed()}</span> more than you owe currently</h3>
        <p>
          <strong>{Math.ceil((sliders.debt * 1.15) / sliders.deposit)} months</strong> to pay off your current debt listed above.
        </p>
        <small>*Assumed average interest of 15%</small>
      </div>
      <hr />
      <div class="total">
        <div class="result-header">
          <h2 style={{ textAlign: "center", margin: "5%" }}>Pay Minimum Monthly Payments</h2>
        </div>
        <p>Your monthly payment:</p>
        <h3>${sliders.deposit}</h3>
        <p>No savings:</p>
        <h3>You'll pay <span style={{ color: "red" }}>${(sliders.debt * 0.0255).toFixed()}</span> more than you owe currently</h3>
        <p>
          <strong>{Math.ceil(((sliders.debt * 1.20) / sliders.deposit))} months</strong> to pay off your current debt listed above.
        </p>
        <small>*Assumed average interest of 20%</small>
      </div>
    </div>
  );
}
