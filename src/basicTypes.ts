let isDone: boolean = false;

let decimal: number = 5;

let color: string = 'My name';

// Array of numbers
let list: number[] = [1,2,3,4];

// Other way of representing
let list1: Array<number> = [1,2,3];

// Tuple
let x: [string, number] = ['Hello', 5];

// Enum
enum Color {
  Red,
  Green,
  Blue,
}

// Unknown
// This assume it can be anything
let now: unknown = 4;

// Any
// Maybe opt out of type checking
// We use Any
declare function getValue(key: string): any {
  return key;
}
const str: string = getValue('my Name');

// Void, in the absence of no return
function warnUser(): void {
  console.log('This is a warning message') 
}

// Type assertions
let someValue: unknown = 'this is a string';
let strLength: number = (someValue as string).length;
// or
let strrLength: number = (<string>someValue).length;

