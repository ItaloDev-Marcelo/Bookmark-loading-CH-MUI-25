import {Button} from '@mui/material'

const ButtonCamp  = ({ButtonLabel, Wd,Cl,BColor}) => {
    return (
       <Button elevation={2} sx={{width: Wd, color: Cl, backgroundColor: BColor}}>{ButtonLabel}</Button>
    )
}

export default ButtonCamp