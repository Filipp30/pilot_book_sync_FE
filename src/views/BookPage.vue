<template>
  <div class="container">

      <PilotBookListView :book="data"/>

    <button class="btn btn-secondary" v-on:click="getBook">Fetch book</button>
  </div>

</template>

<script lang="ts">
import PilotBookComponent from "@/components/PilotBookListView.vue";
import {usePilotBook} from "@/hooks/usePilotBook";
import BookType from "@/enums/BookTypes";
import PilotBookListView from "@/components/PilotBookListView.vue";

export default {
  name: "BookPage",
  components: {PilotBookListView, PilotBookComponent},

  setup() {
    const {data, isLoading, request} = usePilotBook()

    const getBook = () => {
      request(BookType.ULM);
    }

    return {data, isLoading, getBook}
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 500px;
  margin: 20px auto;
}
</style>