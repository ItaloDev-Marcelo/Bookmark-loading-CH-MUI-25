import {Stack, Typography, Box} from '@mui/material';
import ButtonCamp from './buttonCom';

const TabSection = ({heroImage, Title, SubTitle}) => {
    return (
      <Stack component='section' className='TabSection-container'>
          <Box >
              <img src={heroImage} alt='' />
          </Box>
          <Stack component='section' >
             <Typography variant='h3'>{Title}</Typography>
             <Typography variant='p'>{SubTitle}</Typography>
             <Stack sx={{xs: 'none', lg: 'block'}}>
                 <ButtonCamp ButtonLabel='More info' Wd='100px' Cl='#fff' BColor='blue' />
             </Stack>
          </Stack>
      </Stack>
    )
}

export default TabSection