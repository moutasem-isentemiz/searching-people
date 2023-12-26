'use client';

import { useState } from 'react';
import Card from './components/Card';
import ExpandedCard from './components/ExpandedCard';
import Input from './components/Input';
import SearchAs from './components/SearchAs';

const fetchUsers = async (q, s) => {
  return await fetch(process.env.PUBLIC_SERVER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question: q, user: s ?? undefined }),
  });
};

export default function Home() {
  const [cards, setCards] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchAs, setSearchAs] = useState(null);
  const searchAsArray = ['Abdurrahman', 'Aykut', 'Meen Sameer'];

  const handleFilter = async (value) => {
    const response = await fetchUsers(value, searchAs);

    const data = await response.json();

    setSelectedUser(null);
    setCards(!!data ? data?.users : []);
  };

  const handleCardClick = (user) => {
    setSelectedUser(user);
  };

  const handleChangeSearchAs = (searchAsString) => {
    if (searchAsString === searchAs) {
      setSearchAs(null);
    } else {
      setSearchAs(searchAsString);
    }
  };

  const handleClose = () => {
    setSelectedUser(null);
  };

  // useEffect(() => {
  //   console.log(cards);
  // }, [cards]);

  return (
    <>
      <SearchAs searchAsArray={searchAsArray} selectSearchAs={handleChangeSearchAs} searchAs={searchAs} />
      <Input onChange={handleFilter} />
      {selectedUser ? (
        <ExpandedCard data={selectedUser} onClose={handleClose} />
      ) : (
        cards.map((user) => <Card key={user.id} data={user} onClick={handleCardClick} />)
      )}
    </>
  );
}
