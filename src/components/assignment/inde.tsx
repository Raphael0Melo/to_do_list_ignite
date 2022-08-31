import { View, Image, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

import Check from "../../assets/check.png";
import Check2 from "../../assets/check2.png";
import Trash from "../../assets/trash.png";

type Props = {
  name: String;
  done: boolean;
  onRemove: () => void;
  onToggleDone: () => void;
};

export function Assignment({ name, onRemove, done, onToggleDone }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggleDone}>
        {done === false ? <Image source={Check} /> : <Image source={Check2} />}
      </TouchableOpacity>
      <Text style={done === false ? styles.text : styles.textDone}>{name}</Text>

      <TouchableOpacity onPress={onRemove}>
        <Image source={Trash} />
      </TouchableOpacity>
    </View>
  );
}
