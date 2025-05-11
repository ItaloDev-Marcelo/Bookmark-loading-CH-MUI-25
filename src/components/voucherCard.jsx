import {Card, CardContent, CardActions, Box, Typography} from '@mui/material';
import ButtonCamp  from './buttonCom';
const VoucherCards = ({Icon, Alt, Title, SubTitle}) => {
    return (
         <Card elevation={2}>
            <Box>
                <img src={Icon} alt={Alt} />
            </Box>
            <CardContent>
                <Typography variant='h3'>{Title}</Typography>
                <Typography variant='p'>{SubTitle}</Typography>
            </CardContent>
            <CardActions>
                <ButtonCamp ButtonLabel='Add & install Extension' 
                Wd={400} Cl='White' BColor='blue' />
            </CardActions>
         </Card>
    )
}

export default VoucherCards