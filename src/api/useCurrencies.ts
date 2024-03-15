import useSWR from "swr";
import fetcher from "./fetcher.ts";


export interface CurrencyDetails {
    symbol: string;
    name: string;
    symbol_native: string;
    decimal_digits: number;
    rounding: number;
    code: string;
    name_plural: string;
    type: string;
    countries: string[];
}

// Define interface for currency data
export interface CurrencyData {
    [currencyCode: string]: CurrencyDetails;
}

// Define interface for API response
interface CurrencyAPIResponse {
    data?: CurrencyData;
    error?: unknown;
    isLoading: boolean;
}

export default function useCurrencies(type: 'metal' | 'fiat' | 'crypto') {
    const {
        data,
        error,
        isLoading
    } = useSWR<CurrencyAPIResponse>(`https://api.currencyapi.com/v3/currencies?type=${type}`, fetcher)
    return {
        currencies: data?.data,
        error,
        isLoading
    }
}