export default class Car {
  construcor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._volor = color;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._notor, this._color);
  }
}
