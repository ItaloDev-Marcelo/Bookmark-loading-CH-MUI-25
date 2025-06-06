import ButtonCamp from "../../components/comum-components/buttonCom";
import imageBank from "../../components/comum-components/imageBank";
import { Stack, Typography, Box} from "@mui/material";


export default function Header() {

  

    return (
          <Stack component="header" padding={{xs: '1em' ,lg: '2em 7em '}} >
                 <Stack component="section"  sx={{display: 'flex', 
                   flexDirection: {xs: 'column-reverse', lg: 'row'},
                    textAlign: {xs: 'center', lg: 'left'}}} >
        
                    <Stack  sx={{display: 'flex', 
                   flexDirection: 'column',justifyContent: 'center',alignItems: {xs: 'center', lg: 'flex-start'}}} 
                      width={{lg: 500}} >
                     <Typography variant="h2" marginY='.5em' fontSize={{xs: '1.7em', lg:'2.7em'}}>A Simple Bookmark Manager</Typography>
                   <Typography  variant="p" fontSize={{xs: '.8em', lg:'1em'}} 
                   marginBottom='1em' paddingX={{xs: '1.3em', lg: 0}}>
                     A clean and simple interface to organize your favourite websites.
                     Open a new browser tab and see your sites load instantly. Try it for
                     free.
                   </Typography>
                    <Stack id='btn-row' sx={{display: 'flex', flexDirection: 'row', maxWidth: 
                     '400px', marginY: {xs: '.7em' , lg: '.5em'}, gap: 1}} >
                     <Stack>
                        <ButtonCamp
                     ButtonLabel="Get it on Chrome"
                     Wd="145px"
                     Cl="#fff"
                     BColor="hsl(231, 69%, 60%)"
                   />
                     </Stack>
                   <ButtonCamp
                     ButtonLabel="Get it on Firefox"
                     Wd="140px"
                     Cl="hsl(229, 31%, 21%)"
                     BColor="hsl(0, 0%, 97%)"
                   />
         
                    </Stack>
                    </Stack>
         
                   <Box sx={{marginY: '1em'}}>
                   <img src={imageBank.hero} alt="hero simple bookmark" />
                 </Box>
                 </Stack>
           </Stack>
    )
}