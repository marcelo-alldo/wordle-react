import { Typography, Divider } from '@mui/material';

function TitlePage({ title }) {
  return (
    <>
      <Typography variant="h3">{title}</Typography>
      <Divider variant="middle" />
    </>
  );
}
export default TitlePage;
