import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContener>
      <STitle>-Styled Components- -HUKURODANI</STitle>
      <SButton>BOKUTO</SButton>
    </SContener>
  );
};

const SContener = styled.div`
  border: solid 2px #57626c;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const STitle = styled.p`
  margin: 8px;
  color: #88acca;
  font-weight: bold;
`;
const SButton = styled.button`
          background-color: #636a70;
          border: none;
          padding: 8px;
          border-radius: 8px;
          margin-right: 30px;
          &:hover {
            background-color: #a4adb4;
            color: bisque;
            cursor: pointer;
`;
