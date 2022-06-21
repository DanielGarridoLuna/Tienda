import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SRadd from './Pantallas/SRadd';
import SRread from './Pantallas/SRread';
import SRdelet from './Pantallas/SRdelet';
import SRupdate from './Pantallas/SRupdate';

import SRLogin from './Pantallas/SRLogin';

const styles = StyleSheet.create({
  Boton: {
    margin: 10,
    minWidth: "80%",
    textAlign: "center",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function LoginScreen({ navigation }) {
  return (
    <View  style={styles.Boton}>
      <Button
        title="entrar"
        color="#00FFAB"
        onPress={() => navigation.navigate('Home')}
      />
      </View>
  );
}


function HomeScreen({ navigation }) {
  return (
    <View
    style={styles.container} >
    

      <View  style={styles.Boton}>
      <Button
        title="Agregar Información"
        color="#00FFAB"
        onPress={() => navigation.navigate('Agregar')}
      />
      </View>

      <View   style={styles.Boton}>
      <Button
        title="Leer Información"
        color="#0D8AFF"
        onPress={() => navigation.navigate('Leer')}
      />
      </View>

      
     
      <View style={styles.Boton}>
      <Button
        title="Actualizar Información"
        color="#F2B50C"
        onPress={() => navigation.navigate('Actualizar')}
      />
      </View>

      <View style={styles.Boton}>
      <Button
        title="Borrar Información"
        color="#FF0D28"
        onPress={() => navigation.navigate('Borrar')}
      />
     </View>

     <View style={styles.Boton}>
      <Button
        title="Entrar"
        color="#8D15F5"
        onPress={() => navigation.navigate('Entrar')}
      />
     </View>
    

     


    </View>
  );
}

function ReadScreen({ navigation }) {
  return (
    <SRread/>
  );
}

function AddScreen({ navigation }) {
  return (
    <SRadd/>
  );
}

function UpdateScreen({ navigation }) {
  return (
    <SRupdate/>
  );
}

function DeleteScreen({ navigation }) {
  return (
    <SRdelet/>
  );
}



const Stack = createNativeStackNavigator();

function SRMain() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entrar">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Leer" component={ReadScreen} />
        <Stack.Screen name="Agregar" component={AddScreen} />
        <Stack.Screen name="Borrar" component={DeleteScreen} />
        <Stack.Screen name="Actualizar" component={UpdateScreen} />
        <Stack.Screen name="Entrar" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default SRMain;

