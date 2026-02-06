"use client";

import { useMemo, useState } from "react";
import RoomCard from "./RoomCard";
import AddRoomCard from "./AddRoomCard";
import RightPanel from "./RightPanel";
import BottomNav from "./BottomNav";

type Zone = { id: string; name: string; description?: string | null };
type Station = {
  id: string;
  zone_id: string;
  code: string;
  type: "PS" | "PC";
  status: "free" | "busy" | "reserved";
  base_hour_price: number;
};

export default function DashboardClient({
  zones,
  stations,
}: {
  zones: Zone[];
  stations: Station[];
}) {
  const byZone = useMemo(() => {
    const m = new Map<string, Station[]>();
    for (const s of stations) {
      m.set(s.zone_id, [...(m.get(s.zone_id) ?? []), s]);
    }
    return m;
  }, [stations]);

  const items = useMemo(() => {
    return zones.map((z) => {
      const list = byZone.get(z.id) ?? [];
      const total = list.length;
      const busy = list.filter((x) => x.status === "busy").length;
      const free = list.filter((x) => x.status === "free").length;
      const reserved = list.filter((x) => x.status === "reserved").length;
      const ps = list.filter((x) => x.type === "PS").length;
      const pc = list.filter((x) => x.type === "PC").length;

      const minPrice =
        list.length > 0
          ? Math.min(...list.map((x) => Number(x.base_hour_price ?? 0)))
          : 0;

      const badge = free === 0 && total > 0 ? "FULL" : "AVAILABLE";

      return {
        zone: z,
        stations: list,
        total,
        busy,
        free,
        reserved,
        ps,
        pc,
        minPrice,
        badge,
      };
    });
  }, [zones, byZone]);

  const [selectedId, setSelectedId] = useState(items[0]?.zone.id ?? "");
  const selected = items.find((x) => x.zone.id === selectedId) ?? items[0];

  return (
    <div className="glass" style={{ marginTop: 14, padding: 14 }}>
      {/* Board header (rasmdagi kabi) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div
          className="pill"
          style={{
            padding: "10px 14px",
            fontWeight: 950,
            display: "flex",
            gap: 10,
            alignItems: "center",
          }}
        >
          🎮 Rooms
        </div>

        <button className="btn" onClick={() => alert("Keyin: Add Room modal")}>
          ＋ Add Room
        </button>
      </div>

      {/* Grid (rasmdagi 3 ustun) */}
      <div
        className="grid3"
        style={{
          marginTop: 14,
          alignItems: "start",
        }}
      >
        {/* Chap+o‘rta cardlar */}
        {items.slice(0, 2).map((x) => (
          <RoomCard
            key={x.zone.id}
            active={x.zone.id === selectedId}
            title={x.zone.name}
            badge={x.badge as any}
            capacityText={`${x.busy} / ${x.total}`}
            metaLeft={`${x.ps} PS · ${x.pc} PC`}
            metaRight={x.free > 0 ? `${x.free} free` : `${x.reserved} reserved`}
            deviceLabel={x.ps >= x.pc ? "PlayStation" : "PC"}
            devicePrice={x.minPrice ? `${money(x.minPrice)} / soat` : "—"}
            footerPrice={x.minPrice ? `${money(x.minPrice)} / soat` : "—"}
            onClick={() => setSelectedId(x.zone.id)}
          />
        ))}

        {/* O‘ng yuqori “Add Room” katta karta */}
        <AddRoomCard onClick={() => alert("Keyin: Add Room modal")} />

        {/* Qolgan cardlar */}
        {items.slice(2, 8).map((x) => (
          <RoomCard
            key={x.zone.id}
            active={x.zone.id === selectedId}
            title={x.zone.name}
            badge={x.badge as any}
            capacityText={`${x.busy} / ${x.total}`}
            metaLeft={`${x.ps} PS · ${x.pc} PC`}
            metaRight={x.free > 0 ? `${x.free} free` : `${x.reserved} reserved`}
            deviceLabel={x.ps >= x.pc ? "PlayStation" : "PC"}
            devicePrice={x.minPrice ? `${money(x.minPrice)} / soat` : "—"}
            footerPrice={x.minPrice ? `${money(x.minPrice)} / soat` : "—"}
            onClick={() => setSelectedId(x.zone.id)}
          />
        ))}

        {/* Right big details panel */}
        <RightPanel
          title={selected?.zone.name ?? "—"}
          desc={selected?.zone.description ?? null}
          stations={selected?.stations ?? []}
          onAddBooking={() => alert("Keyin: Add Booking modal")}
        />
      </div>

      <BottomNav />
    </div>
  );
}

function money(n: number) {
  try {
    return new Intl.NumberFormat("uz-UZ").format(n);
  } catch {
    return String(n);
  }
}
