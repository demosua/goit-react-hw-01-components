import {FriendsList, FriendStatus, FriendsItem, FriendAvatar, FriendName} from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(item => (
        <FriendsItem key={item.id}>
            <FriendStatus statusColor={item.isOnline}>{item.isOnline}</FriendStatus>
            <FriendAvatar src={item.avatar} alt="User avatar" width="48" />
            <FriendName>{item.name}</FriendName>
        </FriendsItem>
      ))}
    </FriendsList>
)};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
};