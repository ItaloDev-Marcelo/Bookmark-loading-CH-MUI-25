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
         <Stack component='nav' sx={{display: {xs: 'flex', lg: 'none'}, 
         flexDirection: 'row', justifyContent: 'space-between', background: 'red', 
         padding: '1em'}}>
             <Link href='index.html' sx={{display: !open ? 'block' : 'none'}}> <img src={imageBank.logo} alt='logo'/> </Link>
             <Button sx={{display: !open ? 'block' : 'none'}}  aria-description='menu toggle' onClick={toggleMenu}>
                <img src={imageBank.hamburger} alt='logo'/>
            </Button>
             <Stack id='navegation-Bar' sx={{position: 'absolute', top: 0, left: 0,
              display: open ? 'flex' : 'none', lg: 'none', flexDirection: 'column', 
              alignItems: 'center' }}
              >

                <Stack  sx={{display: 'flex', 
         flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button   onClick={toggleMenu}>
                 <img src={imageBank.logoWhite} alt="logo" />
            </Button>
                    <Button sx={{position: 'relative', left: '10%'}}  aria-description='menu toggle' onClick={toggleMenu}>
                <img src={imageBank.close} alt='logo'/>
            </Button>

               
                </Stack>
                 
                   
                              
                  <ListCamp  />
                  <Stack  sx={{display: 'flex', 
         flexDirection: 'row', justifyContent: 'space-between',width: '100px', padding: '1em'}}>
                     <FacebookIcon />
                     <TwitterIcon/>
                  </Stack>
             </Stack>
         </Stack>
    )
}