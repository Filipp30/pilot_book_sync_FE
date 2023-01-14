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

    <PilotBookNavigation
        :book="data"
        :type="bookTypeActive"
        v-if="bookTypeActive != null"
        @close="bookTypeActive = null"
    />
  </div>
</template>

<script lang="ts">
import {usePilotBook} from "@/hooks/usePilotBook";
import PilotBookCard from "@/components/book/PilotBookCard.vue";
import Loading from "@/components/all/Loading.vue";
import {defineComponent} from "vue";
import PilotBookNavigation from "@/components/book/PilotBookNavigation.vue";

export default defineComponent({
  name: "BookPage",
  components: {PilotBookNavigation, Loading, PilotBookCard},

  setup() {
    const {data, isLoading, bookTypeActive, request} = usePilotBook()
    const getBook = (type: string) => request(type);

    return {data, isLoading, getBook, bookTypeActive}
  },
})
</script>

<style lang="scss" scoped>

</style>