import {Button} from "@mui/material"

const ButtonCamp = ({title = 'More', btnStyle}) => {
   return <Button className={btnStyle}>{title}</Button>
}

export default ButtonCamp 