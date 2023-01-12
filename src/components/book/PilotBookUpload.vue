<template>
  <form @submit.prevent="submit">
    <div class="container d-flex flex-column">
      <label for="formFileSm" class="form-label mt-3">Upload pilot book image or pdf.</label>
      <input
          @change="onUpload"
          type="file"
          ref="file"
          accept="image/pdf"
          class="form-control form-control-sm"
          id="file"
          required
      >

      <div v-if="validationMessages.length > 0" v-for="err in validationMessages" class="col-sm-4">
        <small class="text-danger">
          {{err}}
        </small>
      </div>

      <img v-if="src" id="frame" :src="src" class="img-fluid mt-2" style="width: 100px; height: 100px;"  alt="preview"/>
      <div class="row align-items-center" style="width: 200px">
        <div class="col">
          <button v-bind:class="{ disabled: isLoading}" type="submit" class="btn btn-secondary mt-2" style="width: 100px">process</button>
        </div>
        <div class="col">
          <Loading v-if="isLoading"/>
        </div>
      </div>

      <div class="card mt-5">
        <pre>{{validationMessages}}</pre>
        <pre>{{responseData}}</pre>
      </div>


    </div>
  </form>
</template>

<script lang="ts">
import {usePilotBookAdd} from "@/hooks/usePilotBookAdd";
import {defineComponent, ref} from "vue";
import Loading from "@/components/Loading.vue";

export default defineComponent({
  name: "PilotBookUpload",
  components: {Loading},

  props: {
    type: {
      required: true,
      type: String
    }
  },

  setup(props) {
    const {isLoading, type, src, validationMessages, responseData, onUpload, request} = usePilotBookAdd()

    type.value = props.type

    const submit = () => request()

    return {isLoading, src, validationMessages, responseData, onUpload, submit}
  }
})
</script>
