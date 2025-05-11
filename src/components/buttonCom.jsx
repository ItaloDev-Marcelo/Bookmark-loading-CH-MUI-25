import {Button} from '@mui/material'

const ButtonCamp  = ({ButtonLabel, Wd,Cl,BColor}) => {
    return (
       <Button sx={{width: Wd, color: Cl, backgroundColor: BColor}}>{ButtonLabel}</Button>
    )
}

export default ButtonCamp