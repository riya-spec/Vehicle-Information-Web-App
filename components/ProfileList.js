// components/ProfileList.js
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ProfileList = ({ profiles, onSelectProfile }) => {
  return (
    <View style={styles.container}>
      {profiles.map((profile, index) => (
        <TouchableOpacity
          key={index}
          style={styles.profile}
          onPress={() => onSelectProfile(profile)}
        >
          <Image
            source={require("../assets/profile.png")}
            style={styles.profileImage}
          />
          <Text style={styles.profileText}>{profile.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f8f8",
    padding: 20,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    width: "100%",
  },
  profileText: {
    fontSize: 18,
    marginLeft: 15,
    color: "#333",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default ProfileList;
