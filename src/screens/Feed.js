import React, { useRef } from "react";

import { StyleSheet, View, Text, FlatList, Dimensions } from "react-native";

import Post from "../components/Post";

import dataPosts from "../data/posts.json";

export default function FeedScreen() {
  const mediaRefs = useRef([]);

  const data = dataPosts;

  const onViewableItemsChanged = useRef(({ changed }) => {
    changed.forEach((element) => {
      const cell = mediaRefs.current[element.key];

      if (cell) {
        if (element.isViewable) {
          cell.play();
        } else {
          cell.stop();
        }
      }
    });
  });

  const renderItems = ({ item, index }) => {
    return (
      <View
        style={{
          flex: 1,
          height: Dimensions.get("window").height - 49,
          backgroundColor: "#000",
        }}
      >
        <Post
          item={item}
          ref={(postRef) => (mediaRefs.current[item.id] = postRef)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        windowSize={4}
        initialNumToRender={0}
        maxToRenderPerBatch={2}
        removeClippedSubviews
        // viewabilityConfig={{
        //   itemVisiblePercentThreshold: 100,
        // }}
        onEndReachedThreshold={100}
        renderItem={renderItems}
        pagingEnabled
        keyExtractor={(item) => item.id}
        decelerationRate="normal"
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
