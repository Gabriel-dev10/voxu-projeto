"use client";
import Navbar from "@/components/Navbar";
import SecaoComunidade from "@/components/SecaoComunidade";


export default function PaginaComunidade() {
  return (
    <div className="bg-black min-h-screen text-white">
        <Navbar/>
        <SecaoComunidade/> 
    </div>
  );
}