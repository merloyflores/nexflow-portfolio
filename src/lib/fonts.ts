import { Sora } from 'next/font/google';

// Fuente de titulares. Se expone como variable CSS (--font-display):
// cada página envuelve su contenido con `display.variable` y los componentes la heredan.
export const display = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});