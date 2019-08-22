import React, { useState, useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import Background from '~/components/Background';

import {
  Container,
  DateControl,
  DateButton,
  DateSelected,
  MeetupsList,
} from './styles';
import Meetup from '~/components/Meetup';
import Header from '~/components/Header';

function Dashboard() {
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
      title: 'MeetApp',
      date: new Date().toISOString(),
      user: { name: 'Everton ' },
      location: 'Minha Casa',
      banner: {
        url: 'https://api.adorable.io/avatars/285/abott@adorable.png',
      },
    },
  ]);

  const dateFormatted = useMemo(() => {
    return format(new Date(), "d 'de' MMMM'", {
      locale: pt,
    });
  }, []);

  function decrementDate() {}

  function incrementeDate() {}

  return (
    <Background>
      <Header />
      <Container>
        <DateControl>
          <DateButton onPress={decrementDate}>
            <Icon name="chevron-left" size={30} color="#fff" />
          </DateButton>

          <DateSelected>{dateFormatted}</DateSelected>

          <DateButton onPress={incrementeDate}>
            <Icon name="chevron-right" size={30} color="#fff" />
          </DateButton>
        </DateControl>

        <MeetupsList
          data={meetups}
          renderItem={({ item }) => (
            <Meetup
              data={item}
              action="Realizar inscrição"
              onPress={() => {}}
            />
          )}
          keyExtractor={item => String(item.id)}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};

export default Dashboard;
