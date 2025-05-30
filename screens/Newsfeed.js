import React from 'react';
import { ScrollView } from 'react-native';
import NewsfeedPost from '../tocall/NewsfeedPost';

export default function Newsfeed({ navigation }) {
  return (
    <ScrollView>
      
      <NewsfeedPost
        id="post1"
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
        id="post2"
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
        id="post3"
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
        id="post4"
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
        id="post5"
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
