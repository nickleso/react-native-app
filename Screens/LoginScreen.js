import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <Text style={styles.title}>Sign in</Text>
          <TextInput style={styles.input} placeholder="Email" maxLength={30} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            maxLength={30}
          />
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonTitle}>Sign in</Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>Don't have an account? Register</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: 263,
    // height: 489,
    paddingTop: 32,
    paddingBottom: 144,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  form: {
    // flex: 1,
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginBottom: 32,
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
  },
  input: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    fontFamily: "Roboto",
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  button: {
    marginTop: 43,
    padding: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  buttonTitle: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  subtitle: {
    textAlign: "center",
    marginTop: 16,
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
