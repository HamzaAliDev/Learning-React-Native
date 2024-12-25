// UserProfile.js
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, FlatList } from 'react-native';
// import { Avatar, Button } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UserProfile = ({ navigation }) => {
  const user = {
    username: 'john_doe',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    followers: 500,
    following: 180,
    posts: [
      { id: 1, image: 'https://via.placeholder.com/150' },
      { id: 2, image: 'https://via.placeholder.com/150' },
      { id: 3, image: 'https://via.placeholder.com/150' },
      { id: 4, image: 'https://via.placeholder.com/150' },
      { id: 5, image: 'https://via.placeholder.com/150' },
    ],
  };

  const renderPost = ({ item }) => {
    return (
      <View style={styles.postContainer}>
        <Image source={{ uri: item.image }} style={styles.postImage} />
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.headerContainer}>
        {/* <Avatar.Image size={100} source={{ uri: 'https://via.placeholder.com/150' }} /> */}
        <View style={styles.userInfo}>
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.bio}>{user.bio}</Text>
          <View style={styles.followerInfo}>
            <Text style={styles.followerText}>
              <Text style={styles.bold}>{user.followers}</Text> Followers
            </Text>
            <Text style={styles.followerText}>
              <Text style={styles.bold}>{user.following}</Text> Following
            </Text>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        {/* <Button mode="contained" style={styles.followButton}> */}
          {/* Follow */}
        {/* </Button> */}
        {/* <Button mode="outlined" style={styles.messageButton} onPress={() => navigation.navigate('Chat')}>
          <Ionicons name="chatbubble-ellipses-outline" size={20} color="black" />
          Message
        </Button> */}
      </View>

      {/* Post Grid */}
      <FlatList
        data={user.posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        contentContainerStyle={styles.postGrid}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  userInfo: {
    marginLeft: 15,
    flex: 1,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    marginVertical: 5,
    fontSize: 16,
    color: 'gray',
  },
  followerInfo: {
    flexDirection: 'row',
    marginTop: 10,
  },
  followerText: {
    marginRight: 15,
  },
  bold: {
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  followButton: {
    flex: 1,
    marginRight: 10,
  },
  messageButton: {
    flex: 1,
  },
  postGrid: {
    marginTop: 10,
  },
  postContainer: {
    flex: 1,
    margin: 5,
  },
  postImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default UserProfile;
