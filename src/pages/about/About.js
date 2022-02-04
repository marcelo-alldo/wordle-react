import { Grid } from '@mui/material';
import TitlePage from '../../components/title-page/TitlePage';

function About() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <TitlePage title="Sobre Wordle React" />
      </Grid>
    </Grid>
  );
}

export default About;
