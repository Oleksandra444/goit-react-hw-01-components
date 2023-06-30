import React from 'react';

import user from '../components/Profile/user.json';
import { Profile } from './Profile/Profile';

import data from '../components/Statistics/data.json';
import { Statistics } from './Statistics/Statistics';

import friends from '../components/FriendList/friends.json';
import { Friendlist } from './FriendList/FriendList';

import transactions from '../components/TransactionHistory/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <div>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      
      <Statistics title="Upload stats" stats={data} />

      <Friendlist friends={friends} />;

      <TransactionHistory items={transactions} />;


    </div>
      
    
  );
};
