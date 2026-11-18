const { test } = require("node:test");
const assert = require("node:assert");
const { soma, subtrai, multiplica, divide } = require("../dist/calculadora");

test("soma dois números", () => assert.strictEqual(soma(2, 3), 5));
test("subtrai dois números", () => assert.strictEqual(subtrai(7, 4), 3));
test("multiplica dois números", () => assert.strictEqual(multiplica(6, 5), 30));
test("divide dois números", () => assert.strictEqual(divide(9, 3), 3));
test("lança erro ao dividir por zero", () => {
  assert.throws(() => divide(1, 0), /Divisão por zero/);
});
