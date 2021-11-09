import { Card, Icon, Image } from 'semantic-ui-react';

const CardExampleImageCard = ({ img, nom }) => (
  <Card>
    <Image src={img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{nom}</Card.Header>
      <Card.Meta>Joined Uin 2016</Card.Meta>
      <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name="user" />
      10 Friend
    </Card.Content>
  </Card>
);

export default CardExampleImageCard;
