import React from 'react';
import { ModalProps } from './Modal';

interface Props {
  transformDistance: number;
}
export const ModalContainer: React.FC<ModalProps & Props> = ({
  isOpen,
  content,
  footer,
  onBackdropClick,
  transformDistance,
}) => {
  return !isOpen ? null : (
    <div
      className="rsm-fixed rsm-inset-0 rsm-m-8 rsm-flex rsm-justify-center rsm-items-center rsm-z-40"
      onClick={onBackdropClick}
    >
      <div
        className="rsm-bg-white rsm-rounded-md rsm-overflow-auto rsm-max-h-full rsm-w-full md:rsm-w-10/12 xl:rsm-w-1/2 rsm-opactiy-100 rsm-shadow-lg rsm-z-50 rsm-border rsm-border-gray-200 rsm-flex rsm-flex-col"
        style={{
          minHeight: '70%',
          transform: `translate(${transformDistance}px, ${transformDistance}px)`,
        }}
        onClick={e => e.stopPropagation()}
      >
        <div className="rsm-flex-1 rsm-p-8">{content}</div>
        {!footer ? null : (
          <div className="rsm-bg-gray-200 rsm-p-4">{footer}</div>
        )}
      </div>
    </div>
  );
};
