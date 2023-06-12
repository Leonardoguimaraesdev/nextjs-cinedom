import { createContext, useState } from 'react';

interface MeuContextoData {
  contextAPI: string;
  setContextAPI: (value: string) => void;
}

const MeuContexto = createContext<MeuContextoData>({
  contextAPI: '',
  setContextAPI: () => {},
});

export default MeuContexto;

export function MeuContextoProvider({ children }:any) {
  const [contextAPI, setContextAPI] = useState('');

  return (
    <MeuContexto.Provider value={{ contextAPI, setContextAPI }}>
      {children}
    </MeuContexto.Provider>
  );
}