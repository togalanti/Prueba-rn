import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { ContactContext } from '../context/ContactContext';

const ContactForm = () => {
  const { contact } = useContext(ContactContext);
  const { setContact } = useContext(ContactContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddContact = () => {
    const newContact = { name, email, phone };
    setContact([...contact, newContact]);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de Teléfono"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <Button title="Agregar Contacto" onPress={handleAddContact} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default ContactForm;