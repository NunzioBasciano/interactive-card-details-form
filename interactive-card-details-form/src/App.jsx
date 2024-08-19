import { useState } from "react";
import { labels } from './data/labels.js';
import { Form } from './components/Form.jsx';
import { Card } from './components/Card.jsx';

const initialState = {
  cardholder_name: 'Jane Appleseed',
  card_number: '0000 0000 0000 0000',
  expiry_month: '00',
  expiry_year: '00',
  cvc: '000'
}


function App() {

  const [card, setCard] = useState(initialState);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen &&
        <Card
          card={card}
        />}
      {isOpen && <div>thank you!</div>}
      <Form
        setCard={setCard}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <hr></hr>
    </>
  );
}

export default App;