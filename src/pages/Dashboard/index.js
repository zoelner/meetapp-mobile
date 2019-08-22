import React, { useEffect, useState, useMemo } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';
import Header from '~/components/Header';
import api from '~/services/api';

import {
  Container,
  DateControl,
  DateButton,
  DateSelected,
  MeetupsList,
} from './styles';

function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      console.tron.log(date.toISOString());
      const response = await api.get('meetups', {
        params: {
          date: date.toISOString(),
        },
      });

      setMeetups(response.data);
    }

    loadMeetups();
  }, [date]);

  const dateFormatted = useMemo(() => {
    return format(date, "d 'de' MMMM'", {
      locale: pt,
    });
  }, [date]);

  function decrementDate() {
    setDate(subDays(date, 1));
  }

  function incrementeDate() {
    setDate(addDays(date, 1));
  }

  async function handleSubscription(meetupId) {
    try {
      await api.post(`meetups/${meetupId}/subscriptions`);

      Alert.alert('Sucesso!', 'Inscrição realizada com sucesso');
    } catch (err) {
      Alert.alert('Erro na inscrição', err.response.data.error);
    }
  }

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
              onPress={() => handleSubscription(item.id)}
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
