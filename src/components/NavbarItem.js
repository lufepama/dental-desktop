import React, { useState, useRef, useEffect, createElement } from 'react'
import { useNavigate } from 'react-router-dom';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';

//icon, title, options

const NavbarItem = ({ icon, title, options }) => {

    const [open, setOpen] = useState(false)
    const anchorRef = useRef(null)
    const prevOpen = useRef(open)
    const navigate = useNavigate()

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target)
        ) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    const openMenuItemWindow = (menuItem) => {
        return navigate(menuItem.url)
    }

    useEffect(() => {
        console.log('arr', options)
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus()
        }
        prevOpen.current = open;
    }, [])

    return (
        <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            style={{ textTransform: 'none' }}
        >
            {icon}
            {title}
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    {options.map(el =>
                                        <MenuItem
                                            key={el.title}
                                            style={{ textTransform: 'none' }}
                                            onClick={() => { window.api.openPatientWindow({ url: el.url, title: el.title }) }}
                                        >{el.title}</MenuItem>
                                    )}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Button>
    )
}

export default NavbarItem