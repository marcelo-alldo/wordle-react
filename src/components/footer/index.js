import { Grid, Typography } from '@mui/material';
import StyledLink from './styleds';

function Footer() {
  return (
    <Grid container bgcolor="transparentBackground.main" color="white">
      <Grid width="100vw" item display="flex" justifyContent="center">
        <StyledLink m={2} href="https://github.com/marcelo-growdev/wordle-react" target="_blank">
          <Typography>Repositório Github</Typography>
        </StyledLink>
        <StyledLink m={2} href="https://www.growdev.com.br/" target="_blank">
          <Typography>Growdev</Typography>
        </StyledLink>
      </Grid>
    </Grid>
  );
}
export default Footer;
