/* 
  CSR과 SSR의 차이점
  CSR - 클라이언트 측에서 데이터를 주고받고, 결과를 보여주는 모든 일들을 처리
  SSR - 서버와 API 간 데이터를 주고 받은 뒤 결과만 클라이언트 측에 보내줌

  CSR을 이용해서 모든 내용을 처리할 경우 보안 취약점에 대해 생각해봐야 할 필요가 있다.
*/

import axios from 'axios';
import Link from 'next/link';

export const metadata = {
  title: 'albums-ssr',
};

export const API_URL = 'https://jsonplaceholder.typicode.com/'   //  상수값 내보내기


//  Hook을 사용하지 않고 통신할 수 있는 코드를 작성할 수 있음 (SSR 기반)
//  통신 처리하는 함수
async function getAlbums() {
  //  지연 발생
  // await new Promise((resolve) => setTimeout(resolve, 5000));    //  await의 객체 타입은 Promise

  const response = await fetch(API_URL+'albums');
  const json = await response.json();

   return json;
}

async function getPhotos() {
  
  const photoResponse = await fetch(API_URL+'photos');
  const photoJson = await photoResponse.json();

  return photoJson;
}

export default async function Page() {  //  순차적으로 처리
  const albums = await getAlbums();
  const albums10 = albums.slice(0, 10);
  console.log(albums10);

  const photos = await getPhotos();

  return (
    <div>
      <h1>앨범즈입니다</h1>
      {albums10.map(albums => { //  {}를 사용하는 경우 return을 넣어줘야 결과값이 반환된다.
        return (
          //  브라우저에서 클릭 시 해당  
        <li key={albums.id}><Link href={'/albums-ssr/' + albums.id}>{albums.title}</Link></li>
        );
      })}
      <hr />
      <h1>포토즈입니다</h1>
        {JSON.stringify(photos)}
    </div>
  );
}