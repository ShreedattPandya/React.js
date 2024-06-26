import { useEffect ,useState } from 'react'

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}) 
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
    .then((res) => res.json())  // Bydefault api is string, converted to json
    .then((res) => {
      setData(res[currency])
      console.log(res[currency]);
    }) //Result is stored in useState Method to save everywhere 
    
    
  }, [currency])
  
  console.log(data);
  return data
}

export default useCurrencyInfo
