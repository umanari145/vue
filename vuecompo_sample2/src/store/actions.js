export const actions = {
    save({state}) {
        const data = {
            tasks:state.tasks,
            labels:state.labels,
            nextTaskId:state.nextTaskId,
            nextLabelId:state.nextLabelId
        }
        localStorage.setItem('task-app-data', JSON.stringify(data))
    },
    restore({commit}) {
        const data = localStorage.getItem('task-app-data')
        if (data) {
            commit('restore', JSON.parse(data))
        }
    }
}
