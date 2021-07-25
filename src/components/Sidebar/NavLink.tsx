import { Link, Icon, Text, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps{
    icon: ElementType;
    children: string;
}

export function NavLink({icon, children, ...rest}: NavLinkProps){
    return(
        <Link display="flex" align="center" {...rest}>
            <Icon as={icon} fontSize="24"/>
            <Text ml="2" fontWeight="medium" color="green.50">{children}</Text>
        </Link>
    )
}