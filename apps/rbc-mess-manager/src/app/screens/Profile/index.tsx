import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '../../global/themes';

import Ionicons from 'react-native-vector-icons/Ionicons';

import img from '../../../assets/images/dp.png';

const ProfileScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
      }}
    >
      <View
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.background,
        }}
      >
        <View style={styles.container}>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginBottom: 20,
              flexDirection: 'row',
            }}
          >
            <Image source={img} style={styles.profileImage} />
            <Ionicons
              name="camera"
              size={20}
              color="white"
              style={{
                borderColor: 'white',
                borderWidth: 1,
                borderRadius: 100,
                padding: 5,
              }}
            />
          </View>

          <View
            style={{
              width: '100%',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              paddingHorizontal: 20,
            }}
          >
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>john.doe@example.com</Text>
            <TouchableOpacity style={styles.changePassword}>
              <Text style={styles.changePasswordText}>Change Password</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.roomContainer}>
            <View style={styles.roomBox}>
              <Text style={styles.roomLabel}>Room Number</Text>
              <Text style={styles.roomValue}>123</Text>
            </View>
            {/* <View style={styles.dataBox}></View> */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: '#ccc',
  },
  name: {
    fontSize: 25,
    marginTop: 10,
    fontWeight: 'bold',
    color: theme.colors.textprimary,
  },
  email: {
    fontSize: 20,
    marginTop: 10,
    color: theme.colors.textprimary,
  },
  changePassword: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  changePasswordText: {
    color: theme.colors.textsecondary,
    borderColor: theme.colors.textprimary,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  roomContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  roomBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: theme.colors.foreground,
    borderRadius: 15,
    marginBottom: 10,
  },
  roomLabel: {
    color: theme.colors.textprimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  roomValue: {
    color: theme.colors.textprimary,
    fontSize: 16,
  },
  dataBox: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 15,
  },
});
