import {Box, Flex, Heading, Button, Icon, Table, Thead, Td, Tr, Tbody, Th, Text} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import { Header } from '../../components/Header';
import { Pagination } from '../../components/DepositPagination';
import { Siderbar } from '../../components/Sidebar';

export default function Deposit(){
    return (
        <Box 
            w="100%"
            my="6"            
            maxWidth={1400}
            mx="auto"
            px="6"
            display="flex"
        >

            <Siderbar />

            <Flex w="100%" flexDir="column" align="center">

                <Header />
                <Box flex="1" borderRadius={8} p="8" bg="green.900" w="100%" mb="8" h="100%">

                    <Flex mb="8" justify="space-between" align="center" >
                        <Heading size="lg" fontWeight="normal" color="green.50">Receitas</Heading>

                        <Button 
                            as="a" 
                            size="sm" 
                            fontSize="sm" 
                            colorScheme="green"
                            leftIcon={<Icon as={RiAddLine} />}
                        > 
                            Nova Transação
                        </Button>

                    </Flex>

                    <Table colorScheme="blackAlpha">
                        <Thead>
                            <Tr>                                
                                <Th color="green.50">Título</Th>
                                <Th color="green.50">Valor</Th> 
                                <Th color="green.50">Data</Th> 
                                <Th></Th> 
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <Text color="green.50" >Salário</Text>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text color="green.50" fontWeight="bold">R$3.000,00</Text>
                                    </Box>
                                </Td>
                                <Td color="green.50">02 de julho, 2021</Td>
                                <Td>
                                    <Button 
                                        as="a" 
                                        size="sm" 
                                        fontSize="sm" 
                                        colorScheme="green"
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
                                    <Text color="green.50" >Freelancer</Text>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text color="green.50" fontWeight="bold">R$500,00</Text>
                                    </Box>
                                </Td>
                                <Td color="green.50">10 de julho, 2021</Td>
                                <Td>
                                    <Button 
                                        as="a" 
                                        size="sm" 
                                        fontSize="sm" 
                                        colorScheme="green"
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
                                    <Text color="green.50" >Aluguel Classic</Text>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text color="green.50" fontWeight="bold">R$960,00</Text>
                                    </Box>
                                </Td>
                                <Td color="green.50">02 de julho, 2021</Td>
                                <Td>
                                    <Button 
                                        as="a" 
                                        size="sm" 
                                        fontSize="sm" 
                                        colorScheme="green"
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