import { TextField, Typography } from '@mui/material';
import { useState } from 'react';

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  return (
    <>
      <h1>Salam!</h1>
      <Typography>Please Enter Your Number:</Typography>
      <TextField variant='outlined' value={firstNumber} onChange={(e) => setFirstNumber(e.target.value)} />
      <Typography>{`Result: 2 × ${firstNumber} = ${2 * firstNumber}`}</Typography>
    </>
  );
}

export default App;
