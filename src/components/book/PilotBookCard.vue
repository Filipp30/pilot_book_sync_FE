<template>
    <div class="card" style="width: 9rem">
      <img class="card-img-top p-3" v-bind:src="Icons.BOOK_SOLID" alt="book-solid">
      <div class="card-body">
        <h5 class="card-title">{{title}} - book</h5>
      </div>
    </div>
</template>

<script lang="ts">
import Icons from "../../enums/Icons";
import {defineComponent} from "vue";

export default defineComponent({
  name: "PilotBookCard",
  computed: {
    Icons() {
      return Icons
    }
  },

  props: {
    title: {
      required: true,
      type: String
    }
  }

})
</script>