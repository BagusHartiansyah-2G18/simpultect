import React, { useEffect } from 'react';
import Chat from '../components/Cchat';

function HomePage() {
  const {
    talks = [],
    users = [],
    authUser,
  } = {};

  const dispatch = null; // @TODO: get dispatch function from store

  useEffect(() => {

  }, [dispatch]);
  const talkList = talks.map((talk) => ({
    ...talk,
    user: users.find((user) => user.id === talk.user),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <Chat />
    </section>
  );
}

export default HomePage;
