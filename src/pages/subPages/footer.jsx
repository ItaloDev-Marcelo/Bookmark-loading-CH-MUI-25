
import { Stack, Typography, Link } from "@mui/material";
import imageBank from "../../components/comum-components/imageBank";
import FormComp from "../../components/Form/index";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { List, ListItem } from "@mui/material";

export default function Footer() {
    return (
        <>
         <Stack component="footer" backgroundColor='grey' >
                 <Stack component="section">
                   <Typography variant="h4"> 35,000+ already joined</Typography>
                   <Typography variant="h5">
                     Stay up-to-date with what we’re doing
                   </Typography>
                   <FormComp />
                 </Stack>
                 <Stack>
                   <Link href="index.html">
                     <img src={imageBank.logoWhite} alt="logo" />
                   </Link>
                   <Stack
                     id="navegation-Bar"
                   >
                     <List
                       sx={{
                         display: "flex",
                         flexDirection: { xs: "column", lg: "row" },
                         justifyContent: { xs: "center", lg: "space-between" },
                         alignItems: "center",
                       }}
                     >
                       <ListItem> Features </ListItem>
                       <ListItem> Pricing </ListItem>
                       <ListItem> Contact </ListItem>
                     </List>
         
                     <Stack>
                       <FacebookIcon />
                       <TwitterIcon />
                     </Stack>
                   </Stack>
                 </Stack>
               </Stack>
        </>
    )
}