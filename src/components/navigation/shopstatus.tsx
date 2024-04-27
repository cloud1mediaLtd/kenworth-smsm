"use client";
import { MapIcon, MapPinIcon } from '@heroicons/react/20/solid';
import React, { useState, useEffect } from 'react';

type Status = {
    text: string;
    color: string;
};

const ShopStatus: React.FC = () => {
    const SHOP_OPENING_HOUR = 8;
    const SHOP_CLOSING_HOUR = 19;

    const [status, setStatus] = useState<Status>({ text: '', color: 'text-gray-500' });

    const checkShopStatus = () => {
        const currentDate = new Date();
        const currentHour = currentDate.getHours();
        const currentDay = currentDate.getDay();

        // Check if it's Sunday
        if (currentDay === 6) {
            setStatus({ text: 'Closed', color: 'text-red-500' });
            return;
        }

        // Check if it's Saturday after closing hours
        if (currentDay === 5 && currentHour >= SHOP_CLOSING_HOUR) {
            setStatus({ text: 'Closed', color: 'text-red-500' });
            return;
        }

        // Normal day/hour checking
        if (currentHour < SHOP_OPENING_HOUR) {
            setStatus({ text: 'Opening Soon', color: 'text-gray-500' });
        } else if (currentHour < SHOP_OPENING_HOUR + 1) {
            setStatus({ text: 'Welcome | Open ', color: 'text-green-500' });
        } else if (currentHour < SHOP_CLOSING_HOUR - 1) {
            setStatus({ text: 'Welcome | Open', color: 'text-green-500' });
        } else if (currentHour < SHOP_CLOSING_HOUR) {
            setStatus({ text: 'Closing Soon', color: 'text-orange-500' });
        } else {
            setStatus({ text: 'Closed | Open 8 am', color: 'text-red-500' });
        }
    };

    useEffect(() => {
        checkShopStatus();
        const timer = setInterval(() => {
            checkShopStatus();
        }, 900);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <span className={`${status.color} text-sm text-nowrap flex gap-1.5 items-center`}>
            {status.text}
            <MapPinIcon className="h-5 w-5 inline-block" />
        </span>
    );
}

export default ShopStatus;
