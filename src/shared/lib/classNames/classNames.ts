type Mods = Record<string, boolean | string>;

export const classNames = (
  baseClass: string,
  additional: string[] = [],
  mods: Mods = {}
) =>
  [
    baseClass,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter((_, value) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
