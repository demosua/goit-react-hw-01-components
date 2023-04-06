import {Card, Description, Avatar, Name, Tag, Loc, Stats, Label, Quantity} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
      <Card>
        <Description>
          <Avatar
            src={avatar}
            alt="User avatar"
          />
          <Name>{username}</Name>
          <Tag>@{tag}</Tag>
          <Loc>{location}</Loc>
        </Description>

        <Stats>
          <li>
            <Label>Followers</Label>
            <Quantity>{stats.followers}</Quantity>
          </li>
          <li>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
          </li>
          <li>
            <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
          </li>
        </Stats>
      </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
    stats: PropTypes.exact({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    })
};