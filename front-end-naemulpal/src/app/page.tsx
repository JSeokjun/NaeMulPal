import { Metadata } from "next";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: '메인',
  description: 'Generated by create next app',
};

export default function Home() {
  return (
    <>
      <header><Header/></header>
      <main></main>
    </>
  )
}
