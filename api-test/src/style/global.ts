import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    background-color: #f9f9f9;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    all: unset;
    box-sizing: border-box;
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    text-align: center;
  }

  button:hover {
    background-color: #0056b3;
  }

  input,
  textarea {
    font-family: inherit;
    font-size: inherit;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
  }

  textarea {
    resize: vertical;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1rem;
    font-weight: bold;
    color: #222;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;
