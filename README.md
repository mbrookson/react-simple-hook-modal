# react-simple-hook-modal

Need a simple modal that just works? `react-simple-hook-modal` is just that!

![Publish CI][publish] ![CI][ci] [![npm latest][npmbadge]][npmlink]

![react-simple-hook-modal][logo]

# Installation

Simply install the package from npm and you're good to go!

```
npm install react-simple-hook-modal

or

yarn add react-simple-hook-modal
```

# Usage

## React

`react-simple-hook-modal` has a super simple API and utilises React hooks.

- Simply wrap your app in `<ModalProvider/>`
- Add instances of `<Modal/>` wherever you want to display a modal
  - This will not render anything to the DOM here
  - Modals are rendered after allthe children in side `<ModalProvider/>`
- Use the `useModal` hook to control your modal's state

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

## Styles

`react-simple-hook-modal` uses a subset of [tailwindcss][tailwind] under the hood. The tailwind classes used have a prefix of `rsm` added to avoid potential conflicts with your own styles. You can import the default styles using:

```
import 'react-simple-hook-modal/dist/styles.css';
```

`ModalProvider` also takes an optional `backdropClassName` which can contain one or more classes to append and override the default styles (e.g. Changing the backdrop colour can be done by adding the class `bg-blue-800`).

# Example

See the `example` directory in the repository for a full example including multiple stacked modals.

# Demo

[Click here][demo] to see a live demo of `react-simple-hook-modal` in action!

# Issues

If you have any issues, please create an issue here on GitHub.

### Thanks!

[publish]: https://github.com/mbrookson/react-simple-hook-modal/workflows/Publish%20CI/badge.svg?branch=master
[ci]: https://github.com/mbrookson/react-simple-hook-modal/workflows/CI/badge.svg
[npmbadge]: https://img.shields.io/npm/v/react-simple-hook-modal.svg?style=flat-square
[npmlink]: https://npmjs.org/package/react-simple-hook-modal
[logo]: https://raw.githubusercontent.com/mbrookson/react-simple-hook-modal/master/logo.png
[demo]: https://react-simple-hook-modal.now.sh/
[tailwind]: https://tailwindcss.com/
