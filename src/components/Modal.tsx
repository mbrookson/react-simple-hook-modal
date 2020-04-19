import { useEffect } from 'react';
import { useModalContext } from '../hooks/useModalContext';

export interface ModalProps {
  id: string;
  isOpen: boolean;
  onBackdropClick?: () => void;
  content: React.ReactNode;
  footer?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  id,
  isOpen,
  onBackdropClick,
  content,
  footer,
}) => {
  const { addOrUpdate, remove } = useModalContext();

  useEffect(() => {
    isOpen
      ? addOrUpdate({
          id,
          isOpen,
          onBackdropClick,
          content,
          footer,
        })
      : remove(id);
  }, [id, isOpen, onBackdropClick, content, footer, addOrUpdate, remove]);

  return null;
};
