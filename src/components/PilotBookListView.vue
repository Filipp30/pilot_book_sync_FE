<template>
  <h1>ULM BOOK</h1>
  <ul class="list-group">
    <li v-for="row in book" class="list-group-item" :class="[row.errors.length > 0 ? 'list-group-item-danger' : '']">

      <h5>{{row.date}} </h5>

      <p>
        <img class="icon" src="src/assets/icons/plane-departure-solid.svg" alt="departure-solid">
        {{row.departurePlace}} {{row.departureTime}}
        <img class="icon" src="src/assets/icons/plane-arrival-solid.svg" alt="arrival-solid">
        {{row.arrivalPlace}} {{row.arrivalTime}}
      </p>

      <p>
        <img class="icon" src="src/assets/icons/plane-solid.svg" alt="aircraft-solid">
        {{row.aircraftModel}} location: {{row.aircraftRegistration}}
      </p>

      <div v-if="row.errors.length > 0">
        <p v-for="error in row.errors">
          <img class="icon" src="src/assets/icons/circle-exclamation-solid.svg" alt="circle-exclamation-solid">
          {{error.message}}
        </p>

      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import {defineComponent, type PropType} from "vue";
import type PilotBookRow from "@/types/PilotBookRow";

export default defineComponent({
  name: "PilotBookListView",
  props: {
    book: {
      required: true,
      type: Array as PropType<PilotBookRow[]>
    }
  }
})
</script>

<style lang="scss" scoped>
.icon {
  height: 20px;
  width: 20px;
}
</style>

