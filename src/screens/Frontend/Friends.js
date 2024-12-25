import React from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

// Sample data for users
const users = [
  {
    id: '1',
    name: 'John Doe',
    profilePicture: 'https://via.placeholder.com/100',
    isFollowing: false,
  },
  {
    id: '2',
    name: 'Emma Watson',
    profilePicture: 'https://via.placeholder.com/100',
    isFollowing: true,
  },
  {
    id: '3',
    name: 'Sophia Lee',
    profilePicture: 'https://via.placeholder.com/100',
    isFollowing: false,
  },
  {
    id: '4',
    name: 'Liam Brown',
    profilePicture: 'https://via.placeholder.com/100',
    isFollowing: false,
  },
];


export default function Friends() {
  const renderUser = ({ item }) => (
    <View style={styles.userContainer}>
      {/* User Info */}
      <View style={styles.userInfo}>
        <Image source={{ uri: item.profilePicture }} style={styles.profilePicture} />
        <View>
          <Text style={styles.userName}>{item.name}</Text>
        </View>
      </View>

      {/* Follow/Unfollow Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.followButton, item.isFollowing && styles.followingButton]}>
          <Text style={[styles.followButtonText, item.isFollowing && styles.followingButtonText]}>
            {item.isFollowing ? 'Following' : 'Follow'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.cancelButton}>Cancel</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore People</Text>
      <FlatList
        data={users}
        renderItem={renderUser}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer:{
    flexDirection: 'row',
    alignItems: 'center',

  },
  followButton: {
    backgroundColor: '#ac1e5f',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    marginEnd: 5,
  },
  followButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  followingButton: {
    backgroundColor: '#ddd',
  },
  followingButtonText: {
    color: '#000',
  },
  cancelButton:{
    backgroundColor: '#e9ecef',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
});