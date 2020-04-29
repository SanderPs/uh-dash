import x from '../../node_modules/punycode';

export function utf16(cp: number) {
  return x.ucs2.encode([cp]);
}
