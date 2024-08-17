import { useState, useEffect } from "react";
import { labels } from './data/labels.js';


const initialState = {
  cardholder_name: 'e.g. Jane Appleseed',
  card_number: '0000 0000 0000 0000',
  expiry_month: '00',
  expiry_year: '00',
  cvc: '000'
}

function App() {

  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm((prevState) => {
      const { name, value } = e.target;
      return { ...prevState, [name]: value };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setForm((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

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
        {cardholder_nameValidation && <p>Attenzione non hai correttamente compilato il campo</p>}
        <label htmlFor="card">{labels.cardNumberLabel}</label>
        <input
          onChange={handleChange}
          type="text"
          name="card_number"
          placeholder="e.g. 1234 5678 9123 0000"
        />
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
      <div className="show">
        <p>{form.card_number}</p>
        <p>{form.cardholder_name}</p>
        <p>{form.expiry_month}</p>
        <p>{form.expiry_year}</p>
        <p>{form.cvc}</p>
      </div>
    </>
  )
}

export default App
