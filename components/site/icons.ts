import { Globe, Store, Workflow, Smartphone } from 'lucide-react';
import type { ServiceId } from '@/lib/site';

/** Un ícono por línea de servicio (menú, inicio y páginas). */
export const SERVICE_ICON: Record<ServiceId, typeof Globe> = { web: Globe, cirelia: Store, automatizacion: Workflow, apps: Smartphone };
