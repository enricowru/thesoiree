import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserContext } from "../UserContext"; // adjust path as needed

export default function Profile() {
  const { loggedInUser } = useContext(UserContext);

  if (!loggedInUser) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Not logged in</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {loggedInUser.username}!</Text>
      <Text style={styles.text}>Email: {loggedInUser.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginTop: 50
  },
  title: {
    fontSize: 24,
    marginBottom: 10
  },
  text: {
    fontSize: 18
  }
});
