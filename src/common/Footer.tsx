import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';


export const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      TukTukWala &nbsp;
      {new Date().getFullYear()}
      {'.'}
      {/* <p style={{ fontFamily: "Pacifico" }}>  Designed and developed by
        <a href="https://www.facebook.com/unsuredev" target="_blank" >Jamal</a></p> */}

    </Typography>
  );
}




const FooterSection = () => {

  return (
    <div >
      <CssBaseline />
      <footer >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}


export default FooterSection
