// store/store.js
import create from "zustand";

const useStore = create((set) => ({
  profiles: [],
  vehicles: [],
  addProfile: (profile) =>
    set((state) => ({ profiles: [...state.profiles, profile] })),
  addVehicle: (vehicle) =>
    set((state) => ({ vehicles: [...state.vehicles, vehicle] })),
  updateVehicle: (updatedVehicle) =>
    set((state) => ({
      vehicles: state.vehicles.map((vehicle) =>
        vehicle.id === updatedVehicle.id ? updatedVehicle : vehicle
      ),
    })),
  deleteVehicle: (id) =>
    set((state) => ({
      vehicles: state.vehicles.filter((vehicle) => vehicle.id !== id),
    })),
}));

export default useStore;
