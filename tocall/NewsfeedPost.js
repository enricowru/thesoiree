import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SNewsfeedPost } from '../styles/SNewsfeedPost';
import { useUser } from '../UserContext';

const { width } = Dimensions.get('window'); // Get screen width for image slider

const NewsfeedPost = ({ username = "NikesCatering", date, images, caption, initialLikes, id }) => {
  const { likedPosts, setLikedPosts, togglePostLike, getPostLikes } = useUser();

  // ✅ Safe fallback if getPostLikes is missing
  const safeGetPostLikes = getPostLikes || ((_, likes) => likes);

  const [currentIndex, setCurrentIndex] = useState(0);
  const postId = id || `${caption}-${date}`;

  const [liked, setLiked] = useState(
    likedPosts.some(post => post.id === postId)
  );

  useEffect(() => {
    setLiked(likedPosts.some(post => post.id === postId));
  }, [likedPosts, postId]);

  const handleLikePress = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    togglePostLike?.(postId, initialLikes);

    if (newLiked) {
      setLikedPosts([...likedPosts, { 
        id: postId,
        username, 
        date, 
        caption, 
        images, 
        initialLikes 
      }]);
    } else {
      setLikedPosts(likedPosts.filter(post => post.id !== postId));
    }
  };

  const handleScroll = (event) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(slideIndex);
  };

  return (
    <View style={SNewsfeedPost.container}>
      {/* Header */}
      <View style={SNewsfeedPost.header}>
        <View style={SNewsfeedPost.headerLeft}>
          <Image 
            source={require('../assets/CLogo-Notext.png')} 
            style={SNewsfeedPost.logo}
            resizeMode="contain"
          />
          <Text style={SNewsfeedPost.mainname}>NIKE'S CATERING SERVICES</Text>
        </View>
        <Text style={SNewsfeedPost.date}>{date}</Text>
      </View>

      {/* Image Carousel */}
      <View style={SNewsfeedPost.imageContainer}>
        <FlatList
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          onScroll={handleScroll}
          renderItem={({ item }) => (
            <Image 
              source={item} 
              style={SNewsfeedPost.image}
              resizeMode="cover"
            />
          )}
        />
      </View>

      {/* Dots Indicator */}
      <View style={SNewsfeedPost.dotsContainer}>
        {images.map((_, index) => (
          <View 
            key={index} 
            style={[
              SNewsfeedPost.dot,
              currentIndex === index ? SNewsfeedPost.activeDot : SNewsfeedPost.inactiveDot
            ]} 
          />
        ))}
      </View>

      {/* Footer */}
      <View style={SNewsfeedPost.footer}>
        <View style={SNewsfeedPost.likes}>
          <TouchableOpacity onPress={handleLikePress}>
            <MaterialIcons 
              name={liked ? "favorite" : "favorite-border"} 
              size={24} 
              color={liked ? "red" : "black"} 
            />
          </TouchableOpacity>
          <Text style={SNewsfeedPost.likesCount}>
            {safeGetPostLikes(postId, initialLikes)} likes
          </Text>
        </View>
      </View>

      {/* Caption */}
      <Text style={SNewsfeedPost.caption}>
        <Text style={SNewsfeedPost.username}>{username}</Text>
        {caption}
      </Text>
    </View>
  );
};

export default NewsfeedPost;
