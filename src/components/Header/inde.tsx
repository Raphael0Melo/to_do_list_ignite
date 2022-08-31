import { Image, View } from 'react-native'
import { styles } from "./styles";

import Logo from "../../assets/Logo.png"



export function Header() {
  return (
    <View style={styles.container}>
      <Image source={Logo}/>
    </View>
  )
}