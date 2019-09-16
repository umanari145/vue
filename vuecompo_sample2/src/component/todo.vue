<template>
    <div>
        <ul>
            <li v-for="task in tasks" :key="task.id">
                <input type="checkbox"  :checked="task.done"
                @change="toggleTaskStatus(task)" >
                {{task.name}}
                <span v-for="id in task.labelIds" :key="id">
                    {{getLaralbelText(id)}}
                </span>
            </li>
        </ul>
        <div>
            <input type="text" v-model="newTaskname">
        </div>
        <div>
            <input type="button" @click="addTask" value="追加">
        </div>


        <h2>ラベル一覧</h2>
        <ul>
            <li v-for="label in labels" :key="label.id">
                <input type="checkbox" :value="label.id" v-model="newTaskLabelIds">
                {{label.text}}
            </li>
        </ul>
        <div>
            <input type="text" v-model="newLabelText">
        </div>
        <div>
            <input type="button" @click="addLabel" value="追加">
        </div>


    </div>
</template>

<script>
    export default {
        computed:{
            tasks() {
                return this.$store.state.tasks
            },
            labels() {
                return this.$store.state.labels
            }
        },
        data(){
            return {
                newTaskname:'',
                newTaskLabelIds:[],
                newLabelText:''
            }
        },
        methods:{
            addTask() {
                this.$store.commit('addTask', {
                    name:this.newTaskname,
                    labelIds:this.newTaskLabelIds
                })
                this.newTaskname = ''
                this.newTaskLabelIds = []
            },
            addLabel() {
                this.$store.commit('addLabel', {text:this.newLabelText})
                this.newLabelText = ''
            },
            toggleTaskStatus(task) {
                this.$store.commit('toggleTaskStatus',task.id)
            },
            getLaralbelText(id) {
                const label = this.labels.filter(label => label.id === id)[0]
                return label? label.text :''
            }
        }
    }
</script>
