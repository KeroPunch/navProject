
import {View, Text, StyleSheet, FlatList, ActivityIndicator, Image} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";


const _renderItems = ({ item }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          // resizeMode='center'
          source={{ uri: item.picture }}
          style={styles.thumbnail}
        />
      </View>
      <View style={styles.dataContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.detail}>{item.detail}</Text>
      </View>
    </View>
  );
};
const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

const ProductScreen = () => {
  const [product, setProduct] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://api.codingthailand.com/api/course");
    setProduct(res.data.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <FlatList
        data={product}
        keyExtractor={(item, index) => item.id.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={_renderItems}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    height: 80,
    elevation: 3,
    borderColor: "gray",
    borderRadius: 5,
    flexDirection: "row",
    maeginHorizontal: 20,
    margin: 5
  },
  dataContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 70,
    height: 70,
  },
  dataContent: {
    marginTop: 5,
    marginLeft: 15,
  },
  title: {
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 16,
    color: "#777",
    fontWeight: 700,
  },
});