import {useState} from 'react';
import {Stack, Button, Link} from '@mui/material';
import imageBank from '../comum-components/imageBank';
import ListCamp from '../comum-components/ListComp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function MobileBar(){
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(prev => !prev) 
    }

    return (
         <Stack component='nav' sx={{display: {xs: 'flex', lg: 'none'}, 
         flexDirection: 'row', justifyContent: 'space-between',
         padding: '1.5em 1.2em'}}>
             <Link href='index.html' sx={{display: !open ? 'block' : 'none', marginLeft: '1.2em'}}>
              <img src={imageBank.logo} alt='logo'/> </Link>
             <Button sx={{display: !open ? 'block' : 'none'}} 
              aria-description='menu toggle' onClick={toggleMenu}>
                <img src={imageBank.hamburger} alt='logo'/>
            </Button>
             <Stack id='navegation-Bar' sx={{position: 'fixed', top: 0, left: 0,
             width: "100%", height:"100%", overflow: 'hidden', 
              display: open ? 'flex' : 'none', lg: 'none', flexDirection: 'column', 
              alignItems: 'center', zIndex: 1 }}
              >

                <Stack  sx={{display: 'flex',width: '77%',
         flexDirection: 'row', justifyContent: 'space-between', padding: '2.2em 0'}}>
       
            <Button   onClick={toggleMenu}>
                 <img src={imageBank.logoWhite} alt="logo" />
            </Button>
                     <Button sx={{position: 'relative', left: '10%'}}  aria-description='menu toggle' onClick={toggleMenu}>
                <img src={imageBank.close} alt='logo'/>
                 </Button>
                </Stack>   

                  <ListCamp  />
                  <Stack  sx={{display: 'flex',  marginTop: {xs: '4em'},
         flexDirection: 'row', 
         justifyContent: 'space-between',width: '100px', padding: '1em'}}>
                     <FacebookIcon/>
                     <TwitterIcon/>
                  </Stack>
             </Stack>
         </Stack>
    )
}

