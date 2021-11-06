import React from 'react'
import { Container, Grid, Typography, TextField, Checkbox, Divider, Button } from '@mui/material'
import { theme } from "../theme/theme"
import WifiIcon from '@mui/icons-material/Wifi'
import CardLogo from "../assets/chip.png"
import { Box } from '@mui/system'
import MasterCard from "../assets/mastercardcircle.png"
import VisaLogo from "../assets/Visalogo.png"
import Discover from "../assets/discover.png"
import Paypal from "../assets/paypal.png"
import AdjustIcon from '@mui/icons-material/Adjust';
import AlbumIcon from '@mui/icons-material/Album';


const bgBox = {
  background: `linear-gradient(to right, #c51162, #4a148c)`,
  width: 450,
  height: 350,
  [theme.breakpoints.down('sm')]: {
    "& .MuiTypography-h2": {
      fontSize: "1.125rem"
    }
  }
}

const faint = {
  opacity: 0.6
}

const promotion = (
  <>
    Promotion Code: <span style={faint}>Z4KXLM94</span>
  </>
)
const btn1 = {
  marginLeft: 10, 
  paddingTop: 2, 
  paddingBottom: 2, 
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(3),
  width: "100vw",
  [theme.breakpoints.down('sm')]: {
    marginLeft: 1,
    width: "100%"
  },
}

const btn2 = {
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  paddingLeft: theme.spacing(6),
  paddingRight: theme.spacing(6),
  fontSize: "1.125rem",
  [theme.breakpoints.down('sm')]: {
    width: "90vw"
  },
}

const grid = {
  [theme.breakpoints.down('sm')]: {
    "& > div": {
      width: "100% !important"
    }
  }
  
}

function Home() {
  return (
    <Container maxWidth="lg">
      <Grid container paddingTop={theme.spacing(5)}>
        <Grid item xs={12} sm={5}>
          <Typography variant="h5" fontWeight={700} gutterBottom>Payment Information</Typography>
          <Typography variant="h6" sx={{opacity: 0.6}} gutterBottom>
            Choose your method of payment
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={7}>
          <Grid item xs={6} />
          <Grid item xs={6} display="flex">
            <Grid item xs={1} />
            <Grid item xs={7}>
              <Box
                component="img"
                alt=""
                src={VisaLogo}
                width={40}
                maxWidth= "100%"
              />
              <Box
                component="img"
                alt=""
                src={Discover}
                width={40}
                maxWidth= "100%"
                marginLeft={theme.spacing(4)}
              />
            </Grid>
            <Grid item xs={4}>
              <Box
                component="img"
                alt=""
                src={Paypal}
                maxWidth= "100%"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid> 
      <Grid container paddingTop={theme.spacing(3)}>
        <Grid container item sx={bgBox} xs={12} sm={5}>
          <Grid item display="flex" alignItems="center" justifyContent="center"  xs={2} sm={1}>
            <WifiIcon color="secondary" />
          </Grid>
          <Grid item display="flex" flexDirection="column" justifyContent="space-evenly" xs={6} sm={7}>
            <Typography color="secondary" variant="h6" fontSize="0.875rem">
              CARD NUMBER
            </Typography>
            <Typography color="secondary" variant="h6">
              4324  5433  9382  1030
            </Typography>
            <Box
              component="img"
              alt=""
              src={CardLogo}
              width={100}
              height={100}
            />
            <Typography color="secondary" variant="h6" fontSize="0.875rem">
              EXPIRATION DATE
            </Typography>
            <Typography color="secondary" variant="h6">
              03/24
            </Typography>
            <Typography color="secondary" variant="h6">
              John Doe
            </Typography>
          </Grid>
          <Grid item display="flex" flexDirection="column" justifyContent="flex-end" xs={4}>
            <Box
              component="img"
              alt=""
              src={MasterCard}
            />
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={7} spacing={2}>
          <Grid item sm={1} />
          <Grid item xs={12} sm={5} sx={grid}>
            <Typography variant="h6" fontSize="1.125rem" paddingBottom={theme.spacing(2)}>
              Credit card number
            </Typography>
            <TextField sx={{backgroundColor: "#f4f4f4"}} fullWidth label="4324  5433  9382  1030" variant="outlined" />
            <Typography variant="h6" fontSize="1.125rem" paddingBottom={theme.spacing(2)} paddingTop={theme.spacing(4)}>
              Security code
            </Typography>
            <TextField sx={{backgroundColor: "#f4f4f4"}} fullWidth label="420" variant="outlined" />
            <Box paddingBottom={theme.spacing(2)} paddingTop={theme.spacing(4)} display="flex" alignItems="center">
              <Checkbox icon={<AdjustIcon />} checkedIcon={<AlbumIcon />} />
              <Typography variant="h6" fontSize="0.875rem" fontWeight={500}>
                Use this card for next time purchase
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={1} />
          <Grid item xs={12} sm={5}>
            <Typography variant="h6" fontSize="1.125rem" paddingBottom={theme.spacing(2)}>
              Expiration date
            </Typography>
            <TextField sx={{backgroundColor: "#f4f4f4"}} fullWidth label="03/24" variant="outlined" />
            <Typography variant="h6" fontSize="1.125rem" paddingBottom={theme.spacing(2)} paddingTop={theme.spacing(4)}>
              Postal code
            </Typography>
            <TextField sx={{backgroundColor: "#f4f4f4"}} fullWidth label="10119" variant="outlined" />
          </Grid>
          <Button sx={btn1} fullWidth color="info" variant="contained">Add Card</Button>  
        </Grid>
      </Grid>
      <Divider />
      <Grid container display="flex" justifyContent="space-between" paddingTop={theme.spacing(5)} paddingBottom={theme.spacing(5)}>
        <Grid item>
          <Typography paddingBottom={theme.spacing(3)} variant="h2" fontSize="1.125rem">
            SubTotal
          </Typography>
          <Typography paddingBottom={theme.spacing(3)} variant="h2" fontSize="1.125rem">
            Estimated Tax
          </Typography>
          <Typography paddingBottom={theme.spacing(3)} variant="h2" fontSize="1.125rem">
            {promotion}
          </Typography>
        </Grid>
        <Grid item>
          <Typography paddingBottom={theme.spacing(3)} variant="h2" fontSize="1.125rem">
            #2,490.00
          </Typography>
          <Typography paddingBottom={theme.spacing(3)} variant="h2" fontSize="1.125rem">
            #119.64
          </Typography>
          <Typography paddingBottom={theme.spacing(3)} variant="h2" fontSize="1.125rem">
            #-60.00
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid container display="flex" justifyContent="space-between" alignItems="center"paddingTop={theme.spacing(5)} paddingBottom={theme.spacing(10)}>
        <Grid item>
         <Button color="info" variant="contained" sx={btn2}>Complete Payment</Button>
        </Grid>
        <Grid item paddingTop={theme.spacing(2)}>
          <Typography variant="h2" fontSize="2rem">TOTAL:#2556.64</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
