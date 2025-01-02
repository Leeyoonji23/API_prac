import { css } from "@emotion/react";

export const container = css`
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem;
  color: #007bff;
`;

export const link = css`
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

export const button = css`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const checkbox = css`
  margin-right: 1rem;
`;

export const formGroup = css`
  margin-bottom: 1.6rem;

  label {
    display: block;
    margin-bottom: 0.8rem;
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 0.4rem;
    font-size: 1.6rem;
  }

  textarea {
    resize: none;
  }
`;

export const formButton = css`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

export const header = css`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 2rem;
    color: #333;
  }
`;

export const listActions = css`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.6rem;
`;

export const listStyles = css`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    list-style: none;
    margin-bottom: 1rem;
  }
`;
