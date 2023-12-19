'use client';

import { useEffect, useState } from 'react';
import ExpandedCard from './components/ExpandedCard';
import Input from './components/Input';
import Card from './components/Card';

const fetchUsers = async () => {
  return await fetch(`http://localhost:3001/users`, {
    method: 'GET',
  });
};

export default function Home() {
  const [users, setUsers] = useState([]);
  const [cards, setCards] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleFilter = (event) => {
    if (event.target.value.toLowerCase() === '') {
      setCards([]);
    } else {
      const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(event.target.value.toLowerCase()));
      setCards(filteredUsers);
    }
  };

  useEffect(() => {
    fetchUsers()
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <>
      <Input onChange={handleFilter} />
      {selectedUser ? (
        <ExpandedCard data={selectedUser} />
      ) : (
        cards.map((user) => <Card key={user.id} data={user} onClick={() => handleCardClick(user)} />)
      )}
    </>
  );
}
