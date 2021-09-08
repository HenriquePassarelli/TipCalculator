import React, { useState } from 'react';
import styled from 'styled-components';

import './App.css';

let Input = styled.input`
    padding:1rem;
    font-size:1.5rem;
    margin: 1rem 0;
    border-radius: 1rem;
    outline:none;
`

function Tip() {

  let [amount, setAmount] = useState(0);
  let [tax, setTax] = useState(10);

  return (
    <div className="App">
      <h1>Tip Calculator</h1>

      <div className="tipInput">
        <label>How much is the bill ?</label> <br />
        <Input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} />
        <br />
        <label>Tip rate</label> <br />
        <Input type="number" value={tax} onChange={(event) => setTax(event.target.value)} />
        <hr />
      </div>
      {amount > 0 &&
        <div>
          <h3>Subtotal: R$ {amount}</h3>
          <h3>Tax ({tax})% : </h3>

          <h3 className="total">Total: R$ {Math.floor(amount * (1 + (tax / 100)))},00</h3>
        </div>}

    </div>
  );
}

export default Tip;
