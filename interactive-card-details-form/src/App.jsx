import { useState, useEffect } from "react";
import { labels } from './data/labels.js';

const formatCardNumber = (value) => {
  // Rimuove tutti gli spazi e poi aggiunge uno spazio ogni 4 cifre
  return value.replace(/\s+/g, "").replace(/(\d{4})(?!e)/g, "$1 ").trim();
};


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



  const handleChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;
    if (name === 'card_number') {
      formattedValue = value.replace(/[^0-9e]/g, "");
      formattedValue = formatCardNumber(formattedValue);
    }
    setForm((prevState) => {
      return { ...prevState, [name]: formattedValue };
    });
    setCard((prevState) => {
      return { ...prevState, [name]: formattedValue };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();


    let formErrors = {};

    if (!form.cardholder_name) {
      formErrors.cardholder_name = labels.cardholderNameError;
    }
    if (!form.card_number) {
      formErrors.card_number = labels.cardNumberError;
    }
    if (form.card_number.toLowerCase().includes('e')) {
      formErrors.card_number = labels.cardNumberErrorFormatted;
    }

    setErrors(formErrors);
  };


  useEffect(() => {
    setErrors({})
  }, [])


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
          type="text"
          name="card_number"
          placeholder="e.g. 1234 5678 9123 0000"
          maxLength="16"
        />
        {errors.card_number && <p>{errors.card_number}</p>}
        <div className="bottom_form">
          <label htmlFor="expiry">{labels.expiryDateLabel}</label>
          <input
            onChange={handleChange}
            type="text"
            name="expiry_month"
            placeholder="MM"
          />
          <input
            onChange={handleChange}
            type="text"
            name="expiry_year"
            placeholder="YY"
          />
          <label type="number" htmlFor="cvv">{labels.cvvLabel}</label>
          <input
            onChange={handleChange}
            type="text"
            name="cvc"
            placeholder="e.g. 123" />
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
  )
}

export default App
