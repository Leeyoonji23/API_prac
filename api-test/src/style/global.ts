import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    line-height: 1.5;
    background-color: #000000;
    color: #f9f9f9;
    margin-left: 5rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    all: unset;
    box-sizing: border-box;
    padding: 4px 8px;
    background-color: #007bff;
    margin-right: 0.5rem;
    margin-top: 1rem;
    color: white;
    border-radius: 0.8rem;
    cursor: pointer;
    font-size: 0.8rem;
    text-align: center;
  }

  button:hover {
    background-color: #0056b3;
  }

  input {
    text-align: left;
    margin-right: 2rem;
    margin-top: 1rem;
  }

  textarea {
    display: flex;
    font-family: inherit;
    font-size: inherit;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 0.4rem;
    width: 100%;
    text-align: left;
  }

  textarea {
    resize: vertical;
  }

  h1,
  h2 {
    text-align: center;
  }
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1rem;
    font-weight: bold;
    color: #f9f9f9;
  }

  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;
