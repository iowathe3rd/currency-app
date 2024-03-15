import useSWR from "swr";
import fetcher from "./fetcher.ts";

export interface CurrencyData {
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

export interface CurrencyObject {
    [currencyCode: string]: CurrencyData;
}

export interface CurrencyAPIResponse {
    data: CurrencyObject;
}

export default function useCurrencies (type: 'metal' | 'fiat' | 'crypto') {
    const { data, error, isLoading } = useSWR<CurrencyAPIResponse>(`https://api.currencyapi.com/v3/currencies?type=${type}`, fetcher)
    return {
        data,
        error,
        isLoading
    }
}