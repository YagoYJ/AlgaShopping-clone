import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { sum, subtract } from "../../store/Calculator/Calculator.actions";

import { Form, Buttons } from "./Calculator.styles";

export default function Calculator() {
  const result = useSelector((state) => state.calculator);
  const dispatch = useDispatch();
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  return (
    <>
      <Form>
        <input
          style={{ width: "100%" }}
          type="number"
          onChange={(e) => setNumber1(Number(e.target.value))}
          value={number1}
        />
        <input
          style={{ width: "100%" }}
          type="number"
          onChange={(e) => setNumber2(Number(e.target.value))}
          value={number2}
        />
        <Buttons>
          <button
            style={{ width: "50%" }}
            onClick={() => {
              dispatch(sum(number1, number2));
            }}
          >
            +
          </button>
          <button
            style={{ width: "50%" }}
            onClick={() => {
              dispatch(subtract(number1, number2));
            }}
          >
            -
          </button>
        </Buttons>
      </Form>
      <div>{result}</div>
    </>
  );
}
