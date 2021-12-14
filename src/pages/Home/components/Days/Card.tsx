import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector'
import { Day } from './Days'
import s from './Days.module.scss'

interface Props {
    item: Day
}

export const Card = ({ item }: Props) => {
    const {day, day_info, icon_id, temp_day, temp_night, info} = item
    return (
        <div className={s.card}>
            <div className={s.day}>{day}</div>
            <div className={s.day__info}>{day_info}</div>
            <div className={s.img}>
                <GlobalSvgSelector id={icon_id} />
            </div>
            <div className={s.temp__day}>{temp_day}</div>
            <div className={s.temp__night}>{temp_night}</div>
            <div className={s.info}>{info}</div>
        </div>
    )
}
