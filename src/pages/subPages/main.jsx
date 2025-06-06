import TabSlider from "../layout/index"
import imageBank from "../../components/comum-components/imageBank";
import VoucherCards from "../../components/comum-components/voucherCard";
import AccordionSection from "../../components/Acoordion/index";
import { Stack, Typography, Box } from "@mui/material";

export default function Main() {
    return (
        <Stack component="main" sx={{marginTop: '2em'}}>
                <Stack component="section">
                  <Stack component="section" textAlign='center' 
                   padding={{xs: '1em' ,lg: '2em 3em'}}>
                   <Typography variant="h2" fontSize={{xs: '1.5em', lg:'1.7em'}}>Features</Typography>
                  <Typography variant="p" lineHeight='20px' padding={{xs: '2em .5em .5em .2em', lg: ' 2em 20em'}} 
                   fontSize={{xs: '.8em', lg:'1em'}}> Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</Typography>
                  </Stack>
                  <Box>
                    <TabSlider  />
                  </Box>
                </Stack>
                <Stack component="section" sx={{padding: {xs: '1em' ,lg: '4em 3em 3em 2em'}, textAlign: 'center' }} >
                  <Typography variant="h2" fontSize={{xs: '1em', lg: '1.5em'}} > Download the extension</Typography>
                  <Typography variant="p"  padding={{xs: '2em', lg: ' 2em 20em'}}>
                    We’ve got more browsers in the pipeline. Please do let us know if
                    you’ve got a favourite you’d like us to prioritize.
                  </Typography>
                  <Stack id='card-container' sx={{display: 'flex', flexDirection: {lg: 'row'}}} margin='0 auto'>
                      <VoucherCards
                    Icon={imageBank.logoChrome}
                    Alt="chrome logo"
                    Title=" Add to Chrome"
                    SubTitle="Minimum version 62"
                  />
                  <VoucherCards
                    Icon={imageBank.logoFirefox}
                    Alt="firefox logo"
                    Title="Add to Firefox"
                    SubTitle="Minimum version 55"
                  />
                  <VoucherCards
                    Icon={imageBank.logoOpera}
                    Alt="opera logo"
                    Title="Add to Opera"
                    SubTitle="Minimum version 46"
                  />
                  </Stack>
                </Stack>
                <Stack component="section" padding={{xs: '1em' ,lg: '2em 20em'}}>
                  <Typography variant="h2">Frequently Asked Questions</Typography>
                  <Typography variant="p">
                    Here are some of our FAQs. If you have any other questions you’d
                    like answered please feel free to email us.
                  </Typography>
                  <AccordionSection />
                </Stack>
              </Stack>
    )
}