import React, { createContext, useState, useContext, ReactNode } from 'react';

// Cria contexto
const LoadingContext = createContext({
  loading: false,
  startLoading: () => {},
  stopLoading: () => {},
});

export function useLoading() {
  return useContext(LoadingContext);
}

export function LoadingProvider({ children }: any) {
  const [count, setCount] = useState(0);

  // Quando começar uma requisição
  function startLoading() {
    setCount((c) => c + 1);
  }

  // Quando terminar uma requisição
  function stopLoading() {
    setCount((c) => Math.max(c - 1, 0));
  }

  return (
     <LoadingContext.Provider value={{ loading: count > 0, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}