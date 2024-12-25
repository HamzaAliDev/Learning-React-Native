import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = [
    {
        id: '1',
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkhJylWvJgj2g1J_O2lybZ0caR33T85SAuQ&s",
        username: 'john_doe',
        caption: 'Beautiful sunset 🌅',
        imageUri: 'https://static.vecteezy.com/system/resources/previews/005/850/606/non_2x/special-sale-up-to-30-percent-off-sale-banner-template-design-with-dynamic-aqua-color-background-and-bright-color-applicable-for-promotional-social-media-post-marketing-kit-free-vector.jpg',
        likes: 120,
        comments: 5,
    },
    {
        id: '2',
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3mr0rOaAemqvSNKmzBD-I6mcpod9HFQuCw&s",
        username: 'jane_doe',
        caption: 'Had a great time at the beach 🏖️',
        imageUri: 'https://topagency.com/wp-content/uploads/2022/01/instagram-post-template-guide-2022.jpg.webp',
        likes: 200,
        comments: 10,
    },
    {
        id: '3',
        profilePic: "",
        username: 'jane_doe',
        caption: 'Had a great time at the beach 🏖️',
        imageUri: 'https://images.unsplash.com/photo-1525450101819-1517c5c00f45?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9zdCUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D',
        likes: 20,
        comments: 7,
    },
    {
        id: '4',
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkhJylWvJgj2g1J_O2lybZ0caR33T85SAuQ&s",
        username: 'john_doe',
        caption: 'Beautiful sunset 🌅',
        imageUri: 'https://static.vecteezy.com/system/resources/previews/005/850/606/non_2x/special-sale-up-to-30-percent-off-sale-banner-template-design-with-dynamic-aqua-color-background-and-bright-color-applicable-for-promotional-social-media-post-marketing-kit-free-vector.jpg',
        likes: 120,
        comments: 5,
    },
    {
        id: '5',
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3mr0rOaAemqvSNKmzBD-I6mcpod9HFQuCw&s",
        username: 'jane_doe',
        caption: 'Had a great time at the beach 🏖️',
        imageUri: 'https://topagency.com/wp-content/uploads/2022/01/instagram-post-template-guide-2022.jpg.webp',
        likes: 200,
        comments: 10,
    },
    {
        id: '6',
        profilePic: "",
        username: 'jane_doe',
        caption: 'Had a great time at the beach 🏖️',
        imageUri: 'https://images.unsplash.com/photo-1525450101819-1517c5c00f45?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9zdCUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D',
        likes: 20,
        comments: 7,
    },
    // More posts...
];


export default function Home() {
    const renderPost = ({ item }) => (
        <View style={styles.postContainer}>
            <View style={styles.header}>
                {item.profilePic ? (
                    <Image style={styles.profilePic} source={{ uri: item.profilePic }} />
                ) : (
                    <Ionicons name="person-circle" size={40} color="gray" /> // Profile icon when no picture is available
                )}
                <Text style={styles.username}>{item.username}</Text>
            </View>
            <Image style={styles.postImage} source={{ uri: item.imageUri }} />
            <View style={styles.footer}>
                <View style={styles.iconRow}>
                    <Ionicons style={styles.icon} name="heart-outline" size={27} color="black" />
                    <Ionicons style={styles.icon} name="chatbubble-outline" size={27} color="black" />
                    <Ionicons style={styles.icon} name="paper-plane-outline" size={27} color="black" />
                </View>
                <Text style={styles.likes}>{item.likes} likes</Text>
                <Text style={styles.caption}>{item.caption}</Text>
                <TouchableOpacity>
                    <Text style={styles.viewComments}>{item.comments} comments</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <>
            {/* <View style={styles.headerMain}>
                <Text style={styles.headerHeading}>Postify</Text>
                <View><Ionicons name={'chatbubble-ellipses-outline'} size={25} color={"black"} /></View>
            </View> */}
            <FlatList
                data={data}
                renderItem={renderPost}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View style={styles.headerMain}>
                        <Text style={styles.headerHeading}>Postify</Text>
                        <View><Ionicons name={'chatbubble-ellipses-outline'} size={25} color={"black"} /></View>
                    </View>
                }
            />
        </>
    )
}


const styles = StyleSheet.create({
    headerMain: {
        padding: 15,
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#e9ecef"
    },
    headerHeading: {
        fontSize: 24,
        fontFamily: "Roboto"
    },
    postContainer: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    profilePic: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    username: {
        fontWeight: 'bold',
    },
    postImage: {
        width: '100%',
        height: 300,
    },
    footer: {
        padding: 10,
    },
    iconRow: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    icon: {
        marginEnd: 10,
        marginBottom: 5,
    },
    likes: {
        fontWeight: 'bold',
    },
    caption: {
        marginTop: 5,
    },
    viewComments: {
        color: 'gray',
        marginTop: 5,
    },
})