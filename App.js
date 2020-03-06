import React, { useState } from "react";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { Root } from "native-base";
import { DrawerNavigation } from "./navigation/DrawerNavigation";
export default function App(props) {
  const [loading, setLoading] = useState(true);

  const appLoadingErrorHandler = err => {
    console.error(err);
  };

  const appLoadedHandler = () => {
    setLoading(false);
  };

  const loadAssets = async () => {
    return Promise.all([
      Font.loadAsync({
        Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
        Roboto_medium: require("./assets/fonts/Roboto-Light.ttf")
      })
    ]);
  };

  if (loading && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadAssets}
        onError={appLoadingErrorHandler}
        onFinish={appLoadedHandler}
      />
    );
  }
  return (
    <Root>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </Root>
  );
}
