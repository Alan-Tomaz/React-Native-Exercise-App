import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    columnGap: 30,
    margin: 8,
    borderRadius: 10,
    elevation: 2,
    marginLeft: 20,
    marginRight: 20,
  },
  actionContent: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    flex: 1,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 8,
  },
  title: { fontSize: 18, fontWeight: "bold", marginTop: 8 },
  subtitle: { color: "#666" },
});

export default styles;
