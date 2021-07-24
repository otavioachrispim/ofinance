import {Box, Stack, Link, Icon, Text} from '@chakra-ui/react';
import { RiDashboardLine, RiSettings5Line, RiArrowUpCircleLine, RiArrowDownCircleLine } from 'react-icons/ri';
import { Logo } from './Logo';

export function Siderbar() {
    return(
        <Box
            as="aside"
            w="80"
            h="100%"
            mr="8"
            bgColor="green.800"
            display="flex"
            flexDir="column"
            mt="4"
        >
            <Logo />

            <Stack spacing="12" align="center" color="green.50" mt="8" >
                <Box>
                    <Stack spacing="8" align="stretch">
                        <Link display="flex" align="center">
                            <Icon as={RiDashboardLine} fontSize="24"/>
                            <Text ml="4" fontWeight="medium" color="green.50">Dashboard</Text>
                        </Link>           

                        <Link display="flex" align="center">
                            <Icon as={RiArrowUpCircleLine} fontSize="24" color="green.300"/>
                            <Text ml="4" fontWeight="medium" color="green.50">Receitas</Text>
                        </Link>    

                        <Link display="flex" align="center">
                            <Icon as={RiArrowDownCircleLine} fontSize="24" color="red.300"/>
                            <Text ml="4" fontWeight="medium" color="green.50">Despesas</Text>
                        </Link>   

                        <Link display="flex" align="center">
                            <Icon as={RiSettings5Line} fontSize="24"/>
                            <Text ml="4" fontWeight="medium" color="green.50">Configuração</Text>
                        </Link>                                        
                    </Stack>
                </Box>
            </Stack>            
        </Box>
    );
}
