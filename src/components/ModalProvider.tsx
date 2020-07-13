import React, { useState, useCallback } from 'react';
import { ModalContext } from '../ModalContext';

export interface ModalProviderProps {
  backdropClassName?: string;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({
  children,
  backdropClassName,
}) => {
  const [openModals, setOpenModals] = useState<string[]>([]);

  const addOrUpdate = useCallback((_id: string) => {
    setOpenModals(prev => {
      const exists = prev.some(id => id === _id);
      return exists ? prev : [...prev, _id];
    });
  }, []);

  const remove = useCallback((_id: string) => {
    setOpenModals(prev => prev.filter(id => id !== _id));
  }, []);

  const modalOpen = openModals.length > 0;

  const getStaggerPixels = useCallback(
    (_id: string) => {
      const index = openModals.findIndex(id => id === _id);
      return openModals.length * 8 - (index + 1) * 8;
    },
    [openModals]
  );

  return (
    <ModalContext.Provider value={{ addOrUpdate, remove, getStaggerPixels }}>
      {children}
      {!modalOpen ? null : (
        <div
          className={
            'rsm-fixed rsm-inset-0 rsm-opacity-50 rsm-z-40 rsm-bg-gray-700 ' +
              backdropClassName || ''
          }
        />
      )}
      <div id="react-simple-modal-container" />
    </ModalContext.Provider>
  );
};
