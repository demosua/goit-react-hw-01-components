import styled from '@emotion/styled';

export const Table = styled.table`
  border-collapse: collapse;
  width: 50%;
  margin: 0 auto;

  & td,
  & th{
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  }

  & td:nth-of-type(1){text-align: left;}
  & tr:nth-of-type(even){background-color: #f2f2f2;}
  tr:hover {background-color: #ddd;}

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
    text-align: center;
  }
`;
