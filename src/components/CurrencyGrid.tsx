import React, { useEffect, useState } from 'react';
import useCurrencies, { CurrencyDetails } from "../api/useCurrencies.ts";
import Loader from "./common/Loader.tsx";
import CurrencyCard from "./CurrencyCard.tsx";
import {Grid} from "@radix-ui/themes";

const CurrencyGrid: React.FC = () => {
    const { isLoading, currencies, error } = useCurrencies('fiat');
    const [currenciesState, setCurrencies] = useState<CurrencyDetails[] | null>(null);

    useEffect(() => {
        if (!isLoading && currencies) {
            const currencyDetails: CurrencyDetails[] = Object.values(currencies);
            setCurrencies(currencyDetails);
        }
    }, [currencies, isLoading]);

    if (isLoading) return <Loader />;
    if (error) throw error;

    return (
        <Grid columns={{xs: '1', md: '1', lg: '2'}} gap="3">
            {currenciesState && currenciesState.map(currency => (
                <CurrencyCard currency={currency} key={currency.name}/>
            ))}
        </Grid>
    );
};

export default CurrencyGrid;
