import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import StatusPill from "./StatusPill";
import Icon from "react-native-vector-icons/MaterialIcons";

const Order = ({
  order,
  updateOrderStatus,
}: {
  order: any;
  updateOrderStatus: any;
}) => {
  const renderIcon = (status: string) => {
    switch (status) {
      case "PENDING":
        return <Icon name="more-horiz" size={24} color="#000" />;
      case "IN_PROGRESS":
        return <Icon name="loop" size={24} color="#000" />;
      case "COMPLETED":
        return <Icon name="check" size={24} color="#000" />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.card} id={order.id}>
      <View style={styles.infoContainer}>
        <Text style={styles.header}>Order ID:</Text>
        <Text style={styles.body}>{order.id}</Text>
        <Text style={styles.header}>Picker:</Text>
        <Text style={styles.body}>
          {order.picker.name} {order.picker.surname}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => updateOrderStatus(order.id, "PENDING")}
          >
            {renderIcon("PENDING")}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => updateOrderStatus(order.id, "IN_PROGRESS")}
          >
            {renderIcon("IN_PROGRESS")}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => updateOrderStatus(order.id, "COMPLETED")}
          >
            {renderIcon("COMPLETED")}
          </TouchableOpacity>
        </View>
        <StatusPill status={order.status} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#C2D39E",
    padding: 16,
    borderRadius: 20,
  },
  infoContainer: {
    flexDirection: "column",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
  button: {
    height: 45,
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginLeft: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export { Order };
