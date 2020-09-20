import React, { useState } from "react";
import { Result } from "./Result";
import {
  Button,
  Field,
  Header,
  Info,
  Link,
  LabelText,
  Loading,
  Failure,
} from "./styled";
import { useRatesData } from "./useRatesData";

export const Form = () => {
  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form onSubmit={onSubmit}>
      <Header>Currency converter</Header>
      {ratesData.state === "loading" ? (
        <Loading>
          Loading...
          <br />
          Please wait. Exchange rates are currently loading from European Central Bank. 
        </Loading>
      ) : (
        ratesData.state === "error" ? (
          <Failure>
            Unable receive data. Try again later.
          </Failure>
        ) : (
          <>
            <p>
              <label>
                <LabelText>Amount:</LabelText>
                <Field
                  value={amount}
                  onChange={({ target }) => setAmount(target.value)}
                  placeholder="Please enter amount in PLN"
                  type="number"
                  required
                  step="0.01"
                />
              </label>
            </p>
            <p>
              <label>
                <LabelText>Currency:</LabelText>
                <Field
                  as="select"
                  value={currency}
                  onChange={({ target }) => setCurrency(target.value)}
                >
                  {Object.keys(ratesData.rates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </Field>
              </label>
            </p>
            <p>
              <Button>Result</Button>
            </p>
            <Info variant="outlined" severity="info">
              Exchange rates imported from 
              {" "}
              <Link
                href="https://exchangeratesapi.io/"
                target="__blank" rel="noopener noreferrer">
                  https://exchangeratesapi.io/
              </Link> based on data published by the 
              {" "}
              <Link 
                href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"
                target="__blank" rel="noopener noreferrer">
                  European Central Bank
              </Link>
              {" "}
              from: 
              <strong> {ratesData.date}</strong>
            </Info>
            <Result result={result} />
          </>
        )
      )}
    </form>
  );
};
