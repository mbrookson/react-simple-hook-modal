import { useTransition } from 'react-spring';

export enum ModalTransition {
  NONE = 'NONE',
  SCALE = 'SCALE',
  TOP_DOWN = 'TOP_DOWN',
  BOTTOM_UP = 'BOTTOM_UP',
}

const ModalTransitionConfig: { [key in ModalTransition]: object } = {
  NONE: {
    from: { transform: 'scale(1)' },
    enter: { transform: 'scale(1)' },
    leave: { transform: 'scale(1)' },
  },
  SCALE: {
    from: { transform: 'scale(0)', opacity: 0 },
    enter: { transform: 'scale(1)', opacity: 1 },
    leave: { transform: 'scale(0)', opacity: 0 },
    config: { tension: 800, friction: 25 },
  },
  TOP_DOWN: {
    from: { transform: 'translateY(-150%)' },
    enter: { transform: 'translateY(0)' },
    leave: { transform: 'translateY(-150%)' },
    config: { tension: 500, friction: 25 },
  },
  BOTTOM_UP: {
    from: { transform: 'translateY(150%)' },
    enter: { transform: 'translateY(0)' },
    leave: { transform: 'translateY(150%)' },
    config: { tension: 500, friction: 25 },
  },
};

export const useModalTransition = (
  transition: ModalTransition = ModalTransition.SCALE,
  isOpen: boolean
) => {
  return useTransition(isOpen, null, ModalTransitionConfig[transition]);
};
