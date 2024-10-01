import React, { useEffect, useState } from 'react';

interface SucessProps {
  message: string;
  duration?: number; // Duração opcional para exibição do sucesso
}

const Sucess: React.FC<SucessProps> = ({ message, duration = 3000 }) => {
  const [loadingProgress, setLoadingProgress] = useState(100); // Inicializa o progresso em 100
  const [isVisible, setIsVisible] = useState(true); // Estado para controlar a visibilidade do componente

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => prev - 1); // Diminui o progresso em 1 a cada 30 ms
    }, (duration / 100)); // Calcula a duração com base na porcentagem

    const timeout = setTimeout(() => {
      setIsVisible(false); // Oculta o componente após a duração
      clearInterval(interval); // Limpa o intervalo
    }, duration);

    return () => {
      clearTimeout(timeout); // Limpa o timeout se o componente for desmontado
      clearInterval(interval); // Limpa o intervalo se o componente for desmontado
    };
  }, [duration]);

  if (!isVisible) return null; // Não renderiza se não estiver visível

  return (
    <div className="fixed bottom-5 right-5 w-80 p-4 bg-green-600 text-white rounded-md shadow-md transition-opacity duration-300 ease-in-out animate-slide-in">
      <p className="font-semibold">{message}</p>
      <div className="w-full bg-white rounded-full mt-2">
        <div
          className="bg-green-500 rounded-full h-2"
          style={{ width: `${loadingProgress}%` }} // Define a largura da barra com base no progresso
        />
      </div>
    </div>
  );
};

export default Sucess;
