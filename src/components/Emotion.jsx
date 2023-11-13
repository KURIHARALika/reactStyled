/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyled = css`
    border: solid 2px #ff5722;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const title = css({
    margin: 0,
    color: "#120101"
  });

  const SButton = styled.button`
    background-color: #a24521;
    border: none;
    padding: 8px;
    border-radius: 8px;
    &:hover {
      background-color: #da5127;
      color: bisque;
      cursor: pointer;
    }
  `;

  return (
    <div css={containerStyled}>
      <p css={title}>-Emotion- -inarizaki</p>
      <SButton>KITA</SButton>
    </div>
  );
};
