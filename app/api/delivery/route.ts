import { NextRequest, NextResponse } from "next/server";

interface DeliveryRate {
  costo: number;
  tiempo: string;
}

interface RatesMap {
  [key: string]: DeliveryRate | string;
  _default: DeliveryRate;
}

// Cargado una vez por instancia de función — nunca llega al cliente
// Para migrar a Vercel KV: reemplaza esta importación con una consulta a KV
import rates from "../../../data/delivery-rates.json";

export async function GET(request: NextRequest) {
  const barrio = request.nextUrl.searchParams.get("barrio")?.toLowerCase().trim();

  if (!barrio) {
    return NextResponse.json({ error: "barrio requerido" }, { status: 400 });
  }

  const ratesMap = rates as unknown as RatesMap;

  // Búsqueda exacta primero, luego parcial
  let rate: DeliveryRate | null = null;

  if (barrio in ratesMap && barrio !== "_comment") {
    rate = ratesMap[barrio] as DeliveryRate;
  } else {
    // Búsqueda parcial: "pobl" encuentra "el poblado"
    const match = Object.keys(ratesMap).find(
      (k) => k !== "_comment" && k !== "_default" && k.includes(barrio)
    );
    if (match) rate = ratesMap[match] as DeliveryRate;
  }

  if (!rate) {
    rate = ratesMap._default;
  }

  return NextResponse.json(rate);
}
