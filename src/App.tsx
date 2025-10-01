import * as React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigator";
import Toast from "react-native-toast-message";
import { toastConfig } from "./helpers/toastConfig";
import { Provider } from "react-redux";
import { UserProvider } from "./context/user/userProvider";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserProvider>
          <NavigationContainer>
            <RootNavigator />
            <Toast config={toastConfig} />
          </NavigationContainer>
        </UserProvider>
      </ThemeProvider>
    </Provider>
  );
}

// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import RootNavigator from "./navigation/RootNavigator";
// import Toast from "react-native-toast-message";
// import { toastConfig } from "./helpers/toastConfig";
// import { UserProvider } from "./context/user/userProvider";

// const App = () => {
//   return (
//     <UserProvider>
//       <NavigationContainer>
//         <RootNavigator />
//         <Toast config={toastConfig} />
//       </NavigationContainer>
//     </UserProvider>
//   );
// };
// export default App;
