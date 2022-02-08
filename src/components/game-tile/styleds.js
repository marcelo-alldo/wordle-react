import { styled } from '@mui/material/styles';
import { Box, TextField } from '@mui/material';

const StyledFlexBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  margin: '3px',
  '& .MuiOutlinedInput-root .MuiOutlinedInput-input': {
    caretColor: 'transparent',
    fontSize: '3rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    height: '50px',
    width: '50px',
  },
}));

export { StyledFlexBox, StyledTextField };
