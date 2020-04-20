import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ModalProvider, Modal, useModal } from '../dist/index';
import '../dist/styles.css';
import './styles.css';

const ModalContent = ({ onCloseClicked }) => {
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

const Component = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl">React Simple Modal Example</h1>
      <a
        className="block mb-4 hover:text-blue-700"
        href="https://github.com/mbrookson/react-simple-hook-modal"
      >
        https://github.com/mbrookson/react-simple-hook-modal
      </a>
      <button
        className="p-3 bg-blue-500 text-white rounded"
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
