<modal name="area_modal"
:width="1000"
:height="500"
:scrollable=true
@before-open="getPref"
>
<!--ローディング-->
<div class="spininng_back" v-if="is_show_spinner == 1">
    <b-spinner label="Spinning" type="grow">
    </b-spinner>
</div>
</modal>
