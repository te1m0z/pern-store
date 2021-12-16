import React from 'react'
import Select from 'react-select'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import s from './Header.module.scss'

interface Props {

}

export const Header = (props: Props) => {

    const selectOptions = [
        { value: 'moscow', label: 'Москва' },
        { value: 'peterburg', label: 'Санкт-Птербург' },
        { value: 'saratov', label: 'Саратов' }
    ]

    const selectStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: 0 ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
            width: 190,
            height: '35px',
            border: '1px solid #000',
            borderRadius: '10px',
            zIndex: 30,
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: 0 ? '#fff' : '#4f4f4f'
        })
    }

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id='header-logo' />
                </div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme}>
                    <GlobalSvgSelector id='change-theme' />
                </div>
                <Select
                    defaultValue={selectOptions[2]}
                    styles={selectStyles}
                    options={selectOptions}
                />
            </div>
        </header>
    )
}
