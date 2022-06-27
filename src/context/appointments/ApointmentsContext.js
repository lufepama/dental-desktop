import { BACKEND_URL } from '../../backend'
import { useState, createContext, useEffect } from 'react'

const Context = createContext({})

export const AppointmentsProvider = ({ children }) => {


    return (
        <Context.Provider value={{}} >
            {children}
        </Context.Provider>
    )
}

export default Context