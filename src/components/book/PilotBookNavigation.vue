<template>

  <div>
    <button type="button" class="btn btn-secondary mb-5" v-on:click="close">Back</button>
  </div>

  <nav>
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">{{type}} - Book</button>
      <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Analytics</button>
      <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Scan</button>
    </div>
  </nav>

  <div class="tab-content" id="nav-tabContent">
    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><PilotBookList :book="book" :type="type"/></div>
    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"><PilotBookUpload :type="type"/></div>
  </div>

</template>

<script lang="ts">
import {defineComponent, type PropType} from "vue";
import type PilotBookRow from "@/types/PilotBookRow";
import Icons from "../../enums/Icons";
import PilotBookList from "@/components/book/navigation/PilotBookList.vue";
import PilotBookUpload from "@/components/book/navigation/PilotBookUpload.vue";


export default defineComponent({
  name: "PilotBookNavigation",
  components: {PilotBookUpload, PilotBookList},
  computed: {
    Icons() {
      return Icons
    }
  },

  props: {
    book: {
      required: true,
      type: Array as PropType<PilotBookRow[]>
    },
    type: {
      required: true,
      type: String
    }
  },

  methods: {
    close() {
      this.$emit('close')
    }
  }
})

</script>


