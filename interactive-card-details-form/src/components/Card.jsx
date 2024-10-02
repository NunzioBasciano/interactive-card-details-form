import React from 'react'
import CardIcon from './CardIcon';

function Card(props) {
    const { card } = props
    return (
        <>
            <div className='bg-main_mobile bg-center bg-cover flex justify-end items-start relative h-56
                            2xl:bg-main_desktop 2xl:bg-center 2xl:bg-cover 2xl:w-1/3 2xl:h-screen '>
                <div className='absolute bg-card_back bg-contain bg-no-repeat rounded w-64 h-40 top-7 right-3
                box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
                                2xl:top-[440px] 2xl:left-[330px]'>
                    <p className='absolute top-[71px] right-[36px] text-[--white] text-[9px] tracking-[1px]'>{card.cvc}</p>
                </div>
                <div className='absolute bg-card_front bg-cover flex flex-col justify-between rounded w-64 h-36 bottom-[-32px] left-4 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]
                                2xl:top-[250px] 2xl:left-[260px] '>
                    <CardIcon
                    />
                    <div className='flex flex-col gap-3 p-4  text-[--white] '>
                        <p className='text-center tracking-[2.5px] text-[18px] '>{card.card_number}</p>
                        <div className='flex justify-between tracking-[1.5px] '>
                            <p className='text-[10px] uppercase'>{card.cardholder_name}</p>
                            <p className='text-[10px] '>{card.expiry_month}/{card.expiry_year}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Card };