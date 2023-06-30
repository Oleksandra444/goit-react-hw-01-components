import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

export const Friendlist = ({ friends }) => { 
    return (<ul className={styles.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={styles.item} key ={id}>
            <span className={`${styles.status} ${isOnline ? styles.green : styles.red}`}></span>
  <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
</li>

    )) }
    

</ul>)


}

Friendlist.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired).isRequired,
}
