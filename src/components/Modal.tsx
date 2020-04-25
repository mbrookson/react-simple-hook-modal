import { useEffect } from 'react';
import { useModalContext } from '../hooks/useModalContext';
import { ModalTransition } from 'hooks/useModalTransition';

export interface ModalProps {
  id: string;
  isOpen: boolean;
  onBackdropClick?: () => void;
  content: React.ReactNode;
  footer?: React.ReactNode;
  transition?: ModalTransition;
}

export const Modal: React.FC<ModalProps> = ({
  id,
  isOpen,
  onBackdropClick,
  content,
  footer,
  transition,
}) => {
  const { addOrUpdate, remove } = useModalContext();

  useEffect(() => {
    addOrUpdate({
      id,
      isOpen,
      onBackdropClick,
      content,
      footer,
      transition,
    });
    return () => remove(id);
  }, [
    id,
    isOpen,
    onBackdropClick,
    content,
    footer,
    addOrUpdate,
    remove,
    transition,
  ]);

  return null;
};
