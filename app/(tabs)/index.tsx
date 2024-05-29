import OrderList from "@/components/OrderList";
import { getOrders, orderStatus } from "@/services";
import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

type Order = {
  id: string;
  status: string;
  picker: {
    name: string;
    surname: string;
  }
};

const HomeScreen = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    getOrders().then((response) => setOrders(response.data));
  }, []);

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    orderStatus(orderId, newStatus).then(() => {
      setOrders(
        orders.map((order) =>
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );
    });
  };

  return (
    <View style={styles.container}>
      <OrderList orders={orders} updateOrderStatus={updateOrderStatus} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
