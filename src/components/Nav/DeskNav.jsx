import {Stack, Link} from '@mui/material';
import imageBank from '../comum-components/imageBank';
import ListCamp from '../comum-components/ListComp';

export default function DeskBar(){
  
    return (
         <Stack component='nav'   id='desk-nav'
         sx={{display: {xs: 'none', lg: 'flex'} , flexDirection: 'row',
          justifyContent: 'space-between', alignItems: 'center', padding: '1em 5em'}}>
             <Link href='index.html'> <img src={imageBank.logo} alt='logo'/> </Link>
             <Stack>
                <ListCamp  />
             </Stack>
         </Stack>
    )
}