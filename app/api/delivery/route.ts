import { NextRequest, NextResponse } from "next/server";
import rates from "../../../data/delivery-rates.json";

interface DeliveryRate { costo: number; tiempo: string; }
interface RatesMap {
  [key: string]: DeliveryRate | string;
  _default: DeliveryRate;
}

export async function GET(request: NextRequest) {
  const barrio = request.nextUrl.searchParams.get("barrio")?.toLowerCase().trim();

  if (!barrio) {
    return NextResponse.json({ error: "barrio requerido" }, { status: 400 });
  }

  const ratesMap = rates as unknown as RatesMap;
  const SKIP = new Set(["_comment", "_default"]);

  let rate: DeliveryRate | null = null;

  // Exacto
  if (!SKIP.has(barrio) && barrio in ratesMap) {
    rate = ratesMap[barrio] as DeliveryRate;
  } else {
    // Parcial: "pobl" encuentra "el poblado"
    const match = Object.keys(ratesMap).find(
      (k) => !SKIP.has(k) && (k.includes(barrio) || barrio.includes(k))
    );
    if (match) rate = ratesMap[match] as DeliveryRate;
  }

  return NextResponse.json(rate ?? ratesMap._default);
}
