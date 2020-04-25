import * as React from 'react';
import { Modal, useModal } from '../../dist/index';

const ModalContent = ({ transition, onCloseClicked }) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [toggle, setToggle] = React.useState(false);

  return (
    <>
      <div>This modal can be closed by clicking the close button below.</div>
      <button
        className="p-3 bg-red-500 text-white rounded mt-4 mr-4"
        onClick={onCloseClicked}
      >
        Close this modal
      </button>
      <Modal
        id="2"
        content={<p>This modal can be closed by clicking the backdrop.</p>}
        isOpen={isModalOpen}
        onBackdropClick={closeModal}
        transition={transition}
      />
      <div className="mt-8">
        Open another modal which will appear stacked on top of the current
        modal.
      </div>
      <button
        className="p-3 bg-blue-500 text-white rounded mt-4"
        onClick={openModal}
      >
        Open next modal
      </button>
      <div className="mt-8">
        Toggle some long content to see how react-simple-hook-modal behaves.
      </div>
      <button
        className="p-3 bg-blue-700 text-white rounded mt-4"
        onClick={() => setToggle(prev => !prev)}
      >
        Toggle long content
      </button>
      {toggle ? (
        <div className="mt-4">
          {[...Array(30)].map((e, i) => (
            <p key={i} className="mb-2">
              Are you using react-simple-hook-modal yet?
            </p>
          ))}
        </div>
      ) : null}
    </>
  );
};

export const Example = ({ transition }) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className="container pt-8">
      <h2 className="text-xl text-gray-800 font-bold mb-4">
        Click the button below to see an example modal
      </h2>
      <button
        className="p-3 bg-blue-500 text-white rounded"
        onClick={openModal}
      >
        Open modal
      </button>
      <Modal
        id="1"
        content={
          <ModalContent transition={transition} onCloseClicked={closeModal} />
        }
        isOpen={isModalOpen}
        transition={transition}
      />
    </div>
  );
};
