import { useState, useEffect } from "react";

const RANDOM_QUOTE_URL = "/api/api/qotd";

export default function QuoteFetcher() {
  const [quote, setQoute] = useState({ text: "", author: "" });

  useEffect(() => {
    async function getInitialQuote() {
      const quoteData = await fetch(RANDOM_QUOTE_URL);
      const jsonResponse = await quoteData.json();
      setQoute({
        text: jsonResponse.quote.body,
        author: jsonResponse.quote.author,
      });
    }
    getInitialQuote()
  }, []);

  async function fetchQuote() {
    const quoteData = await fetch(RANDOM_QUOTE_URL);
    const jsonResponse = await quoteData.json();
    setQoute({
      text: jsonResponse.quote.body,
      author: jsonResponse.quote.author,
    });
  }

  return (
    <div>
      <button onClick={fetchQuote}>Get Quote</button>
      <h1>{quote.text}</h1>
      <h3>{quote.author}</h3>
    </div>
  );
}
