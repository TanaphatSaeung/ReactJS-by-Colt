import { useState, useEffect } from "react";

const RANDOM_QUOTE_URL = "/api/api/qotd";

export default function QouteFetcherLoader() {
  const [quote, setQoute] = useState({ text: "", author: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchQuote()
  }, []);

  async function fetchQuote() {
    setIsLoading(true)
    const quoteData = await fetch(RANDOM_QUOTE_URL);
    const jsonResponse = await quoteData.json();
    setQoute({
      text: jsonResponse.quote.body,
      author: jsonResponse.quote.author,
    });
    setIsLoading(false)
  }

  return (
    <div>
        <p style={{transition: '1s', opacity: isLoading? '1' : '0'}}>Loading ...</p>
      <button onClick={fetchQuote}>Get Quote</button>
      <h1>{quote.text}</h1>
      <h3>{quote.author}</h3>
    </div>
  );
}
