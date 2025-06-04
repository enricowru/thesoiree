import React, { useContext } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import UpperProfile from '../tocall/UpperProfile';
import NewsfeedPost from '../tocall/NewsfeedPost';
import { UserContext } from '../UserContext';  // adjust path as needed

export default function Profile({ navigation }) {
  const { loggedInUser } = useContext(UserContext);

  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 0 }}>
      <UpperProfile />

      <View style={styles.userInfoContainer}>
        {!loggedInUser ? (
          <Text style={styles.notLoggedInText}>Not logged in</Text>
        ) : (
          <>
            <Text style={styles.welcomeText}>Welcome, {loggedInUser.username}!</Text>
            <Text style={styles.emailText}>Email: {loggedInUser.email}</Text>
          </>
        )}
      </View>

      <NewsfeedPost
        date="February 19, 2024"
        images={[
          require('../postimages/a1.jpg'),
          require('../postimages/a2.jpg'),
          require('../postimages/a3.jpg'),
        ]}
        caption="AUSTIN LIAM | 1st Birthday"
        initialLikes={100}
      />

      <NewsfeedPost
        date="February 18, 2024"
        images={[
          require('../postimages/b1.jpg'),
          require('../postimages/b2.jpg'),
          require('../postimages/b3.jpg'),
        ]}
        caption="MERLINDA | 70th Birthday"
        initialLikes={75}
      />

      <NewsfeedPost
        date="February 17, 2024"
        images={[
          require('../postimages/c1.jpg'),
          require('../postimages/c2.jpg'),
          require('../postimages/c3.jpg'),
        ]}
        caption="TYLER | 1st Birthday"
        initialLikes={150}
      />

      <NewsfeedPost
        date="February 12, 2024"
        images={[
          require('../postimages/d1.jpg'),
          require('../postimages/d2.jpg'),
          require('../postimages/d3.jpg'),
        ]}
        caption="YOHAN | 1st Birthday"
        initialLikes={150}
      />

      <NewsfeedPost
        date="February 11, 2024"
        images={[
          require('../postimages/e1.jpg'),
          require('../postimages/e2.jpg'),
          require('../postimages/e3.jpg'),
        ]}
        caption="ZEANNA | Christening"
        initialLikes={150}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  userInfoContainer: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  notLoggedInText: {
    fontSize: 18,
    color: 'red',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 16,
    marginTop: 4,
  },
});
