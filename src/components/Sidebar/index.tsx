import {Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue} from '@chakra-ui/react';
import { useSidebarDrawer } from '../../context/SidebarDrawerContext';
import { Logo } from './Logo';
import { SidebarNav } from './SidebarNav';

export function Sidebar() {    
    const {isOpen, onClose} = useSidebarDrawer()

    const isDrawerSidebar = useBreakpointValue({
       base: true,
       lg: false, 
    })

    if(isDrawerSidebar){
        return(
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg="green.900" p="4">
                        <DrawerCloseButton mt="6"/>
                        <DrawerHeader>Navegação</DrawerHeader>

                        <DrawerBody>
                            <SidebarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return(
        <Box
            as="aside"
            w="40"
            h="100%"
            mr="8"
            bgColor="green.800"
            display="flex"
            flexDir="column"
            mt="4"
        >
            <Logo />
            <SidebarNav />
                      
        </Box>
    );
}
