import localFont from 'next/font/local';

/**
 * v6 · Dos familias, cada una con un solo trabajo:
 * - Geist: títulos y texto. Sobria, moderna y muy legible; los títulos van en semibold con poco espacio entre letras.
 * - Bricolage Grotesque: solo el logotipo «Nexflow Digital» (en tamaño chico se ve amable y es parte de la marca).
 * Los archivos están dentro del proyecto (src/fonts), así el build no depende de bajarlos de Google cada vez.
 * Ambas son de licencia libre (SIL Open Font License). Sin cursivas en ningún lado.
 */
export const sans = localFont({ src: '../fonts/geist.woff2', variable: '--font-geist', display: 'swap', weight: '100 900' });
export const brand = localFont({ src: '../fonts/bricolage-latin.woff2', variable: '--font-brand', display: 'swap', weight: '400 600' });

/**
 * Geist no trae el signo de colón (₡). Este archivo chiquito (1 KB) tiene solo ese signo, tomado de Inter, que es
 * muy parecida. Va primero en la lista de letras pero solo se usa para ₡ (unicode-range), el resto sigue en Geist.
 */
export const colon = localFont({ src: '../fonts/colon.woff2', variable: '--font-colon', display: 'swap', weight: '400 700', adjustFontFallback: false, declarations: [{ prop: 'unicode-range', value: 'U+20A1' }] });
