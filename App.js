
import { StyleSheet, View, Text } from 'react-native';
import iconSet from '@expo/vector-icons/build/Fontisto';
import Textfield from './Components/TextField';
import Doctorbox from './Components/Doctorbox';

export default function App() {

  return (
    <View style={styles.container}>
      <Textfield></Textfield>
      <Text style={styles.text} >Let's find your doctor</Text>

      <View style={styles.top}>
        <Doctorbox name="Dr. John Smith" work="Dermatologist" rate_number="4.9" />
        <Doctorbox name="Dr. Anna Dinn" work="Phsychologist" rate_number="4.9" />
      </View>

      <View style={styles.bottom}>
        <Doctorbox name="Dr. Angela Rayez" work="Therapist" rate_number="4.8" />
        <Doctorbox name="Dr. Chris Bronte" work="Dentist" rate_number="5.0" />

      </View>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5EFFF",

  },


  text: {
    fontSize: 17,
    color: "black",
    marginLeft: 13,
    marginTop: 26,
    marginBottom: 15,

  },
  top: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    marginBottom: 22,
  },
  bottom: {
    display: "flex",
    gap: 5,
    flexDirection: "row",
  },
});
