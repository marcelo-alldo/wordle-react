import { Toolbar, Typography, IconButton } from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SettingsIcon from '@mui/icons-material/Settings';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import StyledAppBar from './styleds';

function Header() {
  return (
    <StyledAppBar position="static" color="secondary">
      <Toolbar>
        <IconButton size="large" edge="start" color="primary" aria-label="How to play">
          <QuestionMarkIcon />
        </IconButton>

        <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          Wordle Game
        </Typography>

        <IconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="Setting"
          sx={{ mr: 2 }}
          onClick={() => {
            window.location.pathname = 'configuration';
            // TODO: como faria isso da forma correta?
          }}
        >
          <SettingsIcon />
        </IconButton>

        <IconButton size="large" edge="start" color="primary" aria-label="Statistics">
          <EqualizerIcon />
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  );
}
export default Header;
