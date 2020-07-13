import React from 'react';

export interface Context {
  addOrUpdate(id: string): void;
  remove(id: string): void;
  getStaggerPixels(id: string): number;
}

export const ModalContext = React.createContext({} as Context);
