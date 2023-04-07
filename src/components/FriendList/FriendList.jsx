import { FriendListItem } from './FriendListItem/FriendListItem';
import {StyledUl} from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <StyledUl className="friend-list">
      {friends.map(item => (
        <li className="item" key={friends.id}>
          <FriendListItem isOnline={item.isOnline} avatar={item.avatar} name={item.name}/>
        </li>
      ))}
    </StyledUl>
)};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })),
};