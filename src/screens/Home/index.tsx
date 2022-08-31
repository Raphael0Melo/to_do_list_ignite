import React, { useState } from "react";
import { styles } from "./styles";
import {
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  Alert,
  TouchableOpacity,
  TextInputProps,
} from "react-native";

import Button from "../../assets/Button.png";
import ClipBoard from "../../assets/Clipboard.png";

import { Header } from "../../components/Header/inde";
import { Assignment } from "../../components/assignment/inde";

export default function Home() {
  const [newAssignment, setNewAssignment] = useState("");
  const [assignments, setAssignments] = useState<Array<Array>>([]);
  const [done, setDone] = useState(0);

  function handleAssignmentsAdd() {
    if (assignments.includes(newAssignment)) {
      return Alert.alert("Tarefa já existe na lista!");
    }

    const data = {
      id: assignments.length + 1,
      name: newAssignment,
      done: false,
    };

    setAssignments((prevState) => [...prevState, data]);
    setNewAssignment("");
  }

  function handleRemoveAssignment(name: String, id: Number, done: Boolean) {
   

    Alert.alert("Remover", `Remover a tarefa ${name}`, [
      {
        text: "Sim",
        onPress: () =>
          setAssignments((prevState) =>
            prevState.filter((assignments) => assignments.id !== id)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
    
    let newDone = [...assignments];
    let data = newDone.filter((item) => item.done === true);
    setDone(data.length);
  }

  function handleToggleDone(id: Number, done: boolean) {
    let newList = [...assignments];

    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = !done;
      }
    }
    setAssignments(newList);

    let newDone = [...assignments];
    let data = newDone.filter((item) => item.done === true);
    setDone(data.length);
  }

  return (
    <>
      <View style={styles.container}>
        <Header />

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#6B6B6B"
            value={newAssignment}
            onChangeText={setNewAssignment}
          />

          <TouchableOpacity onPress={handleAssignmentsAdd}>
            <Image source={Button} style={styles.button} />
          </TouchableOpacity>
        </View>

        <View style={styles.info}>
          <Text style={styles.text1}>Criadas {assignments.length}</Text>
          <Text style={styles.text2}>Concluidas {done}</Text>
        </View>

        <FlatList
          data={assignments}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Assignment
              key={item.id}
              name={item.name}
              done={item.done}
              onRemove={() =>
                handleRemoveAssignment(item.name, item.id, item.done)
              }
              onToggleDone={() => handleToggleDone(item.id, item.done)}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.empty}>
              <Image source={ClipBoard} />
              <Text style={styles.textEmpty}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.textEmpty2}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </>
  );
}
