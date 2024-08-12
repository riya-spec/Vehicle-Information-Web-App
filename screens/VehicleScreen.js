// screens/VehicleScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import VehicleList from "../components/VehicleList";
import useStore from "../store/Store";

function VehicleScreen() {
  const vehicles = useStore((state) => state.vehicles);
  const addVehicle = useStore((state) => state.addVehicle);
  const updateVehicle = useStore((state) => state.updateVehicle);
  const deleteVehicle = useStore((state) => state.deleteVehicle);

  const [vehicleName, setVehicleName] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleAddOrEditVehicle = () => {
    if (selectedVehicle) {
      updateVehicle({ ...selectedVehicle, name: vehicleName });
      setSelectedVehicle(null);
    } else {
      addVehicle({ id: Date.now(), name: vehicleName });
    }
    setVehicleName("");
  };

  const handleEditVehicle = (vehicle) => {
    setVehicleName(vehicle.name);
    setSelectedVehicle(vehicle);
  };

  const handleDeleteVehicle = (vehicleId) => {
    deleteVehicle(vehicleId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Vehicles</Text>
      <TextInput
        style={styles.input}
        placeholder="Vehicle Name"
        value={vehicleName}
        onChangeText={setVehicleName}
      />
      <Button
        title={selectedVehicle ? "Update Vehicle" : "Add Vehicle"}
        onPress={handleAddOrEditVehicle}
      />
      <VehicleList
        vehicles={vehicles}
        onEdit={handleEditVehicle}
        onDelete={handleDeleteVehicle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});

export default VehicleScreen;
