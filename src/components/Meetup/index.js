import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  Banner,
  Content,
  Title,
  Info,
  Row,
  DateTime,
  Location,
  Organizer,
  ActionButton,
} from './styles';

function Meetup({ data, action, onPress }) {
  const dateFormatted = useMemo(() => {
    return format(parseISO(data.date), "d 'de' MMMM', às' H'h'", {
      locale: pt,
    });
  }, [data.date]);

  return (
    <Container>
      <Banner source={{ uri: data.image.url }} />

      <Content>
        <Title>{data.title}</Title>

        <Info>
          <Row>
            <Icon name="event" size={14} color="#999" />
            <DateTime>{dateFormatted}</DateTime>
          </Row>
          <Row>
            <Icon name="place" size={14} color="#999" />
            <Location>{data.location}</Location>
          </Row>
          <Row>
            <Icon name="person" size={14} color="#999" />
            <Organizer>Organizador: {data.user.name}</Organizer>
          </Row>
        </Info>

        <ActionButton onPress={onPress}>{action}</ActionButton>
      </Content>
    </Container>
  );
}

Meetup.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string,
    }),
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  onPress: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
};

export default Meetup;
