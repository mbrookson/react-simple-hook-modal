import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useModalContext } from '../hooks/useModalContext';
import { ModalTransition } from '../hooks/useModalTransition';
import { ModalContainer } from './ModalContainer';

export interface ModalProps {
  id: string;
  isOpen: boolean;
  onBackdropClick?: () => void;
  footer?: React.ReactNode;
  transition?: ModalTransition;
}

export const Modal: React.FC<ModalProps> = modal => {
  const container = document.getElementById('react-simple-modal-container');
  const { addOrUpdate, remove, getStaggerPixels } = useModalContext();
  const { id, isOpen } = modal;

  useEffect(() => {
    isOpen ? addOrUpdate(id) : remove(id);
    return () => remove(id);
  }, [id, isOpen]);

  return container
    ? ReactDOM.createPortal(
        <ModalContainer transformDistance={getStaggerPixels(id)} {...modal} />,
        container
      )
    : null;
};
