import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  card: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 8,
    borderRadius: 10,
    elevation: 2,
  },
  image: { width: "100%", height: 200, borderRadius: 8 },
  title: { fontSize: 18, fontWeight: "bold", marginTop: 8 },
  subtitle: { color: "#666" },
});

export default styles;
