import React from 'react';
import {useState} from 'react'
import { db } from '../Server/conexion';
import { collection, addDoc } from "firebase/firestore";
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
      });
      

    const [state, setstate]=useState({
          producto:'',
          precio:'',
          existencia:''
    })

    const capturar =(atrib,valor) =>{
    setstate({...state,[atrib]:valor})
    }

    async function agregar(){
      if(state.producto === '' | state.precio === '' | state.existencia === ''){
      alert('Llena todos los datos antes de agregar un producto')
      }else{
        const precio = parseFloat(state.precio)
        const existencia= parseInt(state.existencia)
        await addDoc(collection(db, "Productos"), {
          Producto: state.producto,
          Precio: precio,
          Existencia:existencia
        });
        alert('Se agrego con exito')
      }
   
    }


  return (
    <View style={styles.container}>
    <Text>Agrega información</Text>
    <TextInput
        style={styles.input}
        placeholder="Producto"
        onChangeText={(value)=>capturar('producto',value)}
      />
    <TextInput
        style={styles.input}
        placeholder="Precio"
        onChangeText={(value)=>capturar('precio',value)}
      />
    <TextInput
        style={styles.input}
        placeholder="Existencia"
        onChangeText={(value)=>capturar('existencia',value)}
      />



    <Button title="Agregar" onPress={()=>agregar()}>Agregar</Button>
    </View>
  )
}