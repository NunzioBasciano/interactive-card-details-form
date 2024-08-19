import React from 'react';
import { useState, useEffect } from "react";
import { labels } from '../data/labels';
import { formatCardNumber, formatMonthNumber, formatYearNumber, formatCardholderName } from '../function/formatFunction';



const emptyState = {
    cardholder_name: '',
    card_number: '',
    expiry_month: '',
    expiry_year: '',
    cvc: ''
}


function Form(props) {
    const [form, setForm] = useState(emptyState);
    const [errors, setErrors] = useState({});



    const { setCard, setIsOpen } = props;

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

    const handleKeyDown = (e) => {
        if (!/^[0-9e]$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
            e.preventDefault();
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;

        let formattedValue = value;

        if (name === 'cardholder_name') {
            formattedValue = formatCardholderName(formattedValue);
        }
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
    }


    useEffect(() => {
        if (Object.keys(errors).length === 0 && form.cardholder_name !== '') {
            setIsOpen(true);
            setCard(form);
        }
    }, [errors]);

    return (
        <form className='flex flex-col gap-2 mt-16 px-5 
            2xl:w-96 2xl:mx-48 2xl:my-48
            ' onSubmit={handleSubmit} action="submit">
            <label className='text-[14px] text-[--very-dark-violet] tracking-[1px] mb-[1px] uppercase' htmlFor="name">{labels.cardholderNameLabel}</label>
            <input
                className='border-solid border-[1px] border-[--light-grayish-violet] px-3 py-2 rounded-md	 '
                onChange={handleChange}
                type="text"
                name="cardholder_name"
                placeholder="e.g. Jane Appleseed"
            />
            {errors.cardholder_name && <p className='text-[--red] text-[10px]'>{errors.cardholder_name}</p>}

            <label className='text-[14px] text-[--very-dark-violet] tracking-[1px] mt-[px] mb-[1px] uppercase' htmlFor="card">{labels.cardNumberLabel}</label>
            <input
                className='border-solid border-[1px] border-[--light-grayish-violet] px-3 py-2 rounded-md	 '
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                type="text"
                name="card_number"
                placeholder="e.g. 1234 5678 9123 0000"
                maxLength="19"
                value={form.card_number}
            />
            {errors.card_number && <p className='text-[--red] text-[10px]'>{errors.card_number}</p>}


            <div className='flex justify-between'>
                <div className='flex flex-col w-[48%]'>
                    <label className='text-[14px] text-[--very-dark-violet] tracking-[1px] mb-2 uppercase' htmlFor="expiry">{labels.expiryDateLabel}</label>
                    <div className='flex gap-2'>
                        <input
                            className='border-solid border-[1px] border-[--light-grayish-violet] px-3 py-2 rounded-md w-full '
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            type="text"
                            name="expiry_month"
                            placeholder="MM"
                            maxLength="2"
                        />
                        <input
                            className='border-solid border-[1px] border-[--light-grayish-violet] px-3 py-2 rounded-md w-full'
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            type="text"
                            name="expiry_year"
                            placeholder="YY"
                            maxLength="2"
                        />
                    </div>
                </div>

                <div className='flex flex-col w-2/4 ml-2'>
                    <label className='text-[14px] text-[--very-dark-violet] tracking-[1px] mb-2 uppercase' htmlFor="cvv">{labels.cvvLabel}</label>
                    <input
                        className='border-solid border-[1px] border-[--light-grayish-violet] px-3 py-2 rounded-md w-full'
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        type="text"
                        name="cvc"
                        placeholder="e.g. 123"
                        maxLength="3"
                        value={form.cvc}
                    />
                </div>
            </div>
            <div className='flex gap-[95px]'>
                {errors.expiry && <p className='text-[--red] text-[10px]'>{errors.expiry}</p>}
                {errors.cvc && <p className='text-[--red] text-[10px]'>{errors.cvc}</p>}
            </div>
            <input className='bg-[--very-dark-violet] py-[11px] my-[12px] rounded-md text-[--white] tracking-[1px] text-[16px] w-full' type="submit" value={labels.submitButtonLabel} />
        </form>
    )
}


export { Form };