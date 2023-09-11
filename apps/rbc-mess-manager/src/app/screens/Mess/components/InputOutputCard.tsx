import FeedbackPressable from '@components/FeedbackPressable';
import { View } from 'react-native';

import { THEME } from '@global/themes';
import { Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';

function EmptyCard({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FeedbackPressable onPress={onPress}>
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <View>
            <FontAwesome5
              name="plus"
              size={24}
              color={THEME.COLORS.Textsecondary}
            />
          </View>
          <Text
            style={{
              color: THEME.COLORS.Textsecondary,
              fontSize: 15,
              fontWeight: '500',
              marginTop: 15,
            }}
          >
            {title}
          </Text>
        </View>
      </FeedbackPressable>
    </View>
  );
}

function InputOutputCard({
  roomId,
  shift,
  user,
  date,
  onPress,
}: {
  roomId: number;
  shift: 'MORNING' | 'EVENING';
  user: string;
  date: Date;
  onPress: () => void;
}) {
  return (
    <FeedbackPressable onPress={onPress}>
      <View
        style={{
          //   borderWidth: 1,
          //   borderColor: THEME.COLORS.Textsecondary,
          backgroundColor: THEME.COLORS.Foreground,
          borderRadius: 10,
          paddingVertical: 15,
          paddingHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: THEME.COLORS.Primarylight,
              paddingVertical: 7,
              alignItems: 'center',
              justifyContent: 'center',
              width: 120,
            }}
          >
            <Text
              style={{
                color: THEME.COLORS.Primarylight,
              }}
            >
              Room {roomId}
            </Text>
          </View>

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: THEME.COLORS.Textsecondary,
                fontSize: 14,
                fontWeight: 'bold',
                marginRight: 10,
              }}
            >
              {new Intl.DateTimeFormat('en-IN', {}).format(date)}
            </Text>
            <View
              style={{
                paddingVertical: 4,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: shift === 'MORNING' ? 'orange' : 'white',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginRight: 8,
                }}
              >
                {shift === 'MORNING' ? 'Morning' : 'Evening'}
              </Text>
              <View>
                <Octicons
                  name={shift === 'MORNING' ? 'sun' : 'moon'}
                  color={shift === 'MORNING' ? 'orange' : 'white'}
                  size={20}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              marginBottom: 5,
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                fontFamily: 'poppins',
                color: THEME.COLORS.Textprimary,
              }}
            >
              {user}
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            padding: 10,
          }}
        >
          <FontAwesome
            name="angle-right"
            size={24}
            color={THEME.COLORS.Textprimary}
          />
        </View>
      </View>
    </FeedbackPressable>
  );
}

export { EmptyCard, InputOutputCard };
