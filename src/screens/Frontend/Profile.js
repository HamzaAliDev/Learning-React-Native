import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function Profile() {
  // Sample posts data (array of objects)
  const posts = [
    {
      id: '1',
      imageUri: 'https://via.placeholder.com/300',
      text: 'Exploring the mountains 🏔️ and enjoying the view!',
    },
    {
      id: '2',
      imageUri: 'https://via.placeholder.com/300',
      text: 'Delicious food at the new restaurant! 🍕🍴',
    },
    {
      id: '3',
      imageUri: 'https://via.placeholder.com/300',
      text: 'Caught a beautiful sunset by the beach 🌅',
    },
    {
      id: '4',
      imageUri: 'https://via.placeholder.com/300',
      text: 'Visiting the historical monuments today! 🏛️',
    },
  ];

  const handleLogout = () => {
    // Handle the logout logic here
    console.log('User logged out');
  };

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <View style={styles.mainContainer}>
          <View style={styles.imgContainer}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image
              style={styles.profileImage}
            />
            <Text style={styles.username}>John Doe</Text>
          </View>
          <Text style={styles.bio}>Loving life and exploring the world 🌍 | Foodie 🍕 | Tech Geek 💻</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>

      </View>

      {/* Stats Section */}
      <View style={styles.statsSection}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>120</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>450</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>180</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      {/* Posts Section */}
      <View style={styles.postsSection}>
        <Text style={styles.sectionTitle}>Your Posts</Text>
        <FlatList
          data={posts}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.postCard}>
              <Image
                source={{ uri: item.imageUri }}
                style={styles.postImage}
              />
              <Text style={styles.postText}>{item.text}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  mainContainer: {
    width: "50%"
  },
  imgContainer:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 2,
    marginEnd: 8,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    fontSize: 14,
    color: '#666',
    marginVertical: 10,
  },
  buttonContainer: {
    width: "50%",
    alignItems: 'flex-end',
  },
  editButton: {
    width: 100,
    marginTop: 5,
    backgroundColor: '#ac1e5f',
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  logoutButton: {
    width: 100,
    marginTop: 15,
    backgroundColor: '#dee2e6',
    paddingVertical: 8,
    paddingHorizontal: 11,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  logoutButtonText: {
    color: '#ac1e5f',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  postsSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  postCard: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  postImage: {
    width: width - 40,
    height: 200,
    resizeMode: 'cover',
  },
  postText: {
    padding: 10,
    fontSize: 14,
    color: '#333',
  },
});

