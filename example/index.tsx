import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ModalProvider, ModalTransition } from '../dist/index';
import '../dist/styles.css';
import './styles.css';
import { Header } from './src/Header';
import { Example } from './src/Example';
import { TransitionSelect } from './src/TransitionSelect';

const App = () => {
  const [transition, setTransition] = React.useState(ModalTransition.SCALE);

  return (
    <ModalProvider>
      <Header />
      <Example transition={transition} />
      <TransitionSelect value={transition} onChange={setTransition} />
    </ModalProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
