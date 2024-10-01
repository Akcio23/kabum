const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-24 h-24">
        {/* Bolinha laranja com animação de carregamento */}
        <div className="absolute w-16 h-16 bg-orange-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
