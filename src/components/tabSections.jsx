import {Stack, Typography, Box} from '@mui/material';
import ButtonCamp from './buttonCom';

const TabSection = ({heroImage, Title, SubTitle}) => {
    return (
      <Stack component='section' sx={{display:'flex', 
        flexDirection: {xs: 'column', lg: 'row'}, 
      justifyContent: {xs: 'center', lg: 'space-evenly'},
      alignItems: 'center', marginY: '2em'
      }}>
          <Box >
              <img src={heroImage} alt='' />
          </Box>
          <Stack component='section' sx={{marginY: {xs: '1em', lg: 0}}} width={{lg: 500}} >
             <Typography variant='h3'>{Title}</Typography>
             <Typography variant='p' marginY='1em'>{SubTitle}</Typography>
             <Stack sx={{xs: 'none', lg: 'block'}}>
                 <ButtonCamp ButtonLabel='More info' Wd='100px' Cl='#fff' BColor=' hsl(231, 69%, 60%)' />
             </Stack>
          </Stack>
      </Stack>
    )
}

export default TabSection