import request from "../utils/request";
import {IPagination} from "@/types/pagination";


const Api = {
    customer: 'Customer/list'
}

interface ICustomerTableApi extends IPagination {
    name?: string,
    download_states?: number,
    states?: number,
}

export function CustomerTableApi(params: ICustomerTableApi) {
    return request.get(Api.customer, {params})
}