"use client";

import Navbar from "@/components/Navbar";
import QuestoesPopulares from "@/components/QuestoesPopulares";
import Footer from "@/components/Footer";


export default function HomePage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <QuestoesPopulares />
      <Footer />
    </div>
  );
}