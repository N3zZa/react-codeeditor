import { useState } from 'react';
import './App.css';
import MainEditor from './components/MainEditor/MainEditor';
import { python } from "@codemirror/lang-python";
import Header from './components/Header/Header';

function App() {
  const [language, setLanguage] = useState(python); // Язык по умолчанию

  return (
    <div className="App">
      <Header setLanguage={setLanguage} />
      <main>
      <MainEditor language={language} />
      </main>
    </div>
  );
}

export default App;
