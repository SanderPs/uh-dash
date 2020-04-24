import x from '../../node_modules/punycode';

export function utf16(cp: number) {
  return x.ucs2.encode([cp]);
}
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}
