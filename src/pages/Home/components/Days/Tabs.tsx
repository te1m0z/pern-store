import React from 'react'
import s from './Days.module.scss'

interface Props {
    
}

interface Tab {
    value: string;
}

export const Tabs = (props: Props) => {
    const tabs = [
        {value: 'На неделю'},
        {value: 'На 10 дней'},
        {value: 'На месяц'}
    ]
    return (
        <div className={s.tabs}>
            <div className={s.tabs__wrapper}>
                {
                    tabs.map((el: Tab) => (
                        <div className={s.tab} key={el.value}>
                            {el.value}
                        </div>
                    ))
                }
            </div>
            <div className={s.cancel}>Отменить</div>
        </div>
    )
}
