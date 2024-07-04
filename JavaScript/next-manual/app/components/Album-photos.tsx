import Link from 'next/link';
import { API_URL } from '../(albums)/albums-ssr/page';
import { setTimeout } from 'timers';

async function getPhotos(albumId: string) {
  console.log(`Fetching Photos : ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}photos?albumId=${albumId}`);
  // return response.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  throw new Error('Something else break.....');
}

export default async function PhotosInfo(
  {albumId} : {albumId: string}
) {
  const photos = await getPhotos(albumId);
  // const photos10 = photos.slice(0, 10);
  // console.log(photos10);

  return (
    <div>
      {/* <h3>Photos : </h3>
        {photos10.map(photos => {
          return (
            <li key={photos.id}>
              <Link href={photos.url}>{photos.title}</Link>
            </li>
          )
        })} */}
    </div>
  );
}