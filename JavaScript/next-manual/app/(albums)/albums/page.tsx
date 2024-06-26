'use client';
import { useEffect, useState } from 'react';

export default function Albums() {
  
  // const [info, setInfo] = useState();
  const [albums, setAlbums] = useState();
  const [loading, setLoading] = useState(true);

  //  async와 await 사용
  const getAlbums = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const json =  await response.json();
    // console.log(json);
    setAlbums(json);
    setLoading(false);  //  상태 변경 (데이터를 불러온 후에 false로 변경되게끔)
  }

  //  컴포넌트 실행 시 동작하는 기능
  useEffect(() => {
    //  통신 - 'https://jsonplaceholder.typicode.com/albums'
    //  결과는 setAlbums()에 저장하는 function을 구현
    getAlbums();
    fetch('https://jsonplaceholder.typicode.com/albums')
  }, []);

  // const getInfo = () => {
  //   fetch('https://jsonplaceholder.typicode.com/albums')
  //   .then(response => response.json())
  //   .then( data => {
  //     console.log(data);
  //     setInfo(data);
  //   }).catch(e => console.log(e));
  // }

  return (
    <div>
      {loading? "Loading" : JSON.stringify(albums)}<br/>
    </div>
  );
}
