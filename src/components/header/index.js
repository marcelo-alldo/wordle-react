import { Toolbar, Typography, IconButton } from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SettingsIcon from '@mui/icons-material/Settings';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { useNavigate } from 'react-router-dom';
import StyledAppBar from './styleds';

function Header() {
  const navigate = useNavigate();

  function handleClick(route) {
    navigate(`/${route}`);
  }

  return (
    <StyledAppBar position="static" color="secondary">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="How to play"
          onClick={() => {
            handleClick('instruction');
          }}
        >
          <QuestionMarkIcon />
        </IconButton>

        <Typography
          onClick={() => {
            handleClick('home');
          }}
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, textAlign: 'center', cursor: 'pointer' }}
        >
          Wordle Game
        </Typography>

        <IconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="Setting"
          sx={{ mr: 2 }}
          onClick={() => {
            handleClick('configuration');
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
