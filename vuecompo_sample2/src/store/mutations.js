export const mutations = {
  addTask (state, name) {
      state.tasks.push(
          {
              id:state.nextTaskId,
              name:name,
              done:false
          }
      )
      state.nextTaskId++
  },
};
