import React from 'react';
import {Box, Flex, Heading} from "@radix-ui/themes";

const Header: React.FC = () => {
    return (
        <Box p={'2'} height={'9'} className={'border border-black'}>
            <Flex direction={'row'} justify={'between'} align={'center'}>
                <Heading>Currencies</Heading>
            </Flex>
        </Box>
    );
};

export default Header;