import React, { useEffect, useState } from "react";

const TipCalculatorApp = () => {
  const [result, setResult] = useState({
    tipPerPerson: 0,
    totalPerPerson: 0,
  });

  const [form, setForm] = useState({
    bill: "0",
    percentage: "0",
    people: "0",
  });

  const [error, setError] = useState({});

  const calculateTip = () => {
    const tip = (form.bill * form.percentage) / 100;
    const total = tip + Number(form.bill);

    if (!form.people) {
      setError({ ...error, people: "Can't be zero " });
    } else if (!form.people || Number(form.people) !== 0) {
      setResult({
        ...result,
        tipPerPerson: (tip / form.people).toFixed(2),
        totalPerPerson: (total / form.people).toFixed(2),
      });
      setError({});
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm({
      bill: "0",
      percentage: "0",
      people: "0",
    });
    setResult({
      tipPerPerson: 0,
      totalPerPerson: 0,
    });
    setError({});

    document.getElementById("customTip").value = "";
  };

  useEffect(() => {
    calculateTip();
  }, [form]);

  return (
    <div id="container_tipCalculator">
      <div id="logo"></div>
      <div id="tipCalculator">
        <form>
          <div className="bill">
            <label htmlFor="">Bill</label>
            <div className="input_bill">
              <div id="logoMoney"></div>
              <input
                type="text"
                name="bill"
                placeholder="0"
                onChange={handleChange}
                value={form.bill === "0" ? "" : form.bill}
              />
            </div>
          </div>

          <div className="percentage">
            <span>Select Tip %</span>
            <ul>
              <li
                className={`${form.percentage === "5" && "selectedPercentage"}`}
                onClick={() => setForm({ ...form, percentage: "5" })}
              >
                5%
              </li>
              <li
                className={`${
                  form.percentage === "10" && "selectedPercentage"
                }`}
                onClick={() => setForm({ ...form, percentage: "10" })}
              >
                10%
              </li>
              <li
                className={`${
                  form.percentage === "15" && "selectedPercentage"
                }`}
                onClick={() => setForm({ ...form, percentage: "15" })}
              >
                15%
              </li>
              <li
                className={`${
                  form.percentage === "25" && "selectedPercentage"
                }`}
                onClick={() => setForm({ ...form, percentage: "25" })}
              >
                25%
              </li>
              <li
                className={`${
                  form.percentage === "50" && "selectedPercentage"
                }`}
                onClick={() => setForm({ ...form, percentage: "50" })}
              >
                50%
              </li>
              <li className="inputCustom">
                <input
                  onChange={handleChange}
                  placeholder="Custom"
                  type="text"
                  name="percentage"
                  id="customTip"
                />
              </li>
            </ul>
          </div>

          <div className="people">
            <div>
              <p htmlFor="">Number of People</p>
              {error.hasOwnProperty("people") && (
                <span className="error">{error.people}</span>
              )}
            </div>
            <div
              className={`input_people ${
                error.hasOwnProperty("people") && "error_input"
              }`}
            >
              <div id="logo_people"></div>
              <input
                name="people"
                type="text"
                placeholder="0"
                onChange={handleChange}
                value={form.people === "0" ? "" : form.people}
              />
            </div>
          </div>
        </form>
        <div className="showTips">
          <div className="container_results">
            <div className="tipPerPerson">
              <p>
                Tip Amount <span className="perPerson"> / person</span>
              </p>

              <span className="result_numbers">
                $
                {!result.tipPerPerson || isNaN(result.tipPerPerson)
                  ? "0.00"
                  : result.tipPerPerson}
              </span>
            </div>
            <div className="totalPerPerson">
              <p>
                Total <span className="perPerson">/ person</span>
              </p>
              <span className="result_numbers">
                $
                {!result.totalPerPerson || isNaN(result.totalPerPerson)
                  ? "0.00"
                  : result.totalPerPerson}
              </span>
            </div>
          </div>

          <button className="resetButton" onClick={() => resetForm()}>
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default TipCalculatorApp;
