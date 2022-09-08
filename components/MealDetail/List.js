import { View, Text, StyleSheet } from "react-native";

const List = ({ data }) => {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.ListItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
};
export default List;

const styles = StyleSheet.create({
  ListItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
