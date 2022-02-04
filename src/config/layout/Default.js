import { Grid, Container } from '@mui/material';

import Header from '../../components/header';
import Footer from '../../components/footer';

import StyledGrid from './styleds';

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <StyledGrid container>
        <Grid item>
          <Container>{children}</Container>
        </Grid>
      </StyledGrid>
      <Footer />
    </>
  );
}

export default DefaultLayout;
