const CANVAS_SIZE: number[] = [600, 600];

const SNAKE_START: number[][] = [[4, 4]];

const APPLE_START: number[] = [8, 3];

const SCALE: number = 40;

const SPEED: number = 100;

const DIRECTIONS: { name: string; key: number; value: number[] }[] = [
  { name: "up", key: 38, value: [0, -1] },
  { name: "down", key: 40, value: [0, 1] },
  { name: "left", key: 37, value: [-1, 0] },
  { name: "right", key: 39, value: [1, 0] },
];

export { CANVAS_SIZE, SNAKE_START, APPLE_START, SCALE, SPEED, DIRECTIONS };
