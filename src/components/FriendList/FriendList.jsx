import styles from './FriendList.module.css';
import  FriendListItem  from './FriendListItem'
import PropTypes from 'prop-types';

export const Friendlist = ({ friends }) => { 
    return (<ul className={styles.friendList}>
    
        {friends.map(friend => (
        < FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}     

</ul>)


}

Friendlist.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            })),
}
