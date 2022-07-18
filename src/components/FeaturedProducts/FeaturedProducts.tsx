import Image from 'next/image';
import { Box, chakra, SimpleGrid, Stat, StatLabel, StatNumber, Text } from '@chakra-ui/react';

interface FeaturedProductCardProps {
  title: string;
  description: string;
}

const FeaturedProductsCard = ({ title, description }: FeaturedProductCardProps) => {
  return (
    <Stat px={{ base: 4, md: 8 }} py={'5'} shadow={'xl'} border={'1px solid black'} rounded={'lg'}>
      <Text as='h3'>{title}</Text>
      <Box h='200px' border='2px solid red'></Box>
      <Text>{description}</Text>
    </Stat>
  );
};

const FeaturedProducts = () => {
  return (
    <Box>
      <Text textAlign='center' as='h2' margin={'auto'} py={10}>
        What's Your Favourite?
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing='24px'>
        <FeaturedProductsCard title={'Brownies'} description={'write description for Brownies here'} />
        <FeaturedProductsCard title={'Cakes'} description={'write description for Cakes here'} />
        <FeaturedProductsCard title={'Macaroons'} description={'write description for Macaroons here'} />
      </SimpleGrid>
    </Box>
  );
};

export default FeaturedProducts;
