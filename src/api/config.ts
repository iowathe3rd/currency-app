import {SWRConfiguration} from "swr";
import fetcher from "./fetcher.ts";

export default {
    fetcher: fetcher,
} satisfies SWRConfiguration