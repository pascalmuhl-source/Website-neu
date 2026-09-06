import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// Wird beim Build von scripts/prerender.js aufgerufen, nicht zur Laufzeit.
// Erzeugt das fertige HTML, das in dist/index.html eingesetzt wird, damit
// Crawler den Inhalt ohne JavaScript-Ausführung lesen können.
export function render() {
  return renderToString(<App />);
}
