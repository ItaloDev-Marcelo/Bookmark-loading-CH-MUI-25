import { Box } from "@mui/material";
import NavBar from "../nav/mob";
import DeskBar from "../nav/dek";
import Title from "../comum-components/title/index"
import Paragraph from '../comum-components/paragraph/index'
import ButtonCamp from '../comum-components/button/index'


export default function Hero() {
    return (
        <section>
             <Box sx={{display: {xs: 'block', md: 'none'}}}>
                <NavBar/>
             </Box>

              <Box sx={{display: {xs: 'none', md: 'block'}}}>
                <DeskBar/>
             </Box>

             <div>

                <Title headLeval='h1' Text='A Simple Bookmark Manager' />
                <Paragraph Text=' A clean and simple interface to organize your favourite websites. Open a new 
  browser tab and see your sites load instantly. Try it for free.' />

                <div>
                    <ButtonCamp title="Get it on Chrome" btnStyle='' />
                    <ButtonCamp title="Get it on Firefox" btnStyle='' />
                </div>
             </div>

        </section>
    )
}