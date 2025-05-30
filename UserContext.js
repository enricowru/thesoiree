import React, { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [likedPosts, setLikedPosts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [postLikes, setPostLikes] = useState({});
  const [filters] = useState({
    none: "none",
    grayscale: "grayscale(100%)",
    sepia: "sepia(100%)",
    invert: "invert(100%)",
    blur: "blur(2px)"
  });

  const updateAverageRating = (newReview) => {
    setTotalReviews(prevTotal => {
      const newTotal = prevTotal + 1;
      setAverageRating(prevAverage => {
        const newAverage = ((prevAverage * prevTotal) + newReview.rating) / newTotal;
        return parseFloat(newAverage.toFixed(1));
      });
      return newTotal;
    });
  };

  const addReview = (newReview) => {
    setReviews(prevReviews => [newReview, ...prevReviews]);
    updateAverageRating(newReview);
  };

  const updateUser = (newUserData) => {
    setLoggedInUser(prev => ({
      ...prev,
      ...newUserData
    }));

    setReviews(prevReviews =>
      prevReviews.map(review =>
        review.username === loggedInUser?.username ? { ...review, username: newUserData.username } : review
      )
    );
  };

  const updateProfileImage = (newImage) => {
    setLoggedInUser(prev => ({
      ...prev,
      recentProfileImages: [prev?.profileImage, ...(prev?.recentProfileImages || [])].slice(0, 5),
      profileImage: newImage
    }));
  };

  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        likedPosts,
        setLikedPosts,
        reviews,
        addReview,
        averageRating,
        totalReviews,
        postLikes,
        setPostLikes,
        updateUser,
        updateProfileImage,
        filters
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  return useContext(UserContext);
}
