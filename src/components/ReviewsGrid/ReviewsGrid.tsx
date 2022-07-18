import { Box, chakra, Flex, Text, SimpleGrid } from '@chakra-ui/react';
import { TESTIMONIALS } from '../../constants/constants';

interface TestimonialCardProps {
  name: string;
  review: string;
}

function TestimonialCard(props: TestimonialCardProps) {
  const { name, review } = props;
  return (
    <Flex
      boxShadow={'lg'}
      border='2px solid black'
      maxW={'640px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      p={10}
      justifyContent={'space-between'}
    >
      <Flex direction='column' textAlign='left' justifyContent='space-between'>
        <Text>{review}</Text>
        <Text>{name}</Text>
      </Flex>
    </Flex>
  );
}

const ReviewsGrid = () => {
  return (
    <Flex zIndex={0} textAlign={'center'} pt={10} justifyContent={'center'} direction={'column'} width={'full'}>
      <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
        <Text as='h2'>Reviews</Text>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={'20'} mt={16} mx={'auto'}>
        {TESTIMONIALS.map((cardInfo, index) => (
          <TestimonialCard key={index} {...cardInfo} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default ReviewsGrid;
