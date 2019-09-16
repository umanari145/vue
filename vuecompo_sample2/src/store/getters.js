export const getters = {
    filteredTasks(state) {
        if (!state.filter) {
            return state.tasks
        }

        return state.tasks.filter(task => {
            return task.labelIds.indexOf(state.filter) >= 0
        })
    }
}
