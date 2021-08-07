import React from 'react';
import { animated } from 'react-spring';
import {
  useModalTransition,
  ModalTransition,
} from '../hooks/useModalTransition';
import { ModalProps } from './Modal';

interface Props {
  transformDistance: number;
}

export const ModalContainer: React.FC<ModalProps & Props> = ({
  children,
  isOpen,
  footer,
  transition,
  onBackdropClick,
  transformDistance,
  modalClassName,
  modalZIndex,
}) => {
  const modalTransitions = useModalTransition(transition, isOpen);

  return (
    <>
      {modalTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="rsm-fixed rsm-inset-0 rsm-m-4 sm:rsm-m-8 rsm-flex rsm-justify-center rsm-items-center rsm-z-40"
              onClick={onBackdropClick}
            >
              <div
                className={`rsm-bg-white rsm-rounded-md rsm-overflow-auto rsm-max-h-full rsm-w-full md:rsm-w-10/12 xl:rsm-w-1/2 rsm-opactiy-100 rsm-shadow-lg rsm-z-9999 rsm-border rsm-border-gray-200 rsm-flex rsm-flex-col ${
                  modalClassName ?? ''
                }`}
                style={{
                  minHeight: '70%',
                  transition:
                    transition === ModalTransition.NONE
                      ? ''
                      : 'transform ease-in-out .2s',
                  transform: `translate(${transformDistance}px, ${transformDistance}px)`,
                  transformOrigin: 'center',
                  zIndex: modalZIndex,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="rsm-flex-1 rsm-p-8">{children}</div>
                {!footer ? null : (
                  <div className="rsm-bg-gray-200 rsm-p-4">{footer}</div>
                )}
              </div>
            </animated.div>
          )
      )}
    </>
  );
};
