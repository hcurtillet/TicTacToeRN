import { NavigationContainer } from '@react-navigation/native';
import { ParamsScreen, PlayScreen } from '../screens';
import { ScreenInterface, Screens } from '../types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        const color = focused ? 'blue' : 'black';
                        switch (route.name) {
                            case routes.playScreen.name:
                                return (
                                    <Icon
                                        name="gamepad"
                                        size={25}
                                        color={color}
                                    />
                                );
                            case routes.paramsScreen.name:
                                return (
                                    <Icon name="cog" size={25} color={color} />
                                );
                        }
                    },
                })}>
                <Tab.Screen
                    name={routes.playScreen.name}
                    component={routes.playScreen.component}
                />
                <Tab.Screen
                    name={routes.paramsScreen.name}
                    component={routes.paramsScreen.component}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export const routes: { [key in Screens]: ScreenInterface } = {
    playScreen: {
        name: 'Play',
        component: PlayScreen,
    },
    paramsScreen: {
        name: 'Params',
        component: ParamsScreen,
    },
};
