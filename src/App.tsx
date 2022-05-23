import { Component } from 'solid-js';
import { Body } from './models/Body';
import { Vec2 } from './models/Vec2';
import Space from './Space';

const App: Component = () => {
  const bodies = [
    new Body(new Vec2(800, 300), new Vec2(0, 0), 30000, 50, '#ffd700', 'Sun'),
    new Body(new Vec2(800, 210), new Vec2(1, 0), 1.5, 5, '#382103', 'Mercury'),
    new Body(new Vec2(800, 170), new Vec2(0.94, 0), 5, 7, '#ff6520', 'Venus'),
    new Body(
      new Vec2(800, 100),
      new Vec2(1.15, 0),
      3.85,
      9,
      '#38b503',
      'Earth'
    ),
  ];

  return (
    <div>
      <Space G={0.5} bodies={bodies} />
    </div>
  );
};

export default App;
