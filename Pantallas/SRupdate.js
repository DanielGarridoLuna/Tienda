import React from 'react';
import {useState} from 'react'
import { Text, ScrollView, Button, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { db } from '../Server/conexion';
import { collection, getDocs,  doc, getDoc } from "firebase/firestore";


const SRupdate = () => {

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
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
          },
        
      });

  const [articulos, setarticulos] = useState([])
  const [stateprod, setstate]=useState({
    producto:'',
    precio:0,
    existencia:0,
  })

  async function leer(){
    const querySnapshot = await getDocs(collection(db, "Productos"));
    const articulos=[];
        querySnapshot.forEach((doc) => {
          const {Producto, Precio, Existencia}=doc.data()

          articulos.push({
            id:doc.id,
            Producto,
            Precio,
            Existencia
          })
  })
          console.log(articulos) 
          setarticulos(articulos)
  }

  async function recuperar(iden){
    const docRef = doc(db, "Productos", iden);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const txtproducto = docSnap.data().Producto;
      const txtprecio = docSnap.data().Precio;
      const txtexi = docSnap.data().Existencia;

      setstate({...stateprod,['producto']:txtproducto, ['precio']:txtprecio, ['existencia']:txtexi})
    } else {
      alert('Codigo Invalido')
    }
  }

    return (
        <ScrollView style={styles.Sec}>
          <Text  style={styles.Titulo} >Actualizar Articulos </Text>
          <View>
          
    <TextInput

        style={styles.input}
        placeholder="Producto"
        value={stateprod.producto}
       
      />
    <TextInput
        style={styles.input}
        placeholder="Precio"
        value={stateprod.precio}
  
      />
    <TextInput
        style={styles.input}
        placeholder="Existencia"
        value={stateprod.existencia}
      
      />
          </View>
          <Button title="Leer" onPress={() =>leer()}>Leer Productos</Button>
          {
            articulos.map(articulo=>{
                return(
                    <TouchableOpacity  
                    key={articulo.id}
                    onPress={() => recuperar(articulo.id)}
                    >
                    <View style={styles.container} >
                    <Text style={styles.Titulo}>{articulo.Producto}</Text>
                    <Text style={styles.Subtitulo}>{articulo.id}</Text>
                    </View>
                    </TouchableOpacity>
                    
                );
            })
          }
        </ScrollView>
      )
}

export default SRupdate


