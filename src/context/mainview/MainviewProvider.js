import { useState } from 'react'
import { createContext, useEffect } from 'react'

const Context = createContext({})

export const MainviewProvider = ({ children }) => {

    const [activeWindow, setActiveWindow] = useState('')

    return (
        <Context.Provider value={{ activeWindow, setActiveWindow }} >
            {children}
        </Context.Provider>
    )
}

export default Context