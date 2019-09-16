export const mixin = {
    data(){
        return {
            _isProcessing:false
        }
    },
    methods:{
        share() {
            if (this._isProcessing) {
                return
            }

            if (!window.confirm('シェアしますか')) {
                return
            }

            this._isProcessing = true
            setTimeout(() =>{
                window.alert('シェアしました')
                this._isProcessing = false
            }, 1000)
        }
    }
}
