import "./App.css";
import TabSection from "./pages/index";
import FormComp from "./components/Form/index";
import AccordionSection from "./components/Acoordion/index";
import { Stack, Typography, Box, Link } from "@mui/material";
import ButtonCamp from "./components/buttonCom";
import imageBank from "./components/imageBank";
import VoucherCards from "./components/voucherCard";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { List, ListItem } from "@mui/material";

function App() {
  return (
    <>
      <Stack component="header">
        
        <Stack component="section">
          <Typography variant="h2">A Simple Bookmark Manager</Typography>
          <Typography variant="p">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </Typography>
          <ButtonCamp
            ButtonLabel="Get it on Chrome"
            Wd="150px"
            Cl=""
            BColor=""
          />
          <ButtonCamp
            ButtonLabel="Get it on Firefox"
            Wd="150px"
            Cl=""
            BColor=""
          />
        </Stack>
        <Box>
          <img src={imageBank.hero} alt="hero simple bookmark" />
        </Box>
      </Stack>
      <Stack component="main">
        <Stack component="section">
          <Typography variant="h2">Features</Typography>
          <Typography variant="p">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </Typography>
          <Box>
            <TabSection />
          </Box>
        </Stack>
        <Stack component="section">
          <Typography variant="h2"> Download the extension</Typography>
          <Typography variant="p">
            {" "}
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </Typography>
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
        <Stack component="section">
          <Typography variant="h2">Frequently Asked Questions</Typography>
          <Typography variant="p">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </Typography>
          <AccordionSection />
        </Stack>
      </Stack>
      <Stack component="footer" backgroundColor='#000'>
        <Stack component="section">
          <Typography variant="h4"> 35,000+ already joined</Typography>
          <Typography variant="h5">
            {" "}
            Stay up-to-date with what we’re doing
          </Typography>
          <FormComp />
        </Stack>
        <Stack>
          <Link href="index.html">
            {" "}
            <img src={imageBank.logoWhite} alt="logo" />{" "}
          </Link>
          <Stack
            id="navegation-Bar"
            display={{ xs: open ? "block" : "none", lg: "none" }}
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
  );
}

export default App;
