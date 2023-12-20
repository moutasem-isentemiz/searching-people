'use client';

import { useState, useEffect } from 'react';
import Card from './components/Card';
import ExpandedCard from './components/ExpandedCard';
import Input from './components/Input';

const fetchUsers = async (q) => {
  return await fetch(`http://54.145.233.88:7000/v1/ai-ppl-search/ppl-search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question: q }),
  });
};

export default function Home() {
  const [cards, setCards] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleFilter = async (value) => {
    const response = await fetchUsers(value);

    const data = await response.json();

    setSelectedUser(null);
    setCards(!!data ? data?.users : []);
  };

  const handleCardClick = (user) => {
    setSelectedUser(user);
  };

  const handleClose = () => {
    setSelectedUser(null);
  };

  // useEffect(() => {
  //   console.log(cards);
  // }, [cards]);

  return (
    <>
      <Input onChange={handleFilter} />
      {selectedUser ? (
        <ExpandedCard data={selectedUser} onClose={handleClose} />
      ) : (
        cards.map((user) => <Card key={user.id} data={user} onClick={handleCardClick} />)
      )}
    </>
  );
}
