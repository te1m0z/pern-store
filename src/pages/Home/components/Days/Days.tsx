import React from 'react'
import { Card } from './Card';
import s from './Days.module.scss'
import { Tabs } from './Tabs';

interface Props {

}

export interface Day {
    day: string;
    day_info: string;
    icon_id: string;
    temp_day: string;
    temp_night: string;
    info: string;
}

export const Days = (props: Props) => {
    const days: Day[] = [
        {
            day: 'Сегодня',
            day_info: '14 декабря',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно'
        },
        {
            day: 'Завтра',
            day_info: '15 декабря',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Небольшой дождь'
        },
        {
            day: 'Ср',
            day_info: '16 декабря',
            icon_id: 'small_rain',
            temp_day: '+13',
            temp_night: '+7',
            info: 'Небольшой дождь'
        },
        {
            day: 'Чт',
            day_info: '17 декабря',
            icon_id: 'mainly_cloudy',
            temp_day: '+3',
            temp_night: '+2',
            info: 'Облачно'
        }
    ]
    return (
        <>
            <Tabs />
            <div className={s.days}>
                {
                    days.map((day: Day) => (
                        <Card
                            key={day.day_info}
                            item={day}
                        />
                    ))
                }
            </div>
        </>
    )
}
