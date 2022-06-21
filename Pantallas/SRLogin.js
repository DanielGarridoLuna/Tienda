import React from 'react';
import {useState} from 'react';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';


export default function App() {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        },
        Sec:{
          textAlign: 'center', // <-- the magic
          fontWeight: 'bold',
        },
        Boton: {
            margin: 10,
            minWidth: "80%",
            textAlign: "center",
          },
      });
      

    const [state, setstate]=useState({
          usuario:'',
          pass:'',
          
    })

    const capturar =(atrib,valor) =>{
    setstate({...state,[atrib]:valor})
    console.log(state)
    }

 
    function verificar(){
        const email = state.usuario
        const password= state.pass
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        alert("Entramos")
        })
        .catch((error) => {
        alert('Error al iniciar sesión' + error)
        });


    }
    




  return (
    <View style={styles.container}>
    <Text>Login</Text>
    <TextInput
        style={styles.input}
        placeholder="Usuario"
        onChangeText={(value)=>capturar('usuario',value)}
      />
    <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        onChangeText={(value)=>capturar('pass',value)}
      />

   
    
    <View  style={styles.Boton}>
      <Button
        title="Entrar con Correo"
        color="#00FFAB"
        onPress={()=>verificar()}
      />
    </View>

    <View  style={styles.Boton}>
      <Button
        title="Entrar con Google"
        color="#0055AB"
        onPress={()=>verificarGoogle()}
      />
    </View>

    
    </View>
  )
}