import React from 'react';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';

import AnimatedSplashScreen from './AnimatedSplashScreen';

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHideAsync()
  .catch(() => { /* reloading the app might trigger some race conditions, ignore them */ });

export default function AnimatedAppLoader(props) {
  const [isSplashReady, setSplashReady] = React.useState(false);

  const startAsync = React.useMemo(
    // If you use a local image with require(...), use `Asset.fromModule`
    () => () => Asset.fromURI(require("../assets/splash.png")).downloadAsync(),
    [require("../assets/splash.png")]
  );

  const onFinish = React.useMemo(() => setSplashReady(true), []);

  if (!isSplashReady) {
    return (
      <AppLoading
        // Instruct SplashScreen not to hide yet, we want to do this manually
        autoHideSplash={false}
        startAsync={startAsync}
        onError={console.error}
        onFinish={onFinish}
      />
    );
  }

  return <AnimatedSplashScreen image={require("../assets/splash.png")}>{props.children}</AnimatedSplashScreen>;
}
