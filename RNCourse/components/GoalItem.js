import { View, Text, StyleSheet, Pressable } from "react-native";
const GoalItem = ({ onDeleteGoal, goal, id }) => {
  const handlePress = () => {
    onDeleteGoal(id);
  };
  return (
    <View style={styles.goalListItem}>
      <Pressable onPress={handlePress} android_ripple={{ color: "grey" }}>
        <Text style={styles.goalText}>{goal}</Text>
      </Pressable>
    </View>
  );
};
export default GoalItem;

const styles = StyleSheet.create({
  goalListItem: {
    margin: 8,
    backgroundColor: "purple",
    borderRadius: 5,
    borderWidth: 1,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
