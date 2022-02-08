import { Grid, Container } from '@mui/material';

import Header from '../../components/header';
import Footer from '../../components/footer';

import StyledGrid from './styleds';

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <StyledGrid item container sx={{ height: '100%' }}>
        {/* TODO: é assim mesmo que faz um 'ofset'? */}
        <Grid item sm={3} />
        <Grid item sm={6}>
          <Container>{children}</Container>
        </Grid>
      </StyledGrid>
      <Footer />
    </>
  );
}

export default DefaultLayout;
