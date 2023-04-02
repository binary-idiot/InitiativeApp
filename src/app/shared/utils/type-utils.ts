export function isNonNull<T>(value: T): value is NonNullable<T> {
  return value != null;
}

export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isNumeric(value: unknown): boolean {
  return !Number.isNaN(Number(value));
}

export function nameOf<T>(name: Extract<keyof T, string>): string {
  return name;
}
