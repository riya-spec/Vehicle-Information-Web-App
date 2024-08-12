// components/VehicleList.js
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const VehicleList = ({ vehicles, onEdit, onDelete }) => {
  return (
    <View style={styles.container}>
      {vehicles.map((vehicle) => (
        <View key={vehicle.id} style={styles.vehicle}>
          <Image
            source={require("../assets/vehicle.png")}
            style={styles.vehicleImage}
          />
          <Text style={styles.vehicleText}>{vehicle.name}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => onEdit(vehicle)}
              style={styles.editButton}
            >
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onDelete(vehicle.id)}
              style={styles.deleteButton}
            >
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  vehicle: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  },
  vehicleText: {
    fontSize: 16,
    flex: 1,
    marginHorizontal: 10,
    color: "#333",
  },
  vehicleImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  editButton: {
    backgroundColor: "#6c63ff",
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: "#ff6b6b",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default VehicleList;
