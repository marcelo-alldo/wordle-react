import { TextField } from '@mui/material';

function GameTile() {
  return (
    <TextField
      sx={{
        margin: '3px',
      }}
      inputProps={{
        maxLength: 1,
        style: {
          fontSize: '3rem',
          textAlign: 'center',
          textTransform: 'uppercase',
          height: '50px',
          width: '50px',
        }, // esses atributos são do 'input' de dentro do textField, tem como passar isso pra um styled?
      }}
      variant="outlined"
    />
  );
}

export default GameTile;
