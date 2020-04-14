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
        <b-tabs
        content-class="mt-2"
        >
        <b-tab title="都道府県"
        :active="is_pref_active"
        :disabled="is_pref_disabled">
            <div class="pref_area">
                <li v-for="(pref) in prefs" style="display:inline-block;">
                    <label class="pref_label" :for="`pref_${pref.prefCode}`">
                    <input type="checkbox"
                        :id = "`pref_${pref.prefCode}`"
                        v-model="selected_prefs[target_index]"
                        :value="pref.prefCode"
                        :disabled="disableCheckPref(pref.prefCode)"
                    >
                    {{pref.prefName}}
                    </label>
                </li>
                <b-button variant="outline-primary" @click="selectPref()">選択</b-button>
                <b-button variant="outline-primary" @click="toSelectCity()">市区</b-button>
            </div>
        </b-tab>

        <b-tab title="市区"
        :active="is_city_active"
        :disabled="is_city_disabled"
        >
            <div style="overflow-y:scroll;height:500px;">
                <div class="city_wrapper">
                    <!--市区町村-->
                    <div>市区選択</span>
                    <div v-for="(each_city_list, pref_cd) in cities[target_index]">
                        <div>{{master_pref_hash[pref_cd]}}</div>
                        <li v-for="(each_city) in each_city_list" style="display:inline-block;">
                            <label class="city_label" :for="`city_${each_city.cityCode}`">
                            <input type="checkbox"
                                :id = "`city_${each_city.cityCode}`"
                                :value="each_city.cityCode"
                                v-model="selected_cities[target_index]"
                            >
                            {{each_city.cityName}}
                            </label>
                        </li>
                    </div>
                </div>
            </div>
        </b-tab>
    </div>
</modal>
