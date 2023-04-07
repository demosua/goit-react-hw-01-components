import styled from '@emotion/styled';

export const StyledUl = styled.ul`
  display: block;
  margin: 0 auto;


  & .item {
    display: flex;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    // text-align: center;
    background-color: white;
    border-radius: 4px;

    padding: 5px 20px;
    margin-bottom: 10px;
  }

  & .status {
    margin-right: 20px;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: green;
  }

  & .avatar {
    margin-right: 10px;
  }

  & .name {
    font-size: 20px;
    font-weight: 700;
  }
`;