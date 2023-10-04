import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import Config from "react-native-config";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Splash from "./src/screens/auth/Splash";
import SignUp from "./src/screens/auth/Signup";


const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: Config.GOOGLE_WEB_CLIENT_ID,
      offlineAccess: true, 
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID,
    });
  }, [])
  return (
    <SafeAreaView>
      <SignUp/>
    </SafeAreaView>
  )
}

export default App