import React, { useState } from "react";
import "./App.css";

export default function App() {
  return <RandomQuote />;
}

export function RandomQuote() {
  // TODO: answer here
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);
  React.useEffect(() => {
    // TODO: answer here
    getQuote();
    console.log("called useEfdfec");
  }, []);

  function getQuote() {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false));
  }

  // TODO: answer here
  return (
    <div>
      <h1 className={"bg-warning mt-3"}>Random Quote</h1>
      <div
        className={
          "border border-warning rounded w-50 mx-auto mt-5 d-flex justify-content-center flex-column p-3"
        }
      >
        <h2 data-testid="quote">{loading ? "Loading..." : quote.content}</h2>
        <p>~ {loading ? " " : quote.author}</p>
        <button
          onClick={() => {
            getQuote();
          }}
          className={"btn btn-outline-primary position-relative"}
        >
          Get another quote
        </button>
      </div>
    </div>
  );
}