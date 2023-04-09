import { FriendsItem, FriendStatus, FriendAvatar, FriendName } from './FriendListItem.styled';
import PropTypes from 'prop-types';


export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendsItem>
      <FriendStatus statusColor={isOnline} />
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName> {name} </FriendName>
    </FriendsItem>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};