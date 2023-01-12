import {ref} from "vue";
import {useStore} from "vuex";
import axios from "axios";
import ApiEndpoints from "@/enums/ApiEndpoints";

export function usePilotBookAdd() {
    const store = useStore();

    const isLoading = ref(false);
    const type = ref<string>();
    const file = ref<File|null>(null);
    const src = ref();
    const validationMessages = ref<Array<string>>([]);
    const responseData = ref();

    function onUpload(event: any) {
        validationMessages.value = [];
        file.value = event.target.files[0] as File;
        src.value = URL.createObjectURL(file.value);
    }

    const request = async (): Promise<void> => {
        isLoading.value = true;

        const data = new FormData();
        data.append('type', type.value as string);
        if (file.value instanceof File) {
            data.append('file', file.value as File);
        }

        await axios.post(ApiEndpoints.POST_BOOK_ADD, data, store.getters.getApiHeader
        ).then((response) => {
            responseData.value = response.data;
        }).catch((error) => {
            validationMessages.value = [];

            if (error.response.data.errors.file?.length > 0) {
                error.response.data.errors.file.forEach((err: string) => {
                    validationMessages.value.push(err)
                })
            }
        }).finally(() => {
            isLoading.value = false
        })
    }

    return {isLoading, type, src, validationMessages, responseData, onUpload, request}
}