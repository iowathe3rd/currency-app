import React from 'react';
import {CurrencyDetails} from "../api";
import {Blockquote, Button, Heading, Flex, Card} from "@radix-ui/themes";

const CurrencyCard: React.FC<{currency: CurrencyDetails}> = ({currency}) => {
    console.log(currency)
    return (
        <Card>
            <Flex gap='3' direction={'column'} justify={'end'}>
                <Flex gap="3" direction={'column'}>
                    <Heading>{currency.name} | {currency.symbol_native}</Heading>
                    <Blockquote>
                        {currency.code} | {currency.type}
                    </Blockquote>
                </Flex>
                <Button className={'max-w-10'}>To currency &gt;</Button>
            </Flex>
        </Card>
    );
};

export default CurrencyCard;