<modal name="area_modal"
:width="1000"
:height="500"
:scrollable=true
@before-open="getPref"
>
    <div class="areaWrapper">
<!--ローディング-->
        <div class="spininng_back" v-if="is_show_spinner == 1">
            <b-spinner label="Spinning" type="grow">
            </b-spinner>
        </div>

        <div class="pref_area">
            <li v-for="(pref) in prefs" style="display:inline-block;">
                <label class="pref_label" :for="`pref_${pref.prefCode}`">
                <input type="checkbox"
                    :id = "`pref_${pref.prefCode}`"
                    v-model="selected_prefs[target_index]"
                    :value="pref.prefCode"
                >
                {{pref.prefName}}
                </label>
            </li>
            <b-button variant="outline-primary" @click="selectPref()">選択</b-button>
            <b-button variant="outline-primary" @click="">市区</b-button>
        </div>
    </div>
</modal>
