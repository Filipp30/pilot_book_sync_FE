import {ref} from "vue";
import axios from "axios";
import type PilotBookRow from "@/types/PilotBookRow";
import ApiEndpoints from "@/enums/ApiEndpoints";
import {useStore} from "vuex";

export function usePilotBook() {
    const store = useStore();

    const data = ref<PilotBookRow[]>([]);
    const isLoading = ref(false);
    const bookTypeActive = ref<string|null>(null);

    const request = async (type: string): Promise<void> => {
        isLoading.value = true;

        await axios.get(ApiEndpoints.GET_ULM_BOOK, store.getters.getApiHeader)
        .then((response) => {
            data.value = response.data.data.map((row: any): PilotBookRow => {
                return {
                    id: row.id,
                    text: row.text,
                    date: row.date,
                    departurePlace: row.departurePlace,
                    departureTime: row.departureTime,
                    arrivalPlace: row.arrivalPlace,
                    arrivalTime: row.arrivalTime,
                    aircraftModel: row.aircraftModel,
                    aircraftRegistration: row.aircraftRegistration,
                    errors: row.errors
                }
            })

            bookTypeActive.value = type;

        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            isLoading.value = false
        })
    }

    return {data, isLoading, bookTypeActive, request}
}