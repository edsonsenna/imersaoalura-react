import React, { useEffect, useState } from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categories';
import Scaffold from '../../components/Scaffold';

function Home() {
  const [initialValues, setInitialValues] = useState([]);

  useEffect(() => {
    console.log('useEffect');
    categoriesRepository.getAllWithVideos().then((categoriesWithVideos) => {
      setInitialValues(categoriesWithVideos);
    });
  }, []);

  return (
    <Scaffold paddingAll={0}>
      {initialValues.length === 0 && <div>Loading...</div>}

      {initialValues.map((category, index) => {

        if(index === 0) {
          return (
            <div 
              key={category.id}> 
              <BannerMain
                videoTitle={category.videos[0].title}
                url={category.videos[0].url}
                videoDescription={
                  'Assista aos destaques da corrida Men Elite Road Race no UCI Road World Championships 2019 em Yorkshire, Reino Unido.'
                }
              />

              <Carousel ignoreFirstVideo category={category} />
            </div>
          )
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        )

      })}

    </Scaffold>
  );
}

export default Home;
