import {Box, Flex, Heading, Button, Icon, Table, Thead, Td, Tr, Tbody, Th, Text} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import { Header } from '../../components/Header';
import { Pagination } from '../../components/WithdrawPagination';
import { Sidebar } from '../../components/Sidebar';
import Link from 'next/Link';

export default function Withdraw(){
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

                    <Flex mb="8" justify="space-between" align="center" >
                        <Heading size="lg" fontWeight="normal" color="red.50">Despesas</Heading>

                        <Link href="withdraw/create" passHref>
                            <Button 
                                as="a" 
                                size="sm" 
                                fontSize="sm" 
                                colorScheme="red"
                                leftIcon={<Icon as={RiAddLine} />}
                            > 
                                Nova Transação
                            </Button>
                        </Link>

                    </Flex>

                    <Table colorScheme="blackAlpha">
                        <Thead>
                            <Tr>                                
                                <Th color="red.50">Título</Th>
                                <Th color="red.50">Valor</Th> 
                                <Th color="red.50">Data</Th> 
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <Text color="red.50" >Aluguel</Text>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text color="red.50" fontWeight="bold">R$1.000,00</Text>
                                    </Box>
                                </Td>
                                <Td color="red.50">02 de julho, 2021</Td>
                                <Td>
                                    <Button 
                                        as="a" 
                                        size="sm" 
                                        fontSize="sm" 
                                        colorScheme="red"
                                        leftIcon={<Icon as={RiPencilLine} />}
                                    > 
                                        Editar
                                    </Button>
                                </Td>
                                
                            </Tr>
                        </Tbody>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <Text color="red.50" >Supermercado</Text>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text color="red.50" fontWeight="bold">R$500,00</Text>
                                    </Box>
                                </Td>
                                <Td color="red.50">10 de julho, 2021</Td>
                                <Td>
                                    <Button 
                                        as="a" 
                                        size="sm" 
                                        fontSize="sm" 
                                        colorScheme="red"
                                        leftIcon={<Icon as={RiPencilLine} />}
                                    > 
                                        Editar
                                    </Button>
                                </Td>
                                
                            </Tr>
                        </Tbody>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <Text color="red.50" >Cartão de Crédito</Text>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text color="red.50" fontWeight="bold">R$1.000,00</Text>
                                    </Box>
                                </Td>
                                <Td color="red.50">02 de julho, 2021</Td>
                                <Td>
                                    <Button 
                                        as="a" 
                                        size="sm" 
                                        fontSize="sm" 
                                        colorScheme="red"
                                        leftIcon={<Icon as={RiPencilLine} />}
                                    > 
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>                        
                    </Table>
                    
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    );
}