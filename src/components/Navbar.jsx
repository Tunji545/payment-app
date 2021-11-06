import React from 'react'
import { AppBar, Container, Divider, Grid, Toolbar, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { theme } from "../theme/theme";
import Face from "../assets/smilingface.jpg"
import { Box } from '@mui/system';
import CardLogo from "../assets/cardlogo.png"

const root = {
  backgroundColor: theme.palette.secondary.main,
  color: "#000000",
  "& a": {
    textDecoration: "none",
    color: "#000000",
  },
  "& .MuiToolbar-root": {
    padding: 0
  },
  [theme.breakpoints.down('sm')]: {
    "& .MuiTypography-root": {
      fontSize: "1rem"
    },
    "& img": {
      display: "none"
    }
  },
}

function Navbar() {

  return (
    <Container maxWidth="lg">
      <AppBar sx={root} position="static" elevation={0}>
        <Toolbar >
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Link to="/">
                <Box
                  component="img"
                  alt=""
                  src={CardLogo}
                />
              </Link>
            </Grid>
            <Grid item display="flex" alignItems="center" padding={theme.spacing(5, 0)}>
              <Link to="/trips">
                <Typography variant="h5" component="span" mr={5}>Trips</Typography>
              </Link>
              <Link to="/view">
                <Typography variant="h5" component="span" mr={5}>Recently Viewed</Typography>
              </Link>
              <Link to="/bookings">
                <Typography variant="h5" component="span" mr={5}>Bookings</Typography>
              </Link>
              <Link to="profile">
                <Box
                  component="img"
                  alt=""
                  src={Face}
                  width={100}
                  height={100}
                />
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
        <Box marginBottom={theme.spacing(5)} />
        <Divider />
      </AppBar>
    </Container>
  )
}

export default Navbar
