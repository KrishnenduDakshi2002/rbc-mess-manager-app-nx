import { THEME } from '@global/themes';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

const ViewPager = () => {
  const ViewPagerRef = React.useRef(null);
  const [activePage, setactivePage] = useState(1);
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
          <Text>First page</Text>
        </PagerViewPage>
        <PagerViewPage key={2}>
          <Text>Second page</Text>
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
        backgroundColor: THEME.COLORS.Foreground,
        borderRadius: 10,
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
