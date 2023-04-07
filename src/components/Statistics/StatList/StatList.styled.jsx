import styled from '@emotion/styled';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 10px;
`;

export const StyledLi = styled.li`
  width: 20%;
  background-color: ${getRandomHexColor};

  & .label{
    font-weight: 700;
    display: block;
  }
`;