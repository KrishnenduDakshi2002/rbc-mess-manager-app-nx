import FeedbackPressable from '@components/FeedbackPressable';
import { THEME } from '@global/themes';
import { StackNavigationProps } from '@global/types/navigation.type';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '@utils/screens';
import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import { generateMessInputData } from 'src/app/data/mess';
import { EmptyCard, InputOutputCard } from './InputOutputCard';
const Data = generateMessInputData();
const ViewPager = () => {
  const ViewPagerRef = React.useRef(null);
  const [activePage, setactivePage] = useState(1);
  const navigation = useNavigation<StackNavigationProps>();
  return (
    <View
      style={{
        flex: 1,
        marginTop: 15,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          gap: 10,
          padding: 10,
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        <PagerViewHeaderTitle
          title={'Input'}
          active={activePage === 1}
          onPress={() => {
            ViewPagerRef.current?.setPage(0);
            setactivePage(1);
          }}
        />
        <PagerViewHeaderTitle
          title={'Output'}
          active={activePage === 2}
          onPress={() => {
            ViewPagerRef.current?.setPage(1);
            setactivePage(2);
          }}
        />
      </View>
      <PagerView
        style={{
          flex: 1,
        }}
        ref={ViewPagerRef}
        onPageSelected={(e) => {
          setactivePage(e.nativeEvent.position + 1);
        }}
        pageMargin={15}
      >
        <PagerViewPage key={1}>
          <FlatList
            style={{
              flex: 1,
              width: '100%',
            }}
            contentContainerStyle={{
              flexGrow: 1,
            }}
            showsVerticalScrollIndicator={false}
            data={[]}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={
              <EmptyCard
                title="Add today's input data"
                onPress={() => {
                  navigation.navigate(SCREENS.MESS_INPUT_SCREEN);
                }}
              />
            }
            ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
            renderItem={(item) => {
              return (
                <InputOutputCard
                  roomId={item.item.roomId}
                  shift={item.item.shift}
                  user={item.item.user}
                  date={item.item.date}
                  onPress={() => {
                    navigation.navigate(SCREENS.MESS_INPUT_DETAILS_SCREEN, {
                      roomId: item.item.roomId,
                    });
                  }}
                />
              );
            }}
          />
        </PagerViewPage>
        <PagerViewPage key={2}>
          <FlatList
            style={{
              flex: 1,
              width: '100%',
            }}
            contentContainerStyle={{
              flexGrow: 1,
            }}
            showsVerticalScrollIndicator={false}
            data={Data}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={
              <EmptyCard
                title="Add today's output data"
                onPress={() => {
                  navigation.navigate(SCREENS.MESS_OUTPUT_SCREEN);
                }}
              />
            }
            ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
            renderItem={(item) => {
              return (
                <InputOutputCard
                  roomId={item.item.roomId}
                  shift={item.item.shift}
                  user={item.item.user}
                  date={item.item.date}
                  onPress={() => {
                    navigation.navigate(SCREENS.MESS_OUTPUT_DETAILS_SCREEN, {
                      roomId: item.item.roomId,
                    });
                  }}
                />
              );
            }}
          />
        </PagerViewPage>
      </PagerView>
    </View>
  );
};

export default ViewPager;

function PagerViewPage({ children, key }) {
  return (
    <View
      key={key}
      style={{
        flex: 1,
        backgroundColor: THEME.COLORS.Background,
        borderRadius: 10,
        // borderWidth: 1,
        // borderColor: THEME.COLORS.Foreground,
        paddingVertical: 10,
        alignItems: 'center',
      }}
    >
      {children}
    </View>
  );
}

function PagerViewHeaderTitle({ title, active, onPress }) {
  return (
    <Pressable
      style={{
        flex: 1,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        borderBottomWidth: active ? 2 : 0,
        borderBottomColor: active
          ? THEME.COLORS.Primarylight
          : THEME.COLORS.Textsecondary,
      }}
      onPress={() => {
        onPress();
      }}
    >
      <Text
        style={{
          color: active
            ? THEME.COLORS.Primarylight
            : THEME.COLORS.Textsecondary,
          fontWeight: 'bold',
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
