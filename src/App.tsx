import { Component, createSignal } from 'solid-js';
import { Body } from './models/Body';
import { Vec2 } from './models/Vec2';

import Space from './Space';
import ControlPanel from './ControlPanel';

import styles from './App.module.css';

const App: Component = () => {
  const bodies = [
    new Body(new Vec2(800, 300), new Vec2(0, 0), 30000, 50, '#ffd700', 'Sun'),
    new Body(new Vec2(800, 170), new Vec2(0.945, 0), 5, 7, '#ff6520', 'Venus'),
  ];

  const [panelWidth] = createSignal(450);

  const spaceSize = new Vec2(
    window.visualViewport.width - panelWidth(),
    window.visualViewport.height
  );

  return (
    <div class={styles.App}>
      <Space G={0.5} bodies={bodies} size={spaceSize} />
      <ControlPanel w={panelWidth()} />
    </div>
  );
};

export default App;
