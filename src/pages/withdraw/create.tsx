import {Box, Flex, Heading, Divider, VStack, SimpleGrid,HStack,Link, Button} from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export default function CreateDeposit(){
    return (
        <Box 
            w="100%"
            my="6"            
            maxWidth={1400}
            mx="auto"
            px="6"
            display="flex"
        >

            <Sidebar />

            <Flex w="100%" flexDir="column" align="center">

                <Header />
                <Box flex="1" borderRadius={8} p="8" bg="green.900" w="100%" mb="8" h="100%">
                    <Heading size="lg" fontWeight="normal" >Criar transação</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%" >
                            <Input name="description" label="Descrição da transação"/>
                        </SimpleGrid>                        
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="amount" label="Valor da transação" />
                            <Input name="date" label="Data da transação" />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha" w="128px">Cancelar</Button>
                            </Link>
                            <Button
                              type="submit"
                              colorScheme="red"
                              w="128px"
                            >
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>                    
                </Box>
            </Flex>
        </Box>
    );
}