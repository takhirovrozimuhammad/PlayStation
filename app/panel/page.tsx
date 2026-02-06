"use client";

import { useMemo, useState } from "react";
import TopHeader from "../../components/dashboard/TopHeader";
import BoardHeader from "../../components/dashboard/BoardHeader";
import RoomCard from "../../components/dashboard/RoomCard";
import AddRoomCard from "../../components/dashboard/AddRoomCard";
import RightPanel from "../../components/dashboard/RightPanel";
import BottomNav from "../../components/dashboard/BottomNav";
import Modal from "../../components/ui/Modal";

type RoomStatus = "FULL" | "AVAILABLE" | "BUSY";
type RoomType = "PS" | "PC";

type Room = {
  id: string;
  title: string;
  type: RoomType;
  status: RoomStatus;
  capacityText?: string;
  metaLeft: string;
  metaRight?: string;
  deviceLabel: string;
  devicePrice: string;
  footerPrice: string;
};

const DEMO: Room[] = [
  { id:"vip", title:"VIP Room", type:"PS", status:"FULL", metaLeft:"$4.00 / hour", deviceLabel:"PS5 Pro", devicePrice:"$4.00 / hour", footerPrice:"$8.00" },
  { id:"mainA", title:"Main Room A", type:"PS", status:"FULL", metaLeft:"1 hour 30 min - $4.50", metaRight:"00.20min", deviceLabel:"PS5", devicePrice:"$4.50", footerPrice:"$4.50" },
  { id:"sonyB", title:"Sony Room B", type:"PS", status:"BUSY", capacityText:"2 / 4", metaLeft:"1 hour - $3.00", metaRight:"00.40min", deviceLabel:"PS4 Pro", devicePrice:"$3.00", footerPrice:"$3.00" },
  { id:"classic", title:"Classic Room", type:"PS", status:"BUSY", metaLeft:"1 hour - $3.00", metaRight:"00.40min", deviceLabel:"PS4", devicePrice:"$3.00", footerPrice:"$3.00" },
  { id:"pcC1", title:"PC Room C", type:"PC", status:"BUSY", capacityText:"3 / 5", metaLeft:"", metaRight:"", deviceLabel:"PC Room C", devicePrice:"$2.50 / hour", footerPrice:"$2.50 / hour" },
  { id:"pcC2", title:"PC Room C", type:"PC", status:"BUSY", metaLeft:"", metaRight:"", deviceLabel:"PC Room C", devicePrice:"$5.00", footerPrice:"$2.50 / hour" },
  { id:"pcD", title:"PC Room D", type:"PC", status:"AVAILABLE", metaLeft:"2 hours - $5.00", metaRight:"01h.05min", deviceLabel:"PC Room D", devicePrice:"$2.00", footerPrice:"$2.00" },
];

export default function PanelPage(){
  const [selectedId, setSelectedId] = useState(DEMO[0].id);
  const [openModal, setOpenModal] = useState<null | "booking" | "room">(null);

  const selected = useMemo(() => DEMO.find(r => r.id === selectedId) ?? DEMO[0], [selectedId]);

  return (
    <main style={{padding:18, maxWidth: 1320, margin:"0 auto"}}>
      <TopHeader
        brand="RIDZHAN"
        subbrand="SAAS"
        role="Admin"
        balance="152,000"
        onAddBooking={() => setOpenModal("booking")}
      />

      <div className="glass" style={{ marginTop: 14, padding: 14 }}>
        <BoardHeader
          title="Rooms"
          onAddRoom={() => setOpenModal("room")}
        />

        <div
          className="grid3"
          style={{
            marginTop: 14,
            display: "grid",
            gap: 12,
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            alignItems: "start",
          }}
        >
          {DEMO.slice(0,2).map((r) => (
            <RoomCard
              key={r.id}
              room={r}
              active={r.id === selectedId}
              onClick={() => setSelectedId(r.id)}
            />
          ))}

          <AddRoomCard onClick={() => setOpenModal("room")} />

          {DEMO.slice(2,6).map((r) => (
            <RoomCard
              key={r.id}
              room={r}
              active={r.id === selectedId}
              onClick={() => setSelectedId(r.id)}
            />
          ))}

          <RoomCard
            room={DEMO[6]}
            active={DEMO[6].id === selectedId}
            onClick={() => setSelectedId(DEMO[6].id)}
          />

          <RightPanel room={selected} onQuickAction={() => setOpenModal("booking")} />
        </div>

        <BottomNav />
      </div>

      <Modal
        open={openModal !== null}
        title={openModal === "booking" ? "Add Booking" : "Add Room"}
        onClose={() => setOpenModal(null)}
      >
        {openModal === "booking" ? (
          <div style={{display:"grid", gap:10}}>
            <div className="muted">Demo modal. Keyin bu yerga booking form qo'yamiz.</div>
            <div className="pill" style={{padding:"10px 12px"}}>Selected: <b>{selected.title}</b></div>
            <div style={{display:"grid", gap:8}}>
              <input placeholder="Client name" style={inputStyle} />
              <input placeholder="Phone" style={inputStyle} />
              <input placeholder="Minutes / Hours" style={inputStyle} />
            </div>
            <div style={{display:"flex", gap:10, justifyContent:"flex-end"}}>
              <button className="btn" onClick={() => setOpenModal(null)}>Close</button>
              <button className="btn" onClick={() => setOpenModal(null)}>Save</button>
            </div>
          </div>
        ) : (
          <div style={{display:"grid", gap:10}}>
            <div className="muted">Demo modal. Keyin bu yerga room/station create qo'yamiz.</div>
            <div style={{display:"grid", gap:8}}>
              <input placeholder="Room name" style={inputStyle} />
              <select style={inputStyle as any}>
                <option>PS</option>
                <option>PC</option>
              </select>
              <input placeholder="Price per hour" style={inputStyle} />
            </div>
            <div style={{display:"flex", gap:10, justifyContent:"flex-end"}}>
              <button className="btn" onClick={() => setOpenModal(null)}>Close</button>
              <button className="btn" onClick={() => setOpenModal(null)}>Save</button>
            </div>
          </div>
        )}
      </Modal>
    </main>
  )
}

const inputStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderRadius: 14,
  border: "1px solid rgba(40,40,60,.18)",
  background: "rgba(255,255,255,.70)",
  outline: "none",
  fontWeight: 700
};
