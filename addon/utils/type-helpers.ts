/**
 * Gets the constructor / class from an instance type.
 *
 * From `ts-std`.
 */
export interface Constructor<T = unknown> {
  new (...args: any[]): T;
}

/**
 * All values on the object `Obj`.
 */
export type Values<Obj> = Obj[keyof Obj];

/**
 * All keys of `Obj` that have a value of type `T`.
 */
export type PropertiesOfType<Obj, T> = Values<
  { [K in keyof Obj]: Obj[K] extends T ? K : never }
>;
