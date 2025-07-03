// packages de terceiros 
import {useState} from 'react';

export default function UseToggleBar() {

    const [menu, setMenu] = useState(false);
    const handleOpen = () =>  setMenu(true);
    const handleClose = () =>  setMenu(!menu);
        
    return [
     handleOpen,
     handleClose,
     menu
    ]
}