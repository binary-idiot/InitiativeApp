export function isNonNull<T>(value: T): value is NonNullable<T> {
  return value != null;
}

export function nameOf<T>(name: Extract<keyof T, string>): string {
  return name;
}
