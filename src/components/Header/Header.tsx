import { Box, Center } from "@chakra-ui/react";

export const Header = ({titleHeader}: any) => {
    return (
        <Center>
            <Box margin={'10px'} fontSize={'1.5em'} >
                <h1>{titleHeader}</h1>
            </Box>
        </Center>
    );  
};