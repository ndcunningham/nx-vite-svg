/// <reference types="vite-plugin-svgr/client" />
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Logo from './nx.svg?react';
import svgImg from './nx.svg';

export function App() {
  return (
    <>
      <div>
        Image
        <img src={svgImg} height={24} width={24} alt="Alt for SVG img tag" />
      </div>
      <div>
        Logo <Logo />
      </div>
    </>
  );
}

export default App;
