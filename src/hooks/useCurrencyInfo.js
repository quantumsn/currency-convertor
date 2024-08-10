import { useEffect, useState } from "react";

let useCurrencyInfo = (currency) => {
  let [data, setData] = useState({});
  useEffect(() => {
    async function getData() {
      let response = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
      );

      let formatData = await response.json();

      setData(formatData[currency]);
    }
    getData();
  }, [currency]);
  return data;
};

export default useCurrencyInfo;
