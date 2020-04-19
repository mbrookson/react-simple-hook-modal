import React from 'react';

export interface Context {
  remove(id: string): void;
  addOrUpdate(modal: React.ReactNode): void;
}

export const ModalContext = React.createContext({} as Context);
