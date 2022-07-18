import type { NextPage } from 'next';
import { HeadComponent } from '../src/components';
import { Box, useMediaQuery } from '@chakra-ui/react';
import { FeaturedProducts, ReviewsGrid } from '../src/components';
import heroImgXL from '../public/assets/heroHomeXL.jpg';
import heroImgLG from '../public/assets/heroHomeLg.jpg';

const Home: NextPage = () => {
  const [large, medium] = useMediaQuery(['(min-width: 2000px)', '(min-width: 1500px)']);

  return (
    <>
      <HeadComponent
        contentTitle='Chocolate Factory'
        contentDescription='High quality desserts delivered straight to your home '
      />
      <Box backgroundImage={large ? heroImgXL.src : medium ? heroImgLG.src : heroImgLG.src} layerStyle='hero100vh' />
      <FeaturedProducts />
      <ReviewsGrid />
    </>
  );
};

export default Home;
