import { Stack} from '@chakra-ui/react';
import { RiDashboardLine, RiSettings5Line, RiArrowUpCircleLine, RiArrowDownCircleLine } from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';


export function SidebarNav(){
    return(
        <Stack align="center" color="green.50" mt="4" >
            <NavSection>
                <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>           
                <NavLink icon={RiArrowUpCircleLine} href="/deposit">Receitas</NavLink>           
                <NavLink icon={RiArrowDownCircleLine} href="/withdraw">Despesas</NavLink>           
                <NavLink icon={RiSettings5Line} href="/config">Configuração</NavLink> 
            </NavSection>              
        </Stack>  
    )
}