import { Stack} from '@chakra-ui/react';
import { RiDashboardLine, RiSettings5Line, RiArrowUpCircleLine, RiArrowDownCircleLine } from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';


export function SidebarNav(){
    return(
        <Stack align="center" color="green.50" mt="4" >
            <NavSection>
                <NavLink icon={RiDashboardLine}>Dashboard</NavLink>           
                <NavLink icon={RiArrowUpCircleLine}>Receitas</NavLink>           
                <NavLink icon={RiArrowDownCircleLine}>Despesas</NavLink>           
                <NavLink icon={RiSettings5Line}>Configuração</NavLink> 
            </NavSection>              
        </Stack>  
    )
}