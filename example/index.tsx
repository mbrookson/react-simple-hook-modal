import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ModalProvider, Modal, useModal } from '../dist/index';
import '../dist/styles.css';

const ModalContent = ({ onCloseClicked }) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div>This modal can be closed by clicking the close button below.</div>
      <button
        className="rsm-p-3 rsm-bg-red-500 rsm-text-white rsm-rounded rsm-mt-4 rsm-mr-4"
        onClick={onCloseClicked}
      >
        Close this modal
      </button>
      <Modal
        id="2"
        content={<p>This modal can be closed by clicking the backdrop.</p>}
        isOpen={isModalOpen}
        onBackdropClick={closeModal}
      />
      <div className="rsm-mt-8">
        Open another modal which will appear stacked on top of the current
        modal.
      </div>
      <button
        className="rsm-p-3 rsm-bg-blue-500 rsm-text-white rsm-rounded rsm-mt-4"
        onClick={openModal}
      >
        Open next modal
      </button>
    </>
  );
};

const Component = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div style={{ padding: '2rem' }}>
      <h1 className="rsm-mb-4 rsm-text-2xl">React Simple Modal Example</h1>
      <button
        className="rsm-p-3 rsm-bg-blue-500 rsm-text-white rsm-rounded"
        onClick={openModal}
      >
        Open modal
      </button>
      <Modal
        id="1"
        content={<ModalContent onCloseClicked={closeModal} />}
        isOpen={isModalOpen}
      />
    </div>
  );
};

const App = () => {
  return (
    <ModalProvider>
      <Component />
    </ModalProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
