import React from 'react';
import { Icon, Touchable, useTheme } from '@draftbit/ui';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { systemWeights } from 'react-native-typography';
import LinkingConfiguration from './LinkingConfiguration';
import HomeScreen from './screens/HomeScreen';
import Screen1Landing from './screens/Screen1Landing';
import Screen1Puzzle1 from './screens/Screen1Puzzle1';
import Screen1Puzzle2 from './screens/Screen1Puzzle2';
import Screen1QuizSuccessState from './screens/Screen1QuizSuccessState';
import Screen2Landing from './screens/Screen2Landing';
import Screen3Landing from './screens/Screen3Landing';
import Screen3Puzzle1 from './screens/Screen3Puzzle1';
import Screen3Puzzle2 from './screens/Screen3Puzzle2';
import Screen4Landing from './screens/Screen4Landing';
import palettes from './themes/palettes';
import Breakpoints from './utils/Breakpoints';
import useWindowDimensions from './utils/useWindowDimensions';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DefaultAndroidBackIcon({ tintColor }) {
  return (
    <View style={[styles.headerContainer, styles.headerContainerLeft]}>
      <Icon
        name="AntDesign/arrowleft"
        size={24}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </View>
  );
}

function DefaultDrawerIcon({ tintColor, navigation }) {
  return (
    <Touchable
      onPress={() => navigation.toggleDrawer()}
      style={[styles.headerContainer, styles.headerContainerLeft]}
    >
      <Icon
        name="EvilIcons/navicon"
        size={27}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </Touchable>
  );
}

export default function RootAppNavigator() {
  const theme = useTheme();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#FFFFFF',
        },
      }}
      linking={LinkingConfiguration}
    >
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          cardStyle: { flex: 1 },
          headerBackImage:
            Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
        })}
      >
        <Stack.Screen
          name="Screen1Landing"
          component={Screen1Landing}
          options={({ navigation }) => ({
            title: '1_landing',
          })}
        />
        <Stack.Screen
          name="Screen2Landing"
          component={Screen2Landing}
          options={({ navigation }) => ({
            title: '2_ Landing',
          })}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Home ',
          })}
        />
        <Stack.Screen
          name="Screen1Puzzle1"
          component={Screen1Puzzle1}
          options={({ navigation }) => ({
            title: '1Puzzle - 1 ',
          })}
        />
        <Stack.Screen
          name="Screen1Puzzle2"
          component={Screen1Puzzle2}
          options={({ navigation }) => ({
            title: '1Puzzle - 2',
          })}
        />
        <Stack.Screen
          name="Screen3Landing"
          component={Screen3Landing}
          options={({ navigation }) => ({
            title: '3_ Landing ',
          })}
        />
        <Stack.Screen
          name="Screen4Landing"
          component={Screen4Landing}
          options={({ navigation }) => ({
            title: '4_ Landing ',
          })}
        />
        <Stack.Screen
          name="Screen1QuizSuccessState"
          component={Screen1QuizSuccessState}
          options={({ navigation }) => ({
            title: '1 Quiz Success State',
          })}
        />
        <Stack.Screen
          name="Screen3Puzzle1"
          component={Screen3Puzzle1}
          options={({ navigation }) => ({
            title: '3Puzzle - 1',
          })}
        />
        <Stack.Screen
          name="Screen3Puzzle2"
          component={Screen3Puzzle2}
          options={({ navigation }) => ({
            title: '3Puzzle - 2',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({ ios: { marginLeft: 8 } }),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({ ios: { marginRight: 6 } }),
});
