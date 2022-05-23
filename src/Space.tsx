import { Component, onMount } from 'solid-js';
import { Body } from './models/Body';
import { Vec2 } from './models/Vec2';

const Space: Component<{ G: number; bodies: Body[] }> = (props) => {
  const init = () => {
    const canvas = document.getElementById('screen') as HTMLCanvasElement;
    canvas.width = window.visualViewport.width;
    canvas.height = window.visualViewport.height;

    canvas.style.width = `${window.visualViewport.width}px`;
    canvas.style.height = `${window.visualViewport.height}px`;
    return canvas;
  };

  const drawBodies = (ctx: CanvasRenderingContext2D, bodies: Body[]) => {
    bodies.forEach((body) => {
      ctx.beginPath();
      ctx.arc(body.pos.X, body.pos.Y, body.radius, 0, 2 * Math.PI);
      ctx.fillStyle = body.color;
      ctx.fill();
      ctx.closePath();
    });
  };

  const updateForces = (G: number, bodies: Body[]) => {
    bodies.forEach((body) => {
      bodies.forEach((other) => {
        if (body != other) {
          const sub = Vec2.subtract(other.pos, body.pos);
          const r = sub.magnitude(); // sqrt distance
          const fDir = sub.normalize(); // direction of the force

          const f = new Vec2(
            (fDir.X * G * body.mass * other.mass) / r,
            (fDir.Y * G * body.mass * other.mass) / r
          );

          const acceleration = new Vec2(f.X / body.mass, f.Y / body.mass);

          body.addVelocity(acceleration);
        }
      });
    });
  };

  const updatePositions = (bodies: Body[]) => {
    bodies.forEach((body) => {
      body.updatePosition();
    });
  };

  onMount(() => {
    // init canvas
    const canvas = init();
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBodies(ctx, props.bodies);
      updateForces(props.G, props.bodies);
      updatePositions(props.bodies);
    }, 5);
  });

  return <canvas id="screen" />;
};

export default Space;
