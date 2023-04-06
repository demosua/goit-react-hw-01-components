import styled from '@emotion/styled';

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding-top: 100px;
  max-width: 300px;
  margin: auto;
  text-align: center;
  background-color: white;
  border-radius: 4px;
`;

export const Description = styled.div`
   
`;

export const Avatar = styled.img`
   width: 100px;
   height: 100px;
   margin-left: auto;
   margin-right: auto;
   margin-bottom: 28px;
   border-radius: 100%;
   background: #eeeeec;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const Name = styled.p`
   font-size: 26px;
   margin-bottom: 8px;
`;

export const Tag = styled.p`
   font-weight: 500;
   color: #757575;
   margin-bottom: 8px;
`;

export const Loc = styled.p`
   font-weight: 500;
   color: #757575;
   margin-bottom: 28px;
`;

export const Stats = styled.ul`
   display: flex;
   align-items: center;
   justify-content: space-around;
   padding-bottom: 8px;
   background: #AAB0C4;
     border-bottom-left-radius: 4px;
     border-bottom-right-radius: 4px;
   & li{
      display: inline-block;
   }
   
`;

export const Label = styled.span`
   font-size: 14px;
   font-weight: 700;
`;

export const Quantity = styled.span`
   display: flex;
   align-items: center;
   justify-content: center;
`;
