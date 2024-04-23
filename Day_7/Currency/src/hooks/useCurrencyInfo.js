import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/bcdf3558def9d7248d927840/latest/${currency}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.result === "success") {
          setData(res.conversion_rates);
        } else {
          console.error("Failed to fetch currency data:", res.error);
        }
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
