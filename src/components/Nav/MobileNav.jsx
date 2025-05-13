import {useState} from 'react';
import {Stack, Button, Link} from '@mui/material';
import imageBank from '../imageBank';
import ListCamp from '../ListComp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function MobileBar(){
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(prev => !prev) 
    }

    return (
         <Stack component='nav' className=''>
             <Link href='index.html'> <img src={imageBank.logo} alt='logo'/> </Link>
             <Button  aria-description='menu toggle' onClick={toggleMenu}><img src={open ? imageBank.close : imageBank.hamburger } alt='logo'/></Button>
             <Stack id='navegation-Bar' display={{xs: open ? 'block' : 'none', lg: 'none'}}>
                  <ListCamp  />
                  <Stack>
                     <FacebookIcon />
                     <TwitterIcon/>
                  </Stack>
             </Stack>
         </Stack>
    )
}