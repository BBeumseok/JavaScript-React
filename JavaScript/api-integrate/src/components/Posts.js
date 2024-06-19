import axios from 'axios';
import React, { useEffect, useState} from 'react';

  //  Quiz
  //  posts에 있는 게시글의 리스트(id, title, userId)로 출력하는 Component를 작성하세요.
  //  게시물의 숫자는 20개로 출력되게 만들어주세요.
  //  출력
  //  [게시글 번호] [제목] [userId]
  //  컴포넌트를 렌더링시에만 출력되게 만들어주세요.

  const Post = ({id, title, userId}) => {
    return (
      <div>
        <span style={{color:'red',marginRight: 30, width:'20px'}}>{id}</span> 
        <span style={{marginRight: 30}}>{title}</span> 
        <span style={{color:"orange"}}>{userId}</span>
      </div>
    );
  };

function Posts() {

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() =>  {
    //  postTest 함수 정의
    const postTest = async () => {
      try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts1')
      setPosts(response.data.filter(t => t.id <= 20));
      setLoading(true);
      }catch(e) {
        setError(e)
        console.log(e)
        console.log(e.message)
        console.log(e.response.status)
      }
    }
    //  함수 실행
    postTest();
  }, []);

  if(error) return <div><h1>에러가 발생했습니다.</h1></div>

  if(!loading) return <h1>로딩 중입니다 ....</h1>

  return (
    <div>
      {loading && posts.map (post => {
        <Post key={post.id} id={post.id} title={post.title} userId={post.userId} /> 
      })}
    </div>
  );
}

export default Posts;