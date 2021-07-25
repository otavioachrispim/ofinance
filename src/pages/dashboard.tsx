import {Flex, SimpleGrid, Box, Text, Button, Icon, Table, Thead, Td, Tr, Tbody, Th,Heading} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

const options = {
    chart:{
        toolbar:{
            show: false,
        },
        zoom:{
            enabled: false,
        },
        foreColor: "#F0FFF4"
    },    
    grid: {
        show: false,
    },
    dataLabels:{
        enabled: false,
    },
    tooltip:{
        enabled: false,
    },
    stroke: {
        width: [1,1,3],
        colors: [ "#48BB78", "#F56565", "#234E52"],

    },
    xaxis:{
        type: 'datetime',
        axisBorder: {
            color: "#F0FFF4"
        },
        axisTicks: {
            color: "#F0FFF4"
        },
        categories: [
            '2021-01',
            '2021-02',
            '2021-03',
            '2021-04',
            '2021-05',
            '2021-06',
            '2021-07',
            '2021-08',
            '2021-09',
            '2021-10',
            '2021-11',
            '2021-12',
         ],
        },
        fill: {
            opacity: 0.3,
            type: 'gradient',
            gradient: {
                shade: 'dark',
                opacityFrom: 0.9,
                opacityTo: 0.7,
        },
    },
};

const series = [
    {name: 'receitas', data: [10,2,35,42,15,56,27,38,59,100,11,120], color: "#48BB78"},
    {name: 'despesas', data: [-5,-10,-50,-42,-15,-56,-27,-38,-59,-100,-11,-120], color: "#F56565"},
    {name: 'total', data: [5,-8,-15,-27,41,-28,32,62,-59,90,-11,110], color: "#234E52"},
];

export default function Dashboard(){
    return(
        <Flex 
            w="100%"
            my="6"            
            maxWidth={1400}
            mx="auto"
            px="6"
        >
            <Sidebar />

            <SimpleGrid flex="1" gap="4" align="center" bg="green.800">
                <Header />
                <Box
                    p="8"
                    borderRadius={8}
                >
                    <Text fontSize="lg" mb="4" color="green.50">Gráfico das operações</Text>
                    <Chart options={options} series={series} type="area" height={320} />
                    
                    <Box mt="10" bg="green.900" p="6" borderRadius="20">
                        <Flex mb="8" justify="space-between" align="center" >
                            <Heading size="lg" fontWeight="normal" color="green.50">Ultimas transações</Heading>                  

                        </Flex>

                        <Table colorScheme="whiteAlpha">
                            <Thead>
                                <Tr >                                
                                    <Th color="green.50">Título</Th>
                                    <Th color="green.50">Valor</Th> 
                                    <Th color="green.50">Tipo</Th> 
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <Text color="green.50" >Aluguel</Text>
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Text color="green.50" fontWeight="bold">R$1.000,00</Text>
                                        </Box>
                                    </Td>  
                                    <Td>
                                        <Text color="red.400" >Despesa</Text>
                                    </Td>                                 
                                    
                                </Tr>
                            </Tbody>
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
                                    <Td>
                                        <Text color="green.400" >Receita</Text>
                                    </Td>                                 
                                    
                                </Tr>
                            </Tbody>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <Text color="green.50" >Supermercado</Text>
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Text color="green.50" fontWeight="bold">R$500,00</Text>
                                        </Box>
                                    </Td>  
                                    <Td>
                                        <Text color="red.400" >Despesa</Text>
                                    </Td>                                 
                                    
                                </Tr>
                            </Tbody>
                        </Table>
                        </Box>
                </Box>                            
            </SimpleGrid>

        </Flex>
    );    
}