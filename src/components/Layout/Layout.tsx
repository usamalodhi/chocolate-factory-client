import { Flex, Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Header, Footer } from '../index';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Flex h='100vh' direction='column'>
      <Header />
      <Box as='main' flex='1'>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};
export default Layout;
