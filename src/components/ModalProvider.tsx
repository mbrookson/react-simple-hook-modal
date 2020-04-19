import React, { useState, useCallback } from 'react';
import { ModalContext } from '../ModalContext';
import { ModalContainer } from './ModalContainer';
import { ModalProps } from 'components/Modal';

export interface ModalProviderProps {
  backdropClassName?: string;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({
  children,
  backdropClassName,
}) => {
  const [modals, setModals] = useState<ModalProps[]>([]);

  const addOrUpdate = useCallback((modal: ModalProps) => {
    setModals(prev => {
      const exists = prev.some(m => m.id === modal.id);
      return exists
        ? prev.map(m => (m.id === modal.id ? modal : m))
        : [...prev, modal];
    });
  }, []);

  const remove = useCallback((id: string) => {
    setModals(prev => prev.filter(modal => modal.id !== id));
  }, []);

  const getStaggerPixels = useCallback(
    (index: number) => {
      return (modals.length - index - 1) * 8;
    },
    [modals]
  );

  const modalOpen = modals.some(m => m.isOpen);

  return (
    <ModalContext.Provider value={{ addOrUpdate, remove }}>
      {children}
      {!modalOpen ? null : (
        <>
          <div
            className={
              'rsm-fixed rsm-inset-0 rsm-opacity-50 rsm-z-40 rsm-bg-gray-700 ' +
                backdropClassName || ''
            }
          />
          {modals.map((modal, i) => (
            <ModalContainer
              key={modal.id}
              transformDistance={getStaggerPixels(i)}
              {...modal}
            />
          ))}
        </>
      )}
    </ModalContext.Provider>
  );
};
