import React from 'react';
import {useState} from 'react'
import { Text, ScrollView, Button, View, StyleSheet, TouchableOpacity } from 'react-native';
import { db } from '../Server/conexion';
import { collection, getDocs } from "firebase/firestore";


const SRread = () => {

    const styles = StyleSheet.create({
        container: {
          margin: 10,
          backgroundColor: '#7AFF0D',
        },
        Titulo: {
          fontWeight: 'bold',
          fontSize: 30,
          
        },
        Subtitulo:{
            fontSize: 25,
        },
        Sec:{
          textAlign: 'center', // <-- the magic
          fontWeight: 'bold',
        },
        
      });

  const [articulos, setarticulos] = useState([])

  async function leer(){
    const querySnapshot = await getDocs(collection(db, "Productos"));
    const articulos=[];
        querySnapshot.forEach((doc) => {
          const {Producto, Precio}=doc.data()

          articulos.push({
            id:doc.id,
            Producto,
            Precio
          })
  })
          console.log(articulos) 
          setarticulos(articulos)
  }


    return (
        <ScrollView style={styles.Sec}>
          <Text  style={styles.Titulo} >Leer información</Text>
          <Button title="Leer" onPress={() =>leer()}>Leer Productos</Button>
          {
            articulos.map(articulo=>{
                return(
                    <TouchableOpacity
                    key={articulo.id}
                    >
                    <View style={styles.container} >
                    <Text style={styles.Titulo}>{articulo.Producto}</Text>
                    <Text style={styles.Subtitulo}>${articulo.Precio}</Text>
                    </View>
                    </TouchableOpacity>
                    
                );
            })
          }
        </ScrollView>
      )
}

export default SRread


