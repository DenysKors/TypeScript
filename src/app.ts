const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function sumNumbers(num1: number, num2: number) {
	return num1 + num2;
}

button.addEventListener("click", function () {
	console.log(sumNumbers(Number(input1.value), Number(input2.value)));
});

let age: number;
let userName: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback: (a: number) => number;

let anything: any;

let some: unknown;
some = "Text";
let str: string;
if (typeof some === "string") {
	str = some;
}

let person: [string, number];

enum Status {
	LOADING,
	READY,
}
const page = {
	load: Status.READY,
};

if (page.load === Status.LOADING) {
	console.log("Страница загружается");
}
if (page.load === Status.READY) {
	console.log("Страница загружена");
}

let param: string | number;
let specParam: "enable" | "disable";

function showMessaage(message: string): void {
	console.log(message);
}

function calc(num1: number, num2: number): number {
	return num1 + num2;
}

function customError(): never {
	throw new Error("Error");
}

type CustomPage = {
	title: string;
	likes: number;
	accounts: string[];
	status: "open" | "close";
	details?: { createAt: Date; updateAt: Date };
};

abstract class House {
	protected door = false;
	private tenants: Person[] = [];
	constructor(protected key: Key) {}
	comeIn(person: Person): void {
		if (!this.door) {
			throw new Error("It is not your door");
		}
		this.tenants.push(person);
		console.log("You are in");
	}
	abstract openDoor(key: Key): boolean;
}

class Key {
	private signature: number;
	constructor() {
		this.signature = Math.random();
	}
	getSignature() {
		return this.signature;
	}
}

class Person {
	constructor(private key: Key) {}
	getKey(): Key {
		return this.key;
	}
}

class MyHouse extends House {
	openDoor(key: Key) {
		if (key.getSignature() !== this.key.getSignature()) {
			throw new Error("This key is not allowed");
		}
		return (this.door = true);
	}
}

const doorKey = new Key();
const randomHouse = new MyHouse(doorKey);
const randomPerson = new Person(doorKey);
randomHouse.openDoor(randomPerson.getKey());
randomHouse.comeIn(randomPerson);
