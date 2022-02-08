import { Grid } from '@mui/material';
import GameTile from '../../components/game-tile/Game-Tile';
import { StyledFlexBox } from '../../components/game-tile/styleds';

function Home() {
  const lettersQntd = [1, 2, 3, 4, 5];
  const rowsQntd = [1, 2, 3, 4, 5, 6];

  return (
    <Grid container>
      <Grid item xs={12}>
        {rowsQntd.map((row, index) => (
          <StyledFlexBox key={index}>
            {lettersQntd.map((letter, i) => (
              <GameTile key={i} />
            ))}
          </StyledFlexBox>
        ))}
      </Grid>
    </Grid>
  );
}

export default Home;
