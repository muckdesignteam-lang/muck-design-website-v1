import Image from "next/image";

// Photo grid used by every project page: equal tiles, 3 per row (2 per row on phones),
// an incomplete last row is centered. Item = [src, alt, "contain"?]
export type PdItem = readonly string[];

export function PdGrid({ items, cols }: { items: readonly PdItem[]; cols?: 2 | 3 }) {
  const c = cols ?? (items.length === 2 || items.length === 4 ? 2 : 3);
  return (
    <div className={`pdGrid pdc${c}`}>
      {items.map(([src, alt = "", fit]) => (
        <figure className="pdItem" key={src}>
          <div className={fit === "contain" ? "pdFrame fit" : "pdFrame"}>
            <Image src={src} alt={alt} fill quality={90} sizes="(max-width:900px) 50vw, 33vw" />
          </div>
        </figure>
      ))}
    </div>
  );
}
