# react-simple-hook-modal

Need a simple modal that just works? `react-simple-hook-modal` is just that!

![Publish CI][publish] ![CI][ci] [![npm latest][npmBadge]][npmLink]

![react-simple-hook-modal][logo]

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

[Click here][demo] to see a live demo of `react-simple-hook-modal` in action!

# Issues

If you have any issues, please create an issue here on GitHub.

### Thanks!

[publish]: https://github.com/mbrookson/react-simple-hook-modal/workflows/Publish%20CI/badge.svg?branch=master
[ci]: https://github.com/mbrookson/react-simple-hook-modal/workflows/CI/badge.svg

[npmBadge]: https://img.shields.io/npm/v/react-simple-hook-modal.svg?style=flat-square
[npmLink]: https://npmjs.org/package/react-simple-hook-modal

[logo]: https://raw.githubusercontent.com/mbrookson/react-simple-hook-modal/master/logo.png

[demo]: https://react-simple-hook-modal.now.sh/