import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import {HomeScreen} from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

export class DrawerNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeScreen}/>
            </Drawer.Navigator>
        );
    }
}