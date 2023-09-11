import CustomScreen from '@components/CustomScreen';
import { THEME } from '@global/themes';
import CustomHeader from '@navigation/CustomHeader';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ViewPager from './components/ViewPager';
const MessScreen = () => {
  const bottomTabHeight = useBottomTabBarHeight();

  return (
    <CustomScreen>
      <View
        style={{
          flex: 1,
          backgroundColor: THEME.COLORS.Background,
          paddingHorizontal: 15,
          paddingBottom:
            Platform.OS === 'ios' ? bottomTabHeight + 20 : bottomTabHeight + 40,
        }}
      >
        <CustomHeader />
        <View
          style={{
            height: 200,
            backgroundColor: THEME.COLORS.Foreground,
            marginTop: 10,
            borderRadius: 10,
          }}
        >
          <Text>Calender</Text>
        </View>
        <ViewPager />
      </View>
    </CustomScreen>
  );
};

export default MessScreen;

const styles = StyleSheet.create({});
