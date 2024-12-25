import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ToastAndroid,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

export default function CreatePost() {
  const [postText, setPostText] = useState('');
  const [imageUri, setImageUri] = useState(null);

  // Handle image picker
  const pickImage = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else {
          const uri = response.assets[0].uri;
          setImageUri(uri);
        }
      }
    );
  };

  // Handle post submission
  const handlePost = () => {
    if (!postText.trim() && !imageUri) {
      // const showToastWithGravityAndOffset = () => {
        ToastAndroid.showWithGravityAndOffset(
          'Please add Text or Picture to create a post!',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );
      // Alert.alert('Empty Post', 'Please add text or a picture to create a post.');
      return;
    }
    // Here, you can handle submitting the post to a backend or state
    // Alert.alert('Post Created', 'Your post has been created successfully!');
    ToastAndroid.showWithGravityAndOffset(
      'Your post has been created successfully!',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      25,
      50,
    );
    setPostText('');
    setImageUri(null);
  };

  // Handle cancel action
  const handleCancel = () => {
    setPostText('');
    setImageUri(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a Post</Text>

      {/* Post Text Input */}
      <TextInput
        style={styles.input}
        placeholder="What's on your mind?"
        value={postText}
        onChangeText={setPostText}
        multiline
      />

      {/* Picture Upload Section */}
      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
        <Text style={styles.uploadButtonText}>
          {imageUri ? 'Change Picture' : 'Attach a Picture'}
        </Text>
      </TouchableOpacity>

      {/* Image Preview */}
      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.imagePreview} />
      )}

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.postButton} onPress={handlePost}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    textAlignVertical: 'top',
    height: 120,
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: '#ac1e5f',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  imagePreview: {
    width: '100%',
    height: 400,
    borderRadius: 8,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postButton: {
    backgroundColor: '#ac1e5f',
    padding: 15,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
  },
  postButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
