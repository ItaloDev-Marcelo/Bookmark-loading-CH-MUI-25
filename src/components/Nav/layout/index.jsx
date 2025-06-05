import {Stack, Box} from '@mui/material';
import MobileNav from '../MobileNav';
import DeskNav from '../DeskNav';

export default function NavBar(){
    return (
         <Stack component='nav'>
              <Box sx={{display: {xs: 'block' ,lg: 'none'}}}>
                  <MobileNav/>
              </Box>
              <Box sx={{display: {xs: 'none' ,lg: 'block'}}}>
                  <DeskNav/>
              </Box>
         </Stack>
    )
}