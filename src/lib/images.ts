/**
 * Imagens do Pexels (livres pra uso). Verificadas — todas retornam 200.
 * Usadas como background-image com overlay (não precisa configurar next/image).
 */

const base = (id: number, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMG = {
  // Hero / mapa de jornada
  hero: base(16155637, 1920),
  mapa: base(4911178, 1920),

  // Por módulo (decorativas — náuticas)
  intro: base(4911178),
  prompting: base(6761422),
  metaprompt: base(4928895),
  harness: base(5416221),
  conselho: base(8748977),
  skills: base(4934529),
  mcps: base(4911005),
  research: base(4934612),
  bastidores: base(4911169),
  diploma: base(4911151),

  // thumbs menores pros nós do mapa
  thumb: (id: keyof typeof IMG_IDS, w = 400) => base(IMG_IDS[id], w),
};

export const IMG_IDS = {
  intro: 4911178,
  prompting: 6761422,
  metaprompt: 4928895,
  harness: 5416221,
  conselho: 8748977,
  skills: 4934529,
  mcps: 4911005,
  research: 4934612,
  bastidores: 4911169,
  diploma: 4911151,
} as const;
