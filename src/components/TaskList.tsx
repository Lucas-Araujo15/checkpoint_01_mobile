import { useGlobalState } from "../hooks/GlobalState"
import { useState } from "react"
import { Box, FlatList, IconButton, Input, Text } from "native-base"
import { Ionicons } from "@expo/vector-icons"

interface TaskItemProps {
    id: number
    title: string
}


function TaskItem({ id, title }: TaskItemProps) {
    const { updateTask, deleteTask } = useGlobalState()

    const [updating, setUpdating] = useState(false)

    const [newTitle, setNewTitle] = useState(title)

    function handleUpdate() {
        if (updating) {
            updateTask(id, newTitle)
        }
        setUpdating(!updating)
    }

    return (
        <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            bg="gray.200"
            p={4}
            my={2}
            mx={2}
        >
            {updating ? (
                <Input
                    flex={3}
                    value={newTitle}
                    onChangeText={setNewTitle}
                />
            ) : (
                <Text flex={3}>{title}</Text>
            )}
            <IconButton
                icon={<Ionicons name={updating ? "checkmark" : "pencil"} size={14} color="#402291" />}
                colorScheme="light"
                onPress={handleUpdate}
                style={{ borderRadius: 50, backgroundColor: 'gold', marginLeft: 4 }}
            />
            <IconButton
                icon={<Ionicons name="trash" size={14} color="#402291" />}
                colorScheme="light"
                onPress={() => deleteTask(id)}
                style={{ borderRadius: 50, backgroundColor: 'red', marginLeft: 4 }}
            />
        </Box>
    )
}

export default function TaskList() {
    const {tasks} = useGlobalState()

    return (
        <FlatList
          data={tasks} 
          renderItem={({ item }) => <TaskItem id={item.id} title={item.title} />} 
          keyExtractor={(item) => item.id.toString()} 
          contentContainerStyle={{ flexGrow: 1 }}
        />
      );
}