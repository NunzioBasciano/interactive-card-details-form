import { useState, useEffect } from "react";
import { labels } from './data/labels.js';
import { formatCardNumber, formatMonthNumber, formatYearNumber } from './function/formatFunction.js';

const initialState = {
  cardholder_name: 'e.g. Jane Appleseed',
  card_number: '0000 0000 0000 0000',
  expiry_month: '00',
  expiry_year: '00',
  cvc: '000'
}

const emptyState = {
  cardholder_name: '',
  card_number: '',
  expiry_month: '',
  expiry_year: '',
  cvc: ''
}

function App() {

  const [form, setForm] = useState(emptyState);
  const [card, setCard] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleKeyDown = (e) => {
    if (!/^[0-9e]$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
      e.preventDefault();
    }
  };

  const validateForm = () => {
    let formErrors = {};

    if (!form.cardholder_name) {
      formErrors.cardholder_name = labels.cardholderNameError;
    }
    if (!form.card_number || form.card_number.length !== 19) {
      formErrors.card_number = labels.cardNumberError;
    }
    if (form.card_number.toLowerCase().includes('e')) {
      formErrors.card_number = labels.cardNumberErrorFormatted;
    }
    if (!form.expiry_month || !form.expiry_year) {
      formErrors.expiry = labels.cardExpiryError;
    }
    if (!form.cvc) {
      formErrors.cvc = labels.cvvError;
    }

    setErrors(formErrors);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;

    /*    if (name === 'cardholder_name') {
         const valueLower = value.trim().toLowerCase();
         const valueUpper = valueLower.at(0).toUpperCase();
         const valueWithoutFirstLetter = valueLower.slice(0);
         formattedValue = valueUpper + valueWithoutFirstLetter;
       } */
    if (name === 'card_number') {
      formattedValue = value.replace(/[^0-9e]/g, "");
      formattedValue = formatCardNumber(formattedValue);
    }
    if (name === 'expiry_month') {
      formattedValue = formatMonthNumber(formattedValue);
    }
    if (name === 'expiry_year') {
      formattedValue = formatYearNumber(formattedValue);
    }
    if (name === 'cvc') {
      formattedValue = value;
    }

    setForm((prevState) => {
      const newState = { ...prevState, [name]: formattedValue };
      return newState;
    });
    setCard((prevState) => ({ ...prevState, [name]: formattedValue }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();

    if (Object.keys(errors).length === 0) {
      setCard(form);
    }
  };

  useEffect(() => {
    setErrors({});
  }, [form])

  return (
    <>
      <form onSubmit={handleSubmit} action="submit">
        <label htmlFor="name">{labels.cardholderNameLabel}</label>
        <input
          onChange={handleChange}
          type="text"
          name="cardholder_name"
          placeholder="e.g. Jane Appleseed"
        />
        {errors.cardholder_name && <p>{errors.cardholder_name}</p>}

        <label htmlFor="card">{labels.cardNumberLabel}</label>
        <input
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          type="text"
          name="card_number"
          placeholder="e.g. 1234 5678 9123 0000"
          maxLength="19"
          value={form.card_number}
        />
        {errors.card_number && <p>{errors.card_number}</p>}

        <div className="bottom_form">
          <label htmlFor="expiry">{labels.expiryDateLabel}</label>
          <input
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            type="text"
            name="expiry_month"
            placeholder="MM"
            maxLength="2"
          />
          <input
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            type="text"
            name="expiry_year"
            placeholder="YY"
            maxLength="2"
          />
          {errors.expiry && <p>{errors.expiry}</p>}

          <label htmlFor="cvv">{labels.cvvLabel}</label>
          <input
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            type="text"
            name="cvc"
            placeholder="e.g. 123"
            maxLength="3"
            value={form.cvc}
          />
          {errors.cvc && <p>{errors.cvc}</p>}

          <input type="submit" value={labels.submitButtonLabel} />
        </div>
      </form>
      <hr></hr>
      <div className="show">
        <p>{card.card_number}</p>
        <p>{card.cardholder_name}</p>
        <p>{card.expiry_month}</p>
        <p>{card.expiry_year}</p>
        <p>{card.cvc}</p>
      </div>
    </>
  );
}

export default App;