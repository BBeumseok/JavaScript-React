//  id값을 전달 받아서
//  해당 id에 속하는 Album과 photos를 출력하는 컴포넌트를 만들어보세요 ~!

import { Suspense } from 'react';
import AlbumInfo from '../../../components/Album-info';
import PhotosInfo from '../../../components/Album-photos';

// import { API_URL } from '../page';

// async function getAlbum(id: string) {
//   console.log(`Fetching Albums : ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${API_URL}albums/${id}`);
//   return response.json();
// }

// async function getPhotos(albumId: string) {
//   console.log(`Fetching Photos : ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${API_URL}photos?albumId=${albumId}`);
//   return response.json();
// }

export default async function AlbumDetail({
  params: {id}
} : {
  params: {id: string};
}) {
  //  위에 전달받은 id를 이용하여 해당 id에 속하는 Album과 photos를 출력
  // const album = await getAlbum(id);
  // const photos = await getPhotos(id);
  
  //  병렬 요청(Parallel Request) -> Promise.all()
  //  병렬 요청을 통해 처리 속도를 단축 시킳 수 있음
  //  병렬 요청의 경우 모든 작업이 처리되기 전까지 클라이언트 측에서는 어떠한 결과도 볼 수 없으므로,
  //  서스펜스를 사용하여 병렬 처리를 하되, 각각 개별적으로 보여줄 수 있도록 변경
  // const [album, photos] = await Promise.all([getAlbum(id), getPhotos(id)]);
  return (
    <div>
      {/* <h1>Album Title : {album.id}</h1>
      <div>
        <h3>Photos :
          {JSON.stringify(photos)}
        </h3>
      </div> */}

      {/* 
        <Suspense /> : 실제 콘텐츠가 로딩되는 동안 보여주는 대체 콘텐츠
        로딩시간동안 사용자가 흰 화면만 보고있는 것이 아닌 로딩되고 있다는 UI를
        보여주는 것이다.
        Suspense의 attribute로 fallback을 이용하여 해당 로딩시간 동안 
        보여질 내용이나 문구를 표시
      */}
      <h1>Album Detail Page</h1>
      <Suspense fallback={<h1>앨범 정보 로딩중....</h1>}>
        <AlbumInfo id={id} />
      </Suspense>
      <hr />
      <hr />
      <h2>Photos</h2>
      <Suspense fallback={<h3>포토 정보 로딩중....</h3>}>
        <PhotosInfo albumId={id} />
      </Suspense>
    </div>
  );
}

