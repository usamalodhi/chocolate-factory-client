import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Flex, Box, List, ListItem, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const Header = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 400) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => window.removeEventListener('scroll', changeColor);
  });

  return (
    <Flex
      as='header'
      justifyContent='space-between'
      alignItems='center'
      position='fixed'
      top='0'
      p='24px'
      w='100%'
      fontWeight='bold'
      bg={color ? 'rgba(0,0,0,1)' : ''}
      zIndex={1}
      color='white'
    >
      <Flex as='nav' gap='24px'>
        <Box>
          <Link href='#'>CHOCOLATE FACTORY</Link>
        </Box>
        <List display='flex'>
          <ListItem>
            <Link href='#'>HOME</Link>
          </ListItem>

          <ListItem>
            <Menu>
              <MenuButton fontWeight='bold'>STORE</MenuButton>
              <MenuList as='ul' bg='black'>
                <MenuItem as='li'>BROWNIES</MenuItem>
                <MenuItem as='li'>CAKES</MenuItem>
                <MenuItem as='li'>MACAROONS</MenuItem>
              </MenuList>
            </Menu>
          </ListItem>

          <ListItem>
            <Link href='#'>OUR STORY</Link>
          </ListItem>
          <ListItem>
            <Link href='#'>CART</Link>
          </ListItem>
        </List>
      </Flex>
    </Flex>
  );
};

export default Header;
