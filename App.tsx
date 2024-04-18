import React from "react";
import { NativeBaseProvider, View } from 'native-base';
import RegisterTask from "./src/components/RegisterTask";
import { GlobalStateProvider } from "./src/hooks/GlobalState";
import TaskList from "./src/components/TaskList";

export default function App() {
  return (
    <NativeBaseProvider>
      <GlobalStateProvider>
        <View style={{ flex: 1, backgroundColor: '#202024' }}>
          <RegisterTask />
          <TaskList />
        </View>
      </GlobalStateProvider>
    </NativeBaseProvider>
  );
}