import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    return (
        <AppBar position='static' color='secondary'>
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'
                    color='primary'
                    aria-label='menu'
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                    {/*  TODO: inserir ícones no header   */}
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    Wordle Game
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
export default Header;
