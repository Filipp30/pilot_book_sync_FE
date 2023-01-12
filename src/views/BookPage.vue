<template>

  <div class="container mt-5">
    <div class="row g-5" v-if="bookTypeActive == null">
      <div class="col-lg-6  col-md-4">
        <PilotBookCard title="ULM" v-on:click="getBook('ULM')"/>
      </div>
    </div>

    <div class="text-center" v-if="isLoading">
      <Loading/>
    </div>

    <PilotBookListView
        :book="data"
        :type="bookTypeActive"
        v-if="bookTypeActive != null"
        @close="bookTypeActive = null"
    />
  </div>
</template>

<script lang="ts">
import PilotBookComponent from "@/components/book/PilotBookOverview.vue";
import {usePilotBook} from "@/hooks/usePilotBook";
import PilotBookListView from "@/components/book/PilotBookOverview.vue";
import PilotBookCard from "@/components/book/PilotBookCard.vue";
import Loading from "@/components/Loading.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "BookPage",
  components: {Loading, PilotBookCard, PilotBookListView, PilotBookComponent},

  setup() {
    const {data, isLoading, bookTypeActive, request} = usePilotBook()
    const getBook = (type: string) => request(type);

    return {data, isLoading, getBook, bookTypeActive}
  },
})
</script>

<style lang="scss" scoped>

</style>