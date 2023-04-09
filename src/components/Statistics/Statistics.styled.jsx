import styled from '@emotion/styled';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatSection = styled.section`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding-top: 20px;
  max-width: 300px;
  margin: auto;
  text-align: center;
  background-color: white;
  border-radius: 4px;
`;

export const StatTitle = styled.h2`
  text-transform: uppercase;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 10px;
`;

export const StyledLi = styled.li`
  width: 20%;
  background-color: ${getRandomHexColor};
`;

export const StyledLabel = styled.span`
    font-weight: 700;
    display: block;
`;
export const StyledPercentage = styled.span`

`;