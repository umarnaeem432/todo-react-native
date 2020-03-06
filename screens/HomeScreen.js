import React from 'react';
import { Container, Text } from 'native-base';
import {StyleSheet, View} from 'react-native';
import {AppHeader} from '../components/Header';
import {GlobalStyle} from '../styles/global';
import {TodoList} from '../components/home/TodoList';
import {Global} from '../general';



export class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    render() {
        this.state.homeScreenText = 'Home Screen!';
        return (
            <Container style={styles.container}>
                <AppHeader title="Home" openDrawer={() => {this.props.navigation.openDrawer()}}/>
                <View>
                    <Text>Home Screen</Text>
                    <TodoList todos={this.state.todos}/>
                </View>
            </Container>
        );
    }

    componentDidMount() {
        // this.setState({todos: [{text: 'Some Text', key: '1'}]})
        fetch(Global.endPoints.todos)
        .then(response => response.json())
        .then(todos => {
            this.setState({
                todos
            })
        });
    }
}

const styles = StyleSheet.create(GlobalStyle);