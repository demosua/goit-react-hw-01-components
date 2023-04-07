import styled from '@emotion/styled';

const setBgColor = ({statusColor, theme}) => {
  if (statusColor) {
    return theme.colors.isOnline;
  } 
    return theme.colors.isOfline;
};

export const FriendsList = styled.ul`
    justify-content: center;
    display: grid;
    margin-top: 10px;
`;

export const FriendsItem = styled.li`
    display: flex;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    text-align: center;
    background-color: white;
    border-radius: 4px;

    padding: 5px 20px;
    margin-bottom: 10px;
`;

export const FriendStatus = styled.span`
    margin-right: 20px;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: ${setBgColor};
`;

export const FriendAvatar = styled.img`
  margin-right: 10px;
`;

export const FriendName = styled.p`
    font-size: 20px;
    font-weight: 700;
`;