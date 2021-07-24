import { Flex, Button, Stack, Image } from '@chakra-ui/react';

import {Input} from '../components/Form/Input';

export default function SignIn() {
  return (
    <Flex 
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      flexDir="column"  
    >   

      <Flex
       as="form"
       w="100%" 
       maxWidth={420}
       p="10"
       borderRadius={20}
       flexDir="column"       
      >
        <Image 
          src="/images/logo1.svg"
          alt="Logo" 
          objectFit="contain"
          mb="4"
      />

        <Stack spacing="4">
            <Input name="email" type="email" label="E-mail" />
            <Input name="password" type="password" label="Senha" />            
        </Stack>
        
          <Button 
            colorScheme="green"
            color="green.50"
            type="submit"
            size="lg"
            mt="8"
          >
            Entrar
          </Button>
      </Flex>
    </Flex>
  )
}
