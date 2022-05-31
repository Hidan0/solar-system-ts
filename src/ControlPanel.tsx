import { Component } from 'solid-js';
import './ControlPanel.css';

const ControlPanel: Component<{ w: number }> = (props) => {
  const size = `width: ${props.w}px;`;

  const onMouseDown = (evt: MouseEvent) => {
    console.log(evt);
  };

  return (
    <div class="container" style={size}>
      <div class="resize-handle" onMouseDown={onMouseDown}></div>
      <div>
        <input type="number" />
      </div>
    </div>
  );
};

export default ControlPanel;
