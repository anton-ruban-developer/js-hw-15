class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }
  set width(value) {
    this._width = value;
  }
  get height() {
    return this._height;
  }
  set height(value) {
    this._height = value;
  }

  getArea() {
    return this._width * this._height;
  }
  getPerimeter() {
    return (this._width + this._height) * 2;
  }
}

const rectangle1 = new Rectangle(8, 4);

console.log(rectangle1.getArea());
console.log(rectangle1.getPerimeter());
console.log(rectangle1.width);
console.log(rectangle1.height);

rectangle1.width = 10;
rectangle1.height = 12;

console.log(rectangle1.width);
console.log(rectangle1.height);
