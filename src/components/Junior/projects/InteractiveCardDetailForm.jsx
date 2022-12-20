import React, { useState } from "react";

const validateSendForm = (form) => {
  let errors = {};
  if (!form.cardName) {
    errors.cardName = "Can't be blank";
  }

  if (form.cardNumber.length !== 19) {
    errors.cardNumber = "You missing numbers";
  }
  if (!form.cvc) {
    errors.cvc = "Can't be blank";
  }
  if (!form.expDateMonth) {
    errors.expDateMonth = "Can't be blank";
  }
  if (!form.expDateYear) {
    errors.expDateYear = "Can't be blank";
  }

  return errors;
};
const validate = (form) => {
  let errors = {};
  console.log(form);
  if (!form.cardNumber) {
  } else if (!/^([0-9 ])*$/.test(form.cardNumber)) {
    errors.cardNumber = "Wrong format, numbers only";
  }

  if (!form.cvc) {
  } else if (!/^([0-9 ])*$/.test(form.cvc)) {
    errors.cvc = "Wrong format, numbers only";
  }

  if (!form.expDateMonth) {
  } else if (!/^([0-9 ])*$/.test(form.expDateMonth)) {
    errors.expDateMonth = "Wrong format, numbers only";
  }
  if (!form.expDateYear) {
  } else if (!/^([0-9 ])*$/.test(form.expDateYear)) {
    errors.expDateYear = "Wrong format, numbers only";
  }

  return errors;
};

const InteractiveCardDetailForm = () => {
  const [form, setForm] = useState({
    cardNumber: "",
    cardName: "",
    expDateMonth: "",
    expDateYear: "",
    cvc: "",
  });
  const [errors, setErrors] = useState({});
  const [swap, setSwap] = useState(true);

  const handleInputChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;

    switch (name) {
      case "cardNumber":
        value = value
          .replace(/\s+/g, "")
          .replace(/([0-9]{4})/g, "$1 ")
          .trim();
        setForm({
          ...form,
          [name]: value,
        });
        break;

      default:
        setForm({
          ...form,
          [name]: value,
        });
        break;
    }

    setErrors(validate({ ...form, [name]: value }));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    let aux = validateSendForm(form);
    setErrors(aux);
    if (!Object.keys(aux).length) {
      setSwap(true);
      setForm({
        cardNumber: "",
        cardName: "",
        expDateMonth: "",
        expDateYear: "",
        cvc: "",
      });
    }
  };

  const backCardDetail = () => {
    setSwap(false);
  };

  return (
    <div id="container_interactiveCardDetail">
      <div id="leftDiv">
        <div id="cardFront">
          <div id="cardNumber">
            {form.cardNumber.length
              ? form.cardNumber.replace(/([0-9]{4})/g, "$1 ").trim()
              : "0000 0000 0000 0000"}
          </div>
          <div id="cardHolderName">
            {form.cardName.length ? form.cardName : "Jonh Doe"}
          </div>
          <div id="expDate">
            {form.expDateMonth.length ? form.expDateMonth : "12"}/
            {form.expDateYear.length ? form.expDateYear : "25"}
          </div>
        </div>
        <div id="cardBack">
          <div id="cvc">{form.cvc.length ? form.cvc : "000"}</div>
        </div>
      </div>
      {swap ? (
        <div id="container_added">
          <div id="icon_success"></div>

          <h3>THANK YOU!</h3>
          <p>We've added your card details</p>

          <button onClick={() => backCardDetail()}>Continue</button>
        </div>
      ) : (
        <div id="rightDiv">
          <form onSubmit={handleOnSubmit}>
            <div>
              <label htmlFor="">CARDHOLDER NAME</label>
              <input
                type="text"
                name="cardName"
                id=""
                placeholder="e.g. Jonh Doe"
                onChange={handleInputChange}
              />
              <span className="inputErrors">
                {" "}
                {errors.cardName && errors.cardName}
              </span>
            </div>

            <div>
              <label htmlFor="">CARD NUMBER</label>
              <input
                type="text"
                name="cardNumber"
                id=""
                placeholder="e.g. 1234 5678 9123 0000"
                onChange={handleInputChange}
                maxLength={19}
                value={form.cardNumber}
              />
              <span className="inputErrors">
                {errors.cardNumber && errors.cardNumber}
              </span>
            </div>

            <div className="expDateAndCvc">
              <div className="container_expDate">
                <label htmlFor="">EXP. DATE (MM/YY)</label>
                <input
                  type="text"
                  name="expDateMonth"
                  id=""
                  placeholder="MM"
                  onChange={handleInputChange}
                  maxLength={2}
                />
                <input
                  type="text"
                  name="expDateYear"
                  id=""
                  placeholder="YY"
                  onChange={handleInputChange}
                  maxLength={2}
                />
                <span className="inputErrors">
                  {errors.expDateYear || errors.expDateMonth}
                </span>
              </div>
              <div className="container_cvc">
                <label htmlFor="">CVC</label>
                <input
                  type="text"
                  name="cvc"
                  id=""
                  placeholder="e.g. 123"
                  onChange={handleInputChange}
                  maxLength={3}
                />
                <span className="inputErrors"> {errors.cvc && errors.cvc}</span>
              </div>
            </div>

            <button type="submit">Confirm</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default InteractiveCardDetailForm;
