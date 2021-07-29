import 'normalize.css';
import TodoInstance from './todoInstance';

const test = new TodoInstance("hello", null, null, null);

console.log(test.getTitle());
console.log(TodoInstance.prototype.title);
