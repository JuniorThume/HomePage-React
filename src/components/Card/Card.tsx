import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { ButtonSubmit } from "../ButtonSubmit/ButtonSubmit";
import { Form } from "../Form/Form";
import { Header } from "../Header/Header";


interface ICard {
  headerTitle: string,
  textButton: string,
  onClickButton: () => void
}


export const Card = ({headerTitle, textButton, onClickButton}: ICard) => {
    return (
        <Box minHeight={'100vh'} backgroundColor={'orange'} padding={'35px'} boxShadow={'dark-lg'}>
            <Center>
                <Box 
                  backgroundColor={'white'} 
                  borderRadius={'25px'} 
                  padding={'25px'} 
                  maxWidth={'50vw'} 
                  boxShadow={'lg'}>
                    <Header titleHeader={headerTitle} />
                    <Form />
                    <ButtonSubmit messageButton={textButton} onClickButton={onClickButton} /> 
                </Box>
            </Center>
        </Box>
    );
}