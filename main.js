import Matter from './lib/matter-dev';
import Entity from './src/entity';
const { Engine, Render, World } = Matter;

// 创建引擎
const engine = Engine.create();
// 创建渲染器
const render = Render.create({
  element: canvas,
  engine: engine
});

World.add(engine.world, Entity.bodies);

Engine.run(engine);
Render.run(render);