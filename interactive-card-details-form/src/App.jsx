import { useState } from "react";
import { labels } from './data/labels.js';
import { Form } from './components/Form.jsx';
import { Card } from './components/Card.jsx';
import IconComplete from './components/IconComplete.jsx'

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

  const handleConfirm = () => {
    setIsOpen(false);
    setCard(initialState); // Reset form inputs to initial state upon successful payment confirmation
  }

  return (
    <>
      <Card
        card={card}
      />
      {isOpen &&
        <div className="flex flex-col items-center gap-3 py-16">
          <IconComplete />
          <h2 className="text-[26px] uppercase tracking-[1.5px] text-[--very-dark-violet] mt-4">{labels.completeTitle}</h2>
          <p className="text-[--dark-grayish-violet] text-[18px]">{labels.completeMessage}</p>
          <button
            onClick={handleConfirm}
            className="bg-[--very-dark-violet] py-[11px] my-[12px] rounded-md text-[--white] tracking-[1px] text-[16px] w-4/5">{labels.continueButtonTitle}</button>
        </div>
      }
      {!isOpen &&
        <Form
          setCard={setCard}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      }
    </>
  );
}

export default App;