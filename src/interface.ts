function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: 'size 10 Object' };

console.log(printLabel(myObj));

interface LabeledValue {
  label: string;
}

function labeledValue(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}
let myObj2 = { size: 10, label: 'size 10 Object' };
console.log(labeledValue(myObj2))

// Optional properties
interface FullName {
  name?: string;
  sex?: string;
  width?: number;
}

// Readonly property
interface Input {
  readonly x: number;
  readonly y: number;
}
