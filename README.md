# react-simple-hook-modal

Need a simple modal that just works? `react-simple-hook-modal` is just that!

![Publish CI](https://github.com/mbrookson/react-simple-hook-modal/workflows/Publish%20CI/badge.svg?branch=master) ![CI](https://github.com/mbrookson/react-simple-hook-modal/workflows/CI/badge.svg)

![react-simple-hook-modal](https://github.com/mbrookson/react-simple-hook-modal/logo.png)

# Installation

Simply install the package from npm and you're good to go!

```
npm install react-simple-hook-modal

or

yarn add react-simple
```

# Usage

`react-simple-hook-modal` has a super simple API and utilises React hooks.

```
import { ModalProvider, Modal, useModal } from 'react-simple-hook-modal';

const MyComponent = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button onClick={openModal}>Open</button>
      <Modal
        id="any-unique-identifier"
        content={(
          // Any React node can be used as content
          <button onClick={openModal}>Open</button>
        )}
        isOpen={isModalOpen}
      />
    </>
  );
}

const App = () => (
  <ModalProvider>
    <MyComponent />
  </ModalProvider>
)

```

# Example

See the `example` directory in the repository for a full example including multiple stacked modals.

# Demo

[Click here](https://react-simple-hook-modal.now.sh/) to see a live demo of `react-simple-hook-modal` in action!

# Issues

If you have any issues, please create an issue here on GitHub.

### Thanks!
