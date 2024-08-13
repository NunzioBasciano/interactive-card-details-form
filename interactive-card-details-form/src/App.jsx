import { useState } from "react";

const initialState = {
  cardholder_name: 'Jane Appleseed',
  card_number: '0000 0000 0000 0000',
  expiry_month: '00',
  expiry_year: '00',
  cvc: '000'
}

function App() {

  const [input, setInput] = useState(initialState);

  const handleChange = (e) => {
    setInput((prevState) => {
      const { name, value } = e.target;
      return { ...prevState, [name]: value };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} action="submit">
        <label htmlFor="name">CARDHOLDER NAME</label>
        <input onChange={handleChange} type="text" name="cardholder_name" placeholder="e.g. Jane Appleseed" />
        <label htmlFor="card">CARD NUMBER</label>
        <input onChange={handleChange} type="text" name="card_number" placeholder="e.g. 1234 5678 9123 0000" />
        <div className="bottom_form">
          <label htmlFor="expiry">EXPIRY DATE (MM/YY)</label>
          <input onChange={handleChange} type="text" name="expiry_month" placeholder="MM" />
          <input onChange={handleChange} type="text" name="expiry_year" placeholder="YY" />
          <label type="number" htmlFor="cvv">CVC</label>
          <input onChange={handleChange} type="text" name="cvc" placeholder="e.g. 123" />
          <input type="submit" value="confirm" />
        </div>
      </form>
      <div className="show">
        <p>{input.card_number}</p>
        <p>{input.cardholder_name}</p>
        <p>{input.expiry_month}</p>
        <p>{input.expiry_year}</p>
        <p>{input.cvc}</p>
      </div>
    </>
  )
}

export default App
