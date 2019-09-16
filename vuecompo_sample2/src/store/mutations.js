export const mutations = {
  addTask (state, {name, labelIds}) {
      state.tasks.push(
          {
              id:state.nextTaskId,
              name:name,
              labelIds:labelIds,
              done:false
          }
      )
      state.nextTaskId++
  },
  toggleTaskStatus(state, id) {
      const filtered = state.tasks.filter(task => {
          return task.id === id
      })

      filtered.forEach(task => {
          task.done = !task.done
      })
  },
  addLabel(state, {text}) {
      state.labels.push({
          id:state.nextLabelId,
          text:text
      })
      state.nextLabelId++
  },
  changeFilter(state, {filter}) {
      state.filter = filter
  },
  restore(state, {tasks, labels, nextTaskId, nextLabelId}) {
      state.tasks = tasks
      state.labels = labels
      state.nextTaskId = nextTaskId
      state.nextLabelId = nextLabelId
  }
};
