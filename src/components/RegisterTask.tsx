import { useState } from "react"
import { Button, StyleSheet, TextInput, View } from "react-native"
import { useGlobalState } from "../hooks/GlobalState"
import { Input, IconButton } from "native-base"
import { Ionicons } from "@expo/vector-icons"

export default function RegisterTask() {
    const {addTask} = useGlobalState()
    
    const [task, setTask] = useState('')

    function handleAddTask() {
        if (task.trim() !== '') {
            addTask(task)
        }

        setTask('')
    }

    return (
        <View style={{ backgroundColor: '#121214', paddingVertical: 20, paddingHorizontal: 20, paddingTop: 50 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Input
              placeholder="Digite uma tarefa"
              placeholderTextColor="white"
              value={task}
              onChangeText={setTask}
              fontSize={14}
              color="#FFF"
            />
          </View>
          <IconButton
            icon={<Ionicons name="add" size={24} color="#FFF" />}
            colorScheme="light"
            onPress={handleAddTask}
            style={{ borderRadius: 50, backgroundColor: '#16A34A' }}
          />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    containerInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        padding: 15,
    },

    input: {
        width: '70%',
        borderBottomColor: '#008170',
        borderBottomWidth: 1,
        padding: 10,
        color: '#FFF'
    },

    button: {
        color: '#1B1A55'
    }
})