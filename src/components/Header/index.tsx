import {Flex, useBreakpointValue, Icon, IconButton} from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../context/SidebarDrawerContext';
import { NotificationNav } from './NotificationNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header(){
    const { onOpen } = useSidebarDrawer()

    const isDesktopVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return(
        <Flex
            as="header"
            w="100%"
            maxWidth={1080}
            h="20"
            pr="4"
            mx="auto"
            mt="4"
            align="center"
            justify="space-between"
        >
            {!isDesktopVersion && (
                <IconButton
                    aria-label="Open Navigation"
                    icon={<Icon as ={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                >

                </IconButton>
            )}

            <SearchBox />
            <Flex>
                <NotificationNav />
                <Profile showProfileData={isDesktopVersion} />
            </Flex>
        </Flex>
    );
}