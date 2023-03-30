import React from 'react';
import { Card } from 'react-bootstrap';

const CardItem = ({ card }) => {
  return (
    <Card>
      <Card.Img variant="top" src={card.card_images[0].image_url} />
      <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Card.Text>
          {card.type} - {card.race} - {card.attribute}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
