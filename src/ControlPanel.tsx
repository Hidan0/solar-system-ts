import { Component, createSignal, onCleanup, onMount } from 'solid-js';
import './ControlPanel.css';

const ControlPanel: Component<{ w: number }> = (props) => {
  const [panelSize, setPanelSize] = createSignal(props.w);

  var isGrabbed = false;
  var grabbedX: number;

  const onMouseDown = (evt: MouseEvent) => {
    if (evt.button === 0) {
      isGrabbed = !isGrabbed;
      if (isGrabbed) {
        grabbedX = evt.clientX;
      }
    }
  };

  const onMouseMove = (evt: MouseEvent) => {
    if (evt.button === 0 && isGrabbed) {
      const newSize = panelSize() + grabbedX - evt.clientX;
      if (newSize < 1024 && newSize > 256) {
        setPanelSize(newSize);
      }
    }
  };

  const onMouseUp = (evt: MouseEvent) => {
    if (evt.button === 0) {
      if (isGrabbed) {
        if (panelSize() > 1024) {
          setPanelSize(1024);
        } else if (panelSize() < 256) {
          setPanelSize(256);
        } else {
          setPanelSize(panelSize() + grabbedX - evt.clientX);
        }
      }
      isGrabbed = false;
    }
  };

  onMount(() => {
    window.addEventListener('mousemove', onMouseMove, { passive: false });
    window.addEventListener('mouseup', onMouseUp, { passive: false });
  });

  onCleanup(() => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  });

  return (
    <div
      class="container"
      style={{
        width: `${panelSize()}px`,
      }}
    >
      <div class="resize-handle" onMouseDown={onMouseDown}></div>
      <div>
        <input type="number" />
      </div>
    </div>
  );
};

export default ControlPanel;
