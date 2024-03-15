import React from 'react';
import {Box, Heading} from "@radix-ui/themes";

const Header: React.FC = () => {
    return (
        <Box p={'2'} >
            <Heading>Currencies</Heading>
        </Box>
    );
};

export default Header;