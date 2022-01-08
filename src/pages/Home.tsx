import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';


export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle != ''){
      //TODO - add new task
    const data:Task = {
      id: new Date().getTime(),
      title:newTaskTitle,
      done: false
    }
      setTasks(oldTasks => [data, ...oldTasks])
    }
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    const taskUpdated:Task = tasks.find((task) => task.id === id)
    if(taskUpdated.done === true) {
      const data:Task = {
        id:taskUpdated.id,
        title:taskUpdated.title,
        done:false
      }
      const oldT:Task[] = tasks.filter((task) => task.id != id)
      setTasks([...oldT, data])
    }else{
      const data:Task = {
        id:taskUpdated.id,
        title:taskUpdated.title,
        done:true
      }
      const oldT:Task[] = tasks.filter((task) => task.id != id)
      setTasks([...oldT, data])
    }
    
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(oldTasks => oldTasks.filter(t => t.id !== id))
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})