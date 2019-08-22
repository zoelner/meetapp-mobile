import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import Background from '~/components/Background';

import { Container, MeetupsList } from './styles';
import Meetup from '~/components/Meetup';
import Header from '~/components/Header';
import api from '~/services/api';

function Subscribe({ isFocused }) {
  const [subscriptions, setSubscriptions] = useState([]);

  async function loadSubscriptions() {
    const response = await api.get('subscriptions');
    setSubscriptions(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadSubscriptions();
    }
  }, [isFocused]);

  async function handleSubscription(subscriptionId) {
    try {
      await api.delete(`subscriptions/${subscriptionId}`);
      setSubscriptions(
        subscriptions.filter(subscription => subscription.id !== subscriptionId)
      );
      Alert.alert('Sucesso!', 'Inscrição removida com sucesso');
    } catch (err) {
      Alert.alert('Erro na exclusão de inscrição', err.response.data.error);
    }
  }

  return (
    <Background>
      <Header />
      <Container>
        <MeetupsList
          data={subscriptions}
          renderItem={({ item }) => (
            <Meetup
              data={item.meetup}
              action="Cancelar Inscrição"
              onPress={() => handleSubscription(item.id)}
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

export default withNavigationFocus(Subscribe);
