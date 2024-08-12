// screens/HomeScreen.js
import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import ProfileList from "../components/ProfileList";
import useStore from "../store/Store";

function HomeScreen({ navigation }) {
  const profiles = useStore((state) => state.profiles);

  const handleSelectProfile = (profile) => {
    navigation.navigate("Profile", { profile });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Your Profile</Text>
      <ProfileList profiles={profiles} onSelectProfile={handleSelectProfile} />
      <Button
        title="Add Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f8f8",
  },
  header: {
    fontSize: 24,
    marginVertical: 20,
    fontWeight: "bold",
    color: "#333",
  },
});

export default HomeScreen;
