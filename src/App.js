import { Divider, TextField, Typography } from '@mui/material';
import { useState } from 'react';

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [thirdNumber, setThirdNumber] = useState(0);
  const [forthNumber, setForthNumber] = useState(0);
  const [fifthNumber, setFifthNumber] = useState(0);

  return (
    <>
      <h1>Salam!</h1>
      <Typography>Please Enter Your Number:</Typography>
      <TextField variant='outlined' value={forthNumber} onChange={(e) => setForthNumber(e.target.value)} />
      <TextField variant='outlined' value={fifthNumber} onChange={(e) => setFifthNumber(e.target.value)} />
      <Typography>{`Result: ${forthNumber} + ${fifthNumber} = ${forthNumber + fifthNumber}`}</Typography>
      <br />
      <Typography>Please Enter Your Number:</Typography>
      <TextField variant='outlined' value={thirdNumber} onChange={(e) => setThirdNumber(e.target.value)} />
      <Typography>{`Result: 5 × ${thirdNumber} = ${5 * thirdNumber}`}</Typography>
      <br />
      <Typography>Please Enter Your Number:</Typography>
      <TextField variant='outlined' value={firstNumber} onChange={(e) => setFirstNumber(e.target.value)} />
      <Typography>{`Result: 2 × ${firstNumber} = ${2 * firstNumber}`}</Typography>
      <br />
      <Typography>Please Enter Your Number:</Typography>
      <TextField variant='outlined' value={secondNumber} onChange={(e) => setSecondNumber(e.target.value)} />
      <Typography>{`Result: 3 × ${secondNumber} = ${3 * secondNumber}`}</Typography>
      <br />
    </>
  );
}

export default App;
