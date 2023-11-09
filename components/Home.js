import { useContext } from 'react';
import { View, Text, Button, Pressable, StyleSheet} from 'react-native';
import { ContactContext } from '../context/ContactContext';
// import { useNavigation } from '@react-navigation/native';

const Home = ({ navigation }) => {
  const { contact } = useContext(ContactContext);
  function presion(){
    navigation.navigate("Formulario")
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Contactos:</Text>
      {contact.map((contact, index) => (
        <View style={styles.card} key={index}>
          <Text style={styles.number}>{index+1}.</Text>
          <Text style={styles.text}>{contact?.name}</Text>
          <Text style={styles.text}>{contact?.email}</Text>
          <Text style={styles.text}>{contact?.phone}</Text>
        </View>
      ))}
      <Button style={styles.button} title="Agregar Contacto" onPress={presion}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
  },
  
  card:{
    padding: 30,
    borderBottomColor: "black",
    borderTopWidth: 2
  },
  title:{
    marginTop: 20,
    marginBottom: 20,
    alignSelf:'center',
    fontSize: 30,
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  number:{
    fontSize: 25
  },
  text:{
    fontSize: 20
  },
  button:{
    marginTop:20
  }
});

export default Home;