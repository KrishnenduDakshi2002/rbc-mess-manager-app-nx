import type {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import type {
  CompositeNavigationProp,
  CompositeScreenProps,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { SCREENS } from '@utils/screens';

type RootTabParamList = {
  [SCREENS.MESS_SCREEN]: undefined;
  [SCREENS.PROFILE_SCREEN]: undefined;
  [SCREENS.DASHBOARD_SCREEN]: undefined;
  [SCREENS.ROOMS_SCREEN]: undefined;
};

type RootStackParamList = {
  [SCREENS.TAB_NAVIGATOR]: NavigatorScreenParams<RootTabParamList>;
  [SCREENS.AUTH]: undefined;
  [SCREENS.ROOM_SCREEN]:
    | {
        roomId: number;
      }
    | undefined;
  [SCREENS.MESS_INPUT_DETAILS_SCREEN]: { roomId: number };
  [SCREENS.MESS_INPUT_SCREEN]: undefined;
  [SCREENS.MESS_OUTPUT_SCREEN]: undefined;
  [SCREENS.MESS_OUTPUT_DETAILS_SCREEN]: { roomId: number };
};

type RoomScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, SCREENS.ROOMS_SCREEN>,
  NativeStackNavigationProp<RootStackParamList>
>;

type RoomScreenScreenProps = NativeStackScreenProps<
  RootStackParamList,
  SCREENS.ROOM_SCREEN
>;

type StackNavigationProps = NativeStackNavigationProp<RootStackParamList>;

export {
  RoomScreenNavigationProp,
  RoomScreenScreenProps,
  RootStackParamList,
  RootTabParamList,
  StackNavigationProps,
};
