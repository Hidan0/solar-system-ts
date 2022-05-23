import { Vec2 } from './Vec2';

export class Body {
  protected _position: Vec2;
  protected _velocity: Vec2;
  protected _mass: number;
  protected _r: number;
  protected _color: string;
  protected _name: string;
  protected _isSelected = false;

  constructor(
    position: Vec2,
    initialVelocity: Vec2,
    mass: number,
    radius: number,
    color: string | null,
    name: string | null
  ) {
    this._position = position;
    this._velocity = initialVelocity;
    this._mass = mass;
    this._r = radius;
    if (color == null) {
      this._color = '#000';
    } else {
      this._color = color;
    }
    this._name = name ? name : 'no-named-body';
  }

  public get pos() {
    return this._position;
  }

  public get radius() {
    return this._r;
  }

  public get color() {
    return this._color;
  }

  public get mass() {
    return this._mass;
  }

  public addVelocity(vel: Vec2) {
    this._velocity.add(vel);
  }

  public updatePosition() {
    this._position.add(this._velocity);
  }
}
