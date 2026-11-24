import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '../../components/site/ui';
import { SERVICES } from '@/lib/site';

export default function NotFound() {
  return (
    <Container className="pt-20 sm:pt-28 pb-24 sm:pb-32">
      <div className="max-w-2xl">
        <p className="index">404</p>
        <h1 className="t-h1 mt-6">Esta página no existe.</h1>
        <p className="t-lead mt-5">Puede que el enlace haya cambiado. Estas son las secciones principales:</p>
        <ul className="mt-10 border-t b">
          {[...SERVICES.map((s) => ({ href: s.href, label: s.name })), { href: '/clinicas', label: 'Sistemas para clínicas' }, { href: '/proyectos', label: 'Proyectos' }, { href: '/contacto', label: 'Contacto' }].map((l) => (
            <li key={l.href} className="border-b b">
              <Link href={l.href} className="group flex items-center justify-between py-4 font-semibold">{l.label}<ArrowRight size={16} className="muted transition-transform group-hover:translate-x-1" /></Link>
            </li>
          ))}
        </ul>
        <Link href="/" className="btn btn-ink mt-10">Volver al inicio</Link>
      </div>
    </Container>
  );
}
