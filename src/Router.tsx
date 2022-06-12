import React from 'react';
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Home,HotDeals,Basket} from './screens'
import {CustomHeader} from './components/CustomHeader'

enum Routes {
  HOME='home',
  DEALS="deals",
  BASKET="basket"
}

type MainNavigatorParamsList = {
  [Routes.HOME]: undefined
  [Routes.DEALS]: undefined
  [Routes.BASKET]: undefined
}

const Tab = createBottomTabNavigator<MainNavigatorParamsList>();



export const Router = () => {
    const getOptions = (title:string) => {
        return {
          header: () => (
            <CustomHeader
                title={title}
            />
          ),
          tabBarLabelStyle:{fontSize:12}
        };
      }
      
      const getScreenOptions = ({route}:{route:RouteProp<ParamListBase, string>}) => ({
        tabBarIcon: ({color, size}:{color:string,size:number}) => {
          let iconName = ""
          if (route.name === Routes.HOME) {
            iconName = 'home-variant';
          } else if (route.name === Routes.DEALS) {
            iconName = 'tag';
          } else if (route.name === Routes.BASKET) {
            iconName = 'basket-outline';
          } 
          return <Icon name={iconName} size={size} color={color} />;
        },
      });

    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={getScreenOptions}
            >
                <Tab.Screen 
                    name={Routes.HOME}
                    component={Home}
                    options={getOptions("Deals")}
                />
                <Tab.Screen 
                    name={Routes.DEALS}
                    component={HotDeals}
                    options={getOptions("Hottest Deals")}
                />
                <Tab.Screen 
                    name={Routes.BASKET}
                    component={Basket}
                    options={getOptions("Basket")}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}