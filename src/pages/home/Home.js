import { Grid } from '@mui/material';
import GameTile from '../../components/game-tile/Game-Tile';
import StyledFlexBox from '../../components/game-tile/styleds';
// import

function Home() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <StyledFlexBox>
          <GameTile />
          <GameTile />
          <GameTile />
          <GameTile />
          <GameTile />
        </StyledFlexBox>
        <StyledFlexBox>
          <GameTile />
          <GameTile />
          <GameTile />
          <GameTile />
          <GameTile />
        </StyledFlexBox>
        <StyledFlexBox>
          <GameTile />
          <GameTile />
          <GameTile />
          <GameTile />
          <GameTile />
        </StyledFlexBox>
        <StyledFlexBox>
          <GameTile />
          <GameTile />
          <GameTile />
          <GameTile />
          <GameTile />
        </StyledFlexBox>
        <StyledFlexBox>
          <GameTile />
          <GameTile />
          <GameTile />
          <GameTile />
          <GameTile />
        </StyledFlexBox>
        <StyledFlexBox>
          <GameTile />
          <GameTile />
          <GameTile />
          <GameTile />
          <GameTile />
        </StyledFlexBox>
      </Grid>
    </Grid>
  );
}

export default Home;
