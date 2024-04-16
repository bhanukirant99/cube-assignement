// src/api/unsplashService.ts

import { createApi } from 'unsplash-js';

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY || '7ziuVX_dKRNSxw-dsVKRYlXKX3dUzQtEaFrT8UExv0c';
console.log(accessKey);

if (!accessKey) {
  throw new Error('REACT_APP_UNSPLASH_ACCESS_KEY is not defined');
}
const unsplashApiService = createApi({
    accessKey: accessKey,
  });
  
  export const fetchRandomPhotos = async (query: string): Promise<string[]> => {
    try {
      const result = await unsplashApiService.search.getPhotos({
        query: query,
        perPage: 9,
        orientation: 'landscape',
      });
  
      if (result.type === 'error') {
        console.error('error occurred: ', result.errors);
        return [];
      }
  
      const photos = result.response.results.map(photo => photo.urls.regular);
      return photos;
    } catch (error) {
      console.error('There was an error fetching the photos', error);
      return [];
    }
  };