import { FriendListItem } from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
  <>
      <ul>
      {friends.map(item => (
          <li key={item.id}>
            <FriendListItem
              avatar = {item.avatar}
              name = {item.name}
              isOnline = {item.isOnline}
            >
            </FriendListItem>
          </li>
        ))}
      </ul>
  </>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })),
};