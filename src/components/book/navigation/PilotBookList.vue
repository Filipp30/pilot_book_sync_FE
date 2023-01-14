<template>

  <ul class="list-group mt-3">
    <li
        v-for="row in book"
        class="card list-group-item"
        :class="row.errors.length > 0 ? 'list-group-item-danger' : ''"
        v-on:click="showFull = !showFull"
    >
      <p>
        {{row.date}}
        <img class="icon" v-bind:src="Icons.PLANE_DEPARTURE_SOLID" alt="departure-solid">
        {{row.departurePlace}} {{row.departureTime}}
        <img class="icon" v-bind:src="Icons.PLANE_ARRIVAL_SOLID" alt="arrival-solid">
        {{row.arrivalPlace}} {{row.arrivalTime}}
      </p>

      <p>
        <img class="icon" v-bind:src="Icons.PLANE_SOLID" alt="aircraft-solid">
        {{row.aircraftModel}} location: {{row.aircraftRegistration}}
      </p>

      <div v-if="row.errors.length > 0">
        <p v-for="error in row.errors">
          <img class="icon" v-bind:src="Icons.CIRCLE_EXCLAMATION_SOLID" alt="circle-exclamation-solid">
          {{error}}
        </p>

      </div>
    </li>
  </ul>


</template>

<script lang="ts">
import {defineComponent, type PropType} from "vue";
import type PilotBookRow from "@/types/PilotBookRow";
import Icons from "../../../enums/Icons";

export default defineComponent({
  name: "PilotBookList",
  data(){
    return {
      showFull: false
    }
  },
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
  }
})
</script>

<style lang="scss" scoped>
.card {
  margin: 2px 0 2px 0;
}
</style>