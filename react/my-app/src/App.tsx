import React from 'react';
import './App.css';
import { Tab } from './components/Tab';

// Modifica o conteudo diretamente pela funcao App.
// Posteriormente sera feito atraves do Storybook

function App() {
  return <Tab content = {[
    {
      title: "Tab 1",
      text: "Texto da tab 1"
    },
    {
      title: "Tab 2",
      text: "Texto da tab 2"
    },
    {
      title: "Tab 3",
      text: "Texto da tab 3"
    },
    {
      title: "Tab 4",
      text: "Texto da tab 4"
    },
    {
      title: "Tab 5",
      text: "Texto da tab 5"
    }
  ]} />;
}

export default App;
