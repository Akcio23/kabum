"use client"

import { useState, useEffect } from "react";
import Add from "./components/Add";
import Contact from "./components/Contact";
import Image from 'next/image';
import getPosts from "../backend/api/get";
import Footer from "./components/Footer";

export default function Home() {
  const [filter, setFilter] = useState('');
  const [contatos, setContatos] = useState([]);

  const fetchPosts = async () => {
    try {
      const fetchedContatos = await getPosts();
      setContatos(fetchedContatos);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center"> {/* Garante que a div ocupe pelo menos a altura da tela */}
      <div className="flex flex-col justify-center items-center w-full gap-3 pb-2 bg-gradient-to-b from-orange-400 to-orange-600 rounded-b-3xl mb-3">
        <div>
          <Image
            src={"/logo-loja-Kabum.png"}
            alt="Kabum"
            width={120}
            height={100}
          />
        </div>

        <input
          type="text"
          placeholder="O que você está procurando?"
          className="w-[90%] text-center md:w-[30%] p-2 rounded border-2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className='w-[90%] flex-grow'> {/* Flex-grow para ocupar espaço disponível */}
        <Contact filter={filter} contatos={contatos} />
        <div className="flex justify-center"><Add /></div>
      </div>
     
      
      <Footer />
    </div>
  );
}
