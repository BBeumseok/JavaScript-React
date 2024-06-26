import { API_URL } from '../(albums)/albums-ssr/page';

//  앨범 정보를 출력하는 컴포넌트, id
async function getAlbum(id: string) {  
  console.log(`Fetching Albums : ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}albums/${id}`);
  return response.json();
}

export default async function AlbumInfo(
  {id} : {id: string}
) {
  const album = await getAlbum(id);
  return (
    <div>
      <h1>Album Title : {album.title}</h1>
    </div>
  );
}