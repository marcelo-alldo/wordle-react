import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const StyledBox = styled(Box)(({ theme }) => ({
  fontSize: '1.5rem',
  textAlign: 'center',
  height: '2.5rem',
  width: '2.5rem',
  border: '2px solid black',
  marginLeft: '2px',
  backgroundColor: '#d3d3d3',
}));

export default StyledBox;
