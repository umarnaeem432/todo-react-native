import React from "react";
import {
  Header,
  Left,
  Body,
  Icon,
  Title,
  Button,
  Container
} from "native-base";
export class AppHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" onPress={this.props.openDrawer} />
          </Button>
        </Left>

        <Body>
          <Title>{this.props.title}</Title>
        </Body>
      </Header>
    );
  }
}
