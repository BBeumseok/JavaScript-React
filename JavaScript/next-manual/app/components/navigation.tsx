'use client';   //  이 컴포넌트는 Client에서 동작하는 것이라고 명시하는 마킹
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

//  Next.js의 장점은 CSR과 SSR을 번갈아가며 자유롭게 채택할 수 있다는 것.

export default function Navigation() {

  //  Server Components를 기본값으로 사용하고 있어서 usePathname()은 CSR
  //  파일 상단에 'use client'를 명시해줘야 에러를 해결할 수 있음
  const path = usePathname();   //  리액트 훅으로 Client Side로 동작
  console.log(path);

  const [count, setCount] = useState(0);

  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Home</Link> {path == '/' ? '<--' : ''}
        </li>
        <li>
          <Link href='/info'>Info</Link> {path == '/info' ? '<--' : ''}
        </li>
        <li>
          <Link href='/about-us'>About Us</Link> {path == '/about-us' ? '<--' : ''}
        </li>
        <li>
          <Link href='/company'>Company</Link> {path == '/company' ? '<--' : ''}
        </li>
        <li>
          <Link href='/company/sales'>Sales</Link> {path == '/company/sales' ? '<--' : ''}
        </li>
        <li>
          <button onClick={() => setCount((c) => c+1)}>{count}</button>
        </li>
      </ul>
    </nav>
  );
}




