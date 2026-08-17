import { promises as fs } from "fs";
import path from "path";

/**
 * Almacenamiento SIMULADO de leads para desarrollo/demo.
 *
 * Escribe cada registro en /data/leads.local.json (ignorado por git).
 * Esto NO es una base de datos de producción: es un stub documentado
 * para que el formulario funcione end-to-end mientras se conecta un
 * proveedor real (ConvertKit, Brevo o MailerLite — ver README).
 *
 * Para producción: reemplaza `saveLead` por una llamada a la API del
 * proveedor de email elegido, o por un cliente de base de datos real.
 */

const LEADS_FILE = path.join(process.cwd(), "data", "leads.local.json");

export type Lead = {
  name: string;
  email: string;
  profession?: string;
  source: string;
  consent: boolean;
  createdAt: string;
};

export async function saveLead(lead: Lead): Promise<void> {
  let existing: Lead[] = [];
  try {
    const raw = await fs.readFile(LEADS_FILE, "utf-8");
    existing = JSON.parse(raw);
  } catch {
    existing = [];
  }
  existing.push(lead);
  await fs.writeFile(LEADS_FILE, JSON.stringify(existing, null, 2), "utf-8");
}
