import type { Metadata } from 'next';
import HeroShowcase from '../../../components/cirelia/HeroShowcase';
import Pricing from '../../../components/cirelia/Pricing';
import Compare from '../../../components/cirelia/Compare';
import Reveal from '../../../components/cirelia/Reveal';
import VideoPlayer from '../../../components/cirelia/VideoPlayer';
import { parseVideoUrl } from '../../../components/cirelia/video';
import { HeroCopy, PayStrip, ProductRows, DayToDay, Included, Steps, Extras, Faq, FinalCta, Head } from '../../../components/cirelia/Sections';
import '../../../components/cirelia/pv.css';
import { PLANS } from '@/lib/cirelia/plans';
import { waLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Cirelia Business · Planes y precios',
  description: 'Tienda en línea, caja, pedidos e inventario en un solo panel, para negocios de Costa Rica. Planes desde USD 99.99 al mes, con la implementación hecha por nosotros.',
};

/**
 * Copia fiel de la página /planes de Cirelia Business (mismas secciones, mismas capturas, mismo orden),
 * dentro de la navegación de Nexflow. Los precios salen de src/lib/cirelia/plans.ts: si cambian en Cirelia,
 * se actualizan ahí también. El video usa la misma variable que Cirelia: PLANES_VIDEO_URL.
 */
export default function CireliaBusinessPage() {
  const cta = waLink('Hola Nexflow, me interesa Cirelia Business para mi negocio.');
  const trialDays = Math.max(0, ...PLANS.map((p) => p.trialDays));
  const video = parseVideoUrl(process.env.PLANES_VIDEO_URL);

  return (
    <div className="pv">
      <Reveal />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 sm:pt-24 pb-20 sm:pb-28">
        <HeroCopy trialDays={trialDays} />
        <div className="mt-12 sm:mt-16" data-rv="2">
          {video ? <div className="max-w-5xl mx-auto"><VideoPlayer video={video} duration="5 min" /></div> : <HeroShowcase />}
        </div>
      </section>

      <PayStrip />

      <section id="producto" className="max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32 scroll-mt-16" aria-labelledby="pv-prod">
        <Head title={<span id="pv-prod">Lo que vas a usar todos los días.</span>}
          sub="Estas son capturas reales del panel y de una tienda hecha con Cirelia, no maquetas." />
        {video && <div className="mt-14 sm:mt-20"><HeroShowcase /></div>}
        <div className="mt-24 sm:mt-32"><ProductRows /></div>
      </section>

      <DayToDay />
      <Included />
      <Steps />

      <section id="precios" className="py-24 sm:py-32 scroll-mt-16" style={{ background: 'var(--pv-bg-2)' }} aria-labelledby="pv-price">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Head center title={<span id="pv-price">Una mensualidad por la plataforma. La implementación se paga una vez.</span>}
            sub="Empezá con el plan que te calza hoy y subí cuando lo necesités. Los precios están en dólares." />
          <div className="mt-12"><Pricing plans={PLANS} generalCta={cta} /></div>
          <div id="comparar" className="mt-24 scroll-mt-20">
            <Head title="Qué cambia de un plan a otro." />
            <div className="mt-10"><Compare plans={PLANS} /></div>
          </div>
          <Extras />
        </div>
      </section>

      <Faq cta={cta} />
      <FinalCta cta={cta} />
    </div>
  );
}
