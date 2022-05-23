export class Vec2 {
  static add(v1: Vec2, v2: Vec2) {
    return new Vec2(v1.X + v2.X, v1.Y + v2.Y);
  }

  static subtract(v1: Vec2, v2: Vec2) {
    return new Vec2(v1.X - v2.X, v1.Y - v2.Y);
  }

  protected _x: number;
  protected _y: number;
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  public get X() {
    return this._x;
  }

  public get Y() {
    return this._y;
  }

  public magnitude(): number {
    return this._x * this._x + this._y * this._y;
  }

  public normalize(): Vec2 {
    const len = this.magnitude();
    return new Vec2(this._x / len, this._y / len);
  }

  public add(other: Vec2) {
    this._x += other._x;
    this._y += other._y;
  }
}
