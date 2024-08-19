import React from 'react'

function Card(props) {
    const { card } = props
    return (
        <>
            <div className='bg-main_mobile bg-center bg-cover flex justify-end items-start relative h-56'>
                <div className='absolute bg-card_back bg-contain bg-no-repeat rounded w-64 h-40 top-7 right-3'>
                    <p className='absolute top-[71px] right-[36px] text-[--white] text-[9px] tracking-[1px]'>{card.cvc}</p>
                </div>
                <div className='absolute bg-card_front bg-cover rounded w-64 h-36 bottom-[-32px] left-4 p-4'>
                    <p>{card.card_number}</p>
                    <p>{card.cardholder_name}</p>
                    <p>{card.expiry_month}</p>
                    <p>{card.expiry_year}</p>
                    {/*     <p>{card.cvc}</p> */}
                </div>
            </div>
        </>
    )
}

export { Card };