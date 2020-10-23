/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-useless-constructor */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import util from "util";

type MaybePatterns<T, U> =
  | { Just: (value: T) => U; Nothing: () => U }
  | { _: () => U };

const maybeInspect = util.inspect.custom;

export class Maybe<T> {
  constructor(private $value: T) {}

  static of<U>(value: U) {
    return new Maybe(value);
  }

  get isNothing() {
    return this.$value === null || this.$value === undefined;
  }

  map<U>(fn: (value: T) => U): this | Maybe<U> {
    return this.isNothing ? this : Maybe.of(fn(this.$value));
  }

  inspect() {
    return this.isNothing ? "Nothing" : `Just(${JSON.stringify(this.$value)})`;
  }

  [maybeInspect]() {
    return this.inspect();
  }

  chain<U>(fn: (value: T) => U) {
    return this.isNothing ? this : fn(this.$value);
  }

  fork<U>(f: () => U, g: (value: T) => U) {
    return this.isNothing ? f() : g(this.$value);
  }

  caseOf<U>(patterns: MaybePatterns<T, U>): U {
    return "_" in patterns ? patterns._() : patterns.Just(this.$value);
  }

  emit() {
    return this.$value;
  }
}
