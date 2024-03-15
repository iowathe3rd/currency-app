import {Endpoints} from "./endpoints.ts";

export function buildRequestUrl(endpoint: Endpoints, params: Record<string, string | number>): string {
    const queryParams = new URLSearchParams(); // Создаем новый объект URLSearchParams
    for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
            queryParams.append(key, String(params[key])); // Преобразуем значения к строке и добавляем параметры к объекту URLSearchParams
        }
    }
     // Составляем полный URL запроса
    return `${endpoint}?${queryParams.toString()}`;
}
