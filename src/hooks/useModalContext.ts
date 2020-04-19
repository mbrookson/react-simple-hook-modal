import { useContext } from 'react';
import { ModalContext, Context } from '../ModalContext';

export const useModalContext = () => useContext<Context>(ModalContext);
