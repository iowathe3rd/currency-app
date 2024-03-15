import React, {PropsWithChildren} from "react";
import Header from "./Header.tsx";
import {Container} from "@radix-ui/themes";

const Layout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <React.Fragment>
            <Header/>
            <Container size={{xs: '1', md: '2', lg: '3'}}>
                {children}
            </Container>
        </React.Fragment>
    );
};

export default Layout;