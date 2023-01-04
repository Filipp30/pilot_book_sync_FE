import {ref} from "vue";
import axios from "axios";
import type PilotBookRow from "@/types/PilotBookRow";
import ApiEndpoints from "@/enums/ApiEndpoints";

export function usePilotBook() {
    const data = ref<PilotBookRow[]>([]);
    const isLoading = ref(false);

    const request = async (type: string): Promise<void> => {
        const config = {
            headers: {
                Authorization: 'Bearer 1|VKmLX3BG2O1ZUtoxdocVKo3jXf11nM7xvbFoIjep',
                Accept: 'application/json'
            }
        }

        isLoading.value = true;

        await axios.get(ApiEndpoints.GET_ULM_BOOK, config)
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

        }).catch((error) => {
            console.log('error')
            console.log(error)
        }).finally(() => {
            isLoading.value = false
        })
    }

    return {data, isLoading, request}
}