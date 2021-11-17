import { Card, Icon, Image } from 'semantic-ui-react';

const CardCity = ({ img, nom, quantity }) => (
  <div className="card flex items-center">
    <Card>
      <Image src={img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{nom}</Card.Header>
        <Card.Meta> </Card.Meta>
        <Card.Description> </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="car" />
        {quantity}
      </Card.Content>
    </Card>
  </div>
);

export default CardCity;