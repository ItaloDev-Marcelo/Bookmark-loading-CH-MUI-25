import {Stack, Link} from '@mui/material';
import imageBank from '../imageBank';
import ListCamp from '../ListComp';

export default function DeskBar(){
  
    return (
         <Stack component='nav' className=''>
             <Link href='index.html'> <img src={imageBank.logo} alt='logo'/> </Link>
             <ListCamp  />
         </Stack>
    )
}