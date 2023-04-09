import { FriendsList } from './FriendList.styled';
import { FriendListItem } from './FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(item => (
        <FriendListItem key={item.id}
          isOnline={item.isOnline}
          avatar={item.avatar}
          name={item.name}
        />
      ))}
    </FriendsList>
)};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};