import {Card, Description, Avatar, Name, Tag, Loc, Stats, Label, Quantity} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes} }) => {
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
            <Quantity>{followers}</Quantity>
          </li>
          <li>
            <Label>Views</Label>
            <Quantity>{views}</Quantity>
          </li>
          <li>
            <Label>Likes</Label>
            <Quantity>{likes}</Quantity>
          </li>
        </Stats>
      </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
};