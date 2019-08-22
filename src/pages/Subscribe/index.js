import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import { Container, MeetupsList } from './styles';
import Meetup from '~/components/Meetup';
import Header from '~/components/Header';

function Subscribe() {
  const [meetups, setMeetups] = useState([
    {
      id: 1,
      title: 'Desenvolvimento React Native',
      date: new Date().toISOString(),
      user: { name: 'Everton Zoelner' },
      location: 'UniBrasil',
      banner: {
        url: 'https://api.adorable.io/avatars/285/zoel@adorable.png',
      },
    },
    {
      id: 2,
      title: 'Desenvolvimento React Native',
      date: new Date().toISOString(),
      user: { name: 'Everton Zoelner' },
      location: 'UniBrasil',
      banner: {
        url: 'https://api.adorable.io/avatars/285/zoel@adorable.png',
      },
    },
  ]);

  function decrementDate() {}

  function incrementeDate() {}

  return (
    <Background>
      <Header />
      <Container>
        <MeetupsList
          data={meetups}
          renderItem={({ item }) => (
            <Meetup
              data={item}
              action="Cancelar Inscrição"
              onPress={() => {}}
            />
          )}
          keyExtractor={item => String(item.id)}
        />
      </Container>
    </Background>
  );
}

Subscribe.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};

export default Subscribe;
