import { StyleSheet, View, FlatList, Button } from "react-native";
import React, { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModelVisible, setIsModelVisible] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
  };
  const deleteGoalHandler = (goalId) => {
    const newGoals = courseGoals.filter((goal) => goal.id !== goalId);
    setCourseGoals(newGoals);
  };

  const renderGoalItem = ({ item }) => {
    return <GoalItem goal={item.text}  onDeleteGoal={deleteGoalHandler} id={item.id}/>;
  };

  const renderKey = (item) => {
    return item.id.toString();
  };

  return (
    <View style={styles.container}>
      <Button title="Add New Goal"  onPress={()=> setIsModelVisible(true)}/>
      <GoalInput addGoalHandler={addGoalHandler}  isModelVisible={isModelVisible}/>
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={renderGoalItem}
          keyExtractor={renderKey}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  goalContainer: {
    flex: 5,
    width: "100%",
  },
});
