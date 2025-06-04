import {Card, CardContent, CardActions, Box, Typography} from '@mui/material';
import ButtonCamp  from '../comum-components/buttonCom';
const VoucherCards = ({Icon, Alt, Title, SubTitle}) => {
    return (
         <Card elevation={1} className='card' position='relative'>
            <Box>
                <img src={Icon} alt={Alt} />
            </Box>
            <CardContent className='card-content'>
                <Typography variant='h3'>{Title}</Typography>
                <Typography variant='p'>{SubTitle}</Typography>
            </CardContent>
            <CardActions marginY='1em'>
                <ButtonCamp ButtonLabel='Add & install Extension' 
                Wd={210} Cl='White' BColor=' hsl(231, 69%, 60%)' />
            </CardActions>
         </Card>
    )
}

export default VoucherCards