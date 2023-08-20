import { useIsFocused } from '@react-navigation/native';
import * as React from 'react';
import { StatusBar } from 'react-native';

export function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}
