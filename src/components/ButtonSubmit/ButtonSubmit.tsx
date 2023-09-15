import { Center, Button } from "@chakra-ui/react";

interface propsButton {
    messageButton: string,
    onClickButton: () => void
}


export const ButtonSubmit = ({messageButton, onClickButton}: propsButton) => {
    return (
        <Center>
            <Button onClick={onClickButton} colorScheme='purple' size={'md'} >
                {messageButton}
            </Button>
        </Center>
    );
};