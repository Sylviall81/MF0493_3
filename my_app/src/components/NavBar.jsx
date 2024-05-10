import React from "react";
import Logo from '../assets/logoipsum-327.svg'
import {
  Button,
  Flex,
  Spacer,
  Image,
  Stack,
  ButtonGroup,
  Heading
 
} from "@chakra-ui/react";



function NavBar() {
  return (
    <Flex padding='8' minWidth="max-content" alignItems='center' gap="2">
      <Stack alignItems='flex-end' direction="row">
        <Image
          borderRadius="full"
          boxSize="50px"
          src={Logo}
          alt="Logo de la empresa"
        />
        <Heading size="lg">FriendFinder.com</Heading>
      </Stack>

      <Spacer />

     

      

        {/*<Menu>
          <MenuButton as={Button} colorScheme="teal">
            Home
          </MenuButton>
          <MenuList>
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
          
          <MenuButton as={Button} colorScheme="teal">
            About Us
          </MenuButton>
          <MenuButton as={Button} colorScheme="teal">
            Servicios
          </MenuButton>
          <MenuButton as={Button} colorScheme="teal">
            Contacto
          </MenuButton>
        </Menu>*/}
       
        <ButtonGroup gap="2">
        <Button colorScheme="teal">Sign Up</Button>
        <Button colorScheme="teal">Log in</Button>
        </ButtonGroup>
     
    </Flex>
  );
}

export default NavBar;
