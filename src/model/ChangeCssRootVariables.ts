import { Theme } from '../context/ThemeContext'

export function changeCssRootVariables(theme: Theme) {
    const root = document.querySelector(':root') as HTMLElement
    const comps = [
        'body-background',
        'components-background',
        'card-background',
        'card-shadow',
        'text-color',
    ]
    comps.forEach(el => {
        root.style.setProperty(
            `--${el}-default`,
            `var(--${el}-${theme})`
        )
    })
}