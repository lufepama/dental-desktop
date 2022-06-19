import { useContext } from 'react'
import NavbarContext from '../../context/navbar/NavbarContext'

export const useNavbar = () => {

    const { isNavbarActive, setIsNavbarActive } = useContext(NavbarContext)


    return {
        isNavbarActive,
        setIsNavbarActive
    }

}