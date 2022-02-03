import { Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { StyledLink, StyledFooterTypography } from './styleds';

function Footer() {
  return (
    <Grid container bgcolor="transparentBackground.main" color="white">
      <Grid item width="100vw" display="flex" justifyContent="center" m={2}>
        <StyledFooterTypography textAlign="center">
          Projeto desenvolvido pela
        </StyledFooterTypography>

        <StyledLink
          href="https://www.growdev.com.br/"
          target="_blank"
          rel="noopener"
          underline="hover"
        >
          <StyledFooterTypography ml={0.5} mr={0.5}>
            Growdev
          </StyledFooterTypography>
        </StyledLink>

        <StyledFooterTypography textAlign="center">para prática de React.</StyledFooterTypography>

        <StyledLink
          href="https://github.com/marcelo-growdev/wordle-react"
          target="_blank"
          rel="noopener"
          underline="hover"
        >
          <StyledFooterTypography ml={1} mt={-0.25}>
            <GitHubIcon fontSize="small" />
          </StyledFooterTypography>
        </StyledLink>
      </Grid>
    </Grid>
  );
}
export default Footer;
