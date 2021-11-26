import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";

import { Video } from "expo-av";
import { View } from "react-native";

import Overlay from "../Overlay";

const Post = forwardRef(({ item }, parentRef) => {
  const ref = useRef(null);

  useImperativeHandle(parentRef, () => ({
    play,
    unload,
    stop,
  }));

  useEffect(() => {
    return () => unload();
  }, []);

  const play = async () => {
    if (ref.current === null) return;

    const status = await ref.current.getStatusAsync();

    if (status?.isPlaying) return;

    try {
      await ref.current.playAsync();
    } catch (error) {
      console.log(error);
    }
  };

  const stop = async () => {
    if (ref.current === null) return;

    const status = await ref.current.getStatusAsync();

    if (!status?.isPlaying) return;

    try {
      await ref.current.stopAsync();
    } catch (error) {
      console.log(error);
    }
  };

  const unload = async () => {
    if (ref.current === null) return;

    try {
      await ref.current.unloadAsync();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Overlay
        displayName={item.user.name}
        description={item.description}
      ></Overlay>

      <Video
        ref={ref}
        style={{ flex: 1 }}
        source={{ uri: item.url }}
        isLooping
        usePoster
        resizeMode={Video.RESIZE_MODE_COVER}
        shouldPlay={true}
        posterStyle={{ resizeMode: "cover", height: "100%" }}
      />
    </>
  );
});

export default Post;
