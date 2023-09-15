import { Center, Flex, Input } from "@chakra-ui/react";

export const Form = () => {
    return (
        <Center>
            <Flex direction={'column'}>
                <Input placeholder='Digite seu E-mail' type='email' width={'20vw'} borderColor={'orange'} focusBorderColor={'#9D5EC7'}/>
                <Input placeholder='Digite sua senha' type='password' width={'20vw'} margin={'10px 0px'} borderColor={'orange'} focusBorderColor={'#9D5EC7'}/>
            </Flex>
        </Center>

    );
};