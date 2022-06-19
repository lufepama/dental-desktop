import { useState, createContext } from 'react'

const Context = createContext({})

export const NavbarProvider = ({ children }) => {

    const [isNavbarActive, setIsNavbarActive] = useState(false)

    return (
        <Context.Provider value={{ isNavbarActive, setIsNavbarActive }} >
            {children}
        </Context.Provider>
    )
}

export default Context