import React from "react"
import { ReactNode } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { changeCssRootVariables } from "../model/ChangeCssRootVariables"
import { Theme } from '../context/ThemeContext'
import { storage } from "../model/Storage"

interface Props {
    children: ReactNode
}

export const ThemeProvider = ({ children, ...props }: Props) => {
    const [theme, setTheme] = React.useState<Theme>(storage.getItem('theme') || Theme.LIGHT)

    changeCssRootVariables(theme)
    
    function changeTheme(newTheme: Theme) {
        storage.setItem('theme', newTheme)
        setTheme(newTheme)
        changeCssRootVariables(newTheme)
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                changeTheme,
            }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    )
}