import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native';

const notifications = [
  {
    id: '1',
    user: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    message: 'liked your post.',
    time: '2m ago',
  },
  {
    id: '2',
    user: 'Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    message: 'commented on your post.',
    time: '10m ago',
  },
  {
    id: '3',
    user: 'Mike Ross',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    message: 'started following you.',
    time: '1h ago',
  },
];

export default function Notification() {
  const renderItem = ({ item }) => (
    <View style={styles.notificationCard}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.notificationText}>
          <Text style={styles.userName}>{item.user} </Text>
          {item.message}
        </Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  notificationText: {
    fontSize: 16,
    color: '#333',
  },
  userName: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
  timeText: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
});
