import MainPage from '@/components/main page/MainPage';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });
export default function Home() {
  return (
    <div>
      <MainPage />
    </div>
  );
}
