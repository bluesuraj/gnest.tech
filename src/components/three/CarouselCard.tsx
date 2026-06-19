"use client";

import React from "react";

// ── CSS transform per position ──────────────────────────────────────────────
const POS_STYLES: Record<number, React.CSSProperties> = {
  0: {
    transform: "translateZ(0px) rotateY(0deg)",
    opacity: 1,
    filter: "none",
    zIndex: 5,
  },
  1: {
    transform: "translateX(190px) translateZ(-130px) rotateY(-28deg)",
    opacity: 0.55,
    filter: "brightness(0.75)",
    zIndex: 4,
  },
  2: {
    transform: "translateX(310px) translateZ(-300px) rotateY(-46deg)",
    opacity: 0.18,
    filter: "brightness(0.55)",
    zIndex: 3,
  },
  3: {
    transform: "translateX(-310px) translateZ(-300px) rotateY(46deg)",
    opacity: 0.18,
    filter: "brightness(0.55)",
    zIndex: 3,
  },
  4: {
    transform: "translateX(-190px) translateZ(-130px) rotateY(28deg)",
    opacity: 0.55,
    filter: "brightness(0.75)",
    zIndex: 4,
  },
};

// ── Shared micro-components ─────────────────────────────────────────────────

function CardSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[10px] border border-espresso/8 bg-cream/60 px-3 py-2.5 ${className}`}
    >
      {children}
    </div>
  );
}

function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.1em] text-espresso/40">
      {children}
    </p>
  );
}

function ProgressBar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-espresso/10">
      <div
        className="h-full rounded-full"
        style={{ width: `${pct}%`, background: color }}
      />
    </div>
  );
}

function RowItem({
  label,
  value,
  valueClass = "",
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-espresso/8 py-1 last:border-0">
      <span className="text-[11px] text-espresso/60">{label}</span>
      <span className={`text-[11px] font-semibold ${valueClass}`}>{value}</span>
    </div>
  );
}

function MiniCard({
  label,
  value,
  valueClass = "",
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="rounded-lg border border-espresso/8 bg-cream/60 px-2.5 py-2 text-center">
      <p className="text-[9px] text-espresso/40">{label}</p>
      <p className={`mt-0.5 text-[15px] font-bold ${valueClass}`}>{value}</p>
    </div>
  );
}

function StatusPill({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "live" | "warn" | "info" | "danger";
}) {
  const cls = {
    live: "bg-leaf/10 text-leaf",
    warn: "bg-amber-100 text-amber-700",
    info: "bg-terracotta/10 text-terracotta",
    danger: "bg-red-50 text-red-600",
  }[variant];
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${cls}`}
    >
      {children}
    </span>
  );
}

// ── Card content per index ───────────────────────────────────────────────────

function DashboardCard() {
  return (
    <>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-terracotta/10 text-base">
            📊
          </div>
          <div>
            <p className="text-[13px] font-semibold text-espresso">Dashboard</p>
            <p className="text-[10px] text-espresso/40"> Today's overview</p>
          </div>
        </div>
        <StatusPill variant="live">Live</StatusPill>
      </div>

      <CardSection className="mb-2">
        <div className="mb-1 flex items-baseline justify-between">
          <span className="text-[10px] text-espresso/40">Today's revenue</span>
          <span className="text-[10px] font-semibold text-leaf">▲ 12.4%</span>
        </div>
        <p className="text-[22px] font-bold tracking-tight text-espresso">
          $8,420
          <span className="text-[13px] font-normal text-espresso/30">.50</span>
        </p>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-espresso/10">
          <div
            className="h-full rounded-full bg-terracotta"
            style={{ width: "72%" }}
          />
        </div>
        <p className="mt-1 text-[9px] text-espresso/40">72% of daily target</p>
      </CardSection>

      <div className="mb-2 grid grid-cols-2 gap-1.5">
        <MiniCard label="Orders" value="143" valueClass="text-terracotta" />
        <MiniCard label="Success rate" value="98%" valueClass="text-leaf" />
        <MiniCard label="Avg basket" value="$58" />
        <MiniCard label="Rating" value="5.0" />
      </div>

      <CardSection>
        <CardLabel>Recent transactions</CardLabel>
        <RowItem label="Espresso ×2" value="+$9.00" valueClass="text-leaf" />
        <RowItem label="Sandwich" value="+$12.50" valueClass="text-leaf" />
        <RowItem label="Juice combo" value="+$7.25" valueClass="text-leaf" />
      </CardSection>
    </>
  );
}

function CheckoutCard() {
  return (
    <>
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-emerald-50 text-base">
          ⚡
        </div>
        <div>
          <p className="text-[13px] font-semibold text-espresso">
            Speed Checkout
          </p>
          <p className="text-[10px] text-espresso/40">
            Scan &amp; pay instantly
          </p>
        </div>
      </div>

      <CardSection className="mb-3">
        <div className="flex flex-col items-center py-2">
          <p className="mb-2 text-[9px] uppercase tracking-wider text-espresso/30">
            Scan to pay
          </p>
          {/* QR — inline SVG so no external deps */}
          <svg
            width="88"
            height="88"
            viewBox="0 0 90 90"
            xmlns="http://www.w3.org/2000/svg"
            style={{ borderRadius: 8, border: "1px solid rgba(0,0,0,0.08)" }}
          >
            <rect width="90" height="90" fill="white" />
            <rect
              x="6"
              y="6"
              width="22"
              height="22"
              rx="3"
              fill="none"
              stroke="#C96F3D"
              strokeWidth="2.5"
            />
            <rect
              x="11"
              y="11"
              width="12"
              height="12"
              rx="1.5"
              fill="#C96F3D"
            />
            <rect
              x="62"
              y="6"
              width="22"
              height="22"
              rx="3"
              fill="none"
              stroke="#C96F3D"
              strokeWidth="2.5"
            />
            <rect
              x="67"
              y="11"
              width="12"
              height="12"
              rx="1.5"
              fill="#C96F3D"
            />
            <rect
              x="6"
              y="62"
              width="22"
              height="22"
              rx="3"
              fill="none"
              stroke="#C96F3D"
              strokeWidth="2.5"
            />
            <rect
              x="11"
              y="67"
              width="12"
              height="12"
              rx="1.5"
              fill="#C96F3D"
            />
            <rect
              x="36"
              y="36"
              width="18"
              height="3"
              rx="1"
              fill="#C96F3D"
              opacity=".5"
            />
            <rect
              x="36"
              y="42"
              width="12"
              height="3"
              rx="1"
              fill="#C96F3D"
              opacity=".4"
            />
            <rect
              x="36"
              y="48"
              width="18"
              height="3"
              rx="1"
              fill="#C96F3D"
              opacity=".4"
            />
            <line
              x1="4"
              y1="45"
              x2="86"
              y2="45"
              stroke="#C96F3D"
              strokeWidth="1.5"
              opacity="0.5"
              strokeDasharray="4 2"
            >
              <animate
                attributeName="y1"
                values="10;80;10"
                dur="2.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y2"
                values="10;80;10"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </line>
          </svg>
          <p className="mt-1.5 text-[10px] font-semibold text-terracotta">
            $24.99 · Awaiting scan…
          </p>
        </div>
      </CardSection>

      <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.1em] text-espresso/40">
        Accepted payments
      </p>
      <div className="mb-3 flex flex-wrap gap-1.5">
        {["💳 Card", "📱 NFC", "🏦 UPI", "💵 Cash"].map((p) => (
          <span
            key={p}
            className="rounded-md border border-espresso/10 bg-cream/60 px-2 py-0.5 text-[10px] font-medium text-espresso/60"
          >
            {p}
          </span>
        ))}
      </div>

      <CardSection>
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-espresso/50">
            Avg checkout time
          </span>
          <span className="text-[18px] font-bold text-terracotta">1.8s</span>
        </div>
      </CardSection>
    </>
  );
}

function InventoryCard() {
  const stocks = [
    { name: "Oat milk", pct: 84, color: "#1B7A4A", valClass: "text-leaf" },
    {
      name: "Espresso pods",
      pct: 41,
      color: "#B45309",
      valClass: "text-amber-700",
    },
    {
      name: "Arabica beans",
      pct: 8,
      color: "#DC2626",
      valClass: "text-red-600",
    },
    { name: "Paper cups", pct: 92, color: "#1B7A4A", valClass: "text-leaf" },
  ];

  return (
    <>
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-leaf/10 text-base">
          📦
        </div>
        <div>
          <p className="text-[13px] font-semibold text-espresso">
            Smart Inventory
          </p>
          <p className="text-[10px] text-espresso/40">Real-time stock alerts</p>
        </div>
      </div>

      <div className="mb-2 flex items-start gap-2 rounded-lg border border-red-100 bg-red-50 px-2.5 py-2">
        <span className="mt-0.5 text-[13px]">🔔</span>
        <div className="flex-1">
          <p className="text-[10px] font-semibold text-red-700">
            Low stock alert
          </p>
          <p className="text-[9px] text-red-500">
            Arabica beans — 3 units left
          </p>
        </div>
        <button className="self-start rounded-md border border-red-200 px-1.5 py-0.5 text-[9px] font-semibold text-red-600">
          Order
        </button>
      </div>

      <CardSection className="mb-2">
        <CardLabel>Stock status</CardLabel>
        <div className="flex flex-col gap-2">
          {stocks.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-[10px]">
                <span className="text-espresso/60">{s.name}</span>
                <span className={`font-semibold ${s.valClass}`}>{s.pct}%</span>
              </div>
              <ProgressBar pct={s.pct} color={s.color} />
            </div>
          ))}
        </div>
      </CardSection>

      <CardSection>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-espresso">
              Auto-reorder
            </p>
            <p className="text-[9px] text-espresso/40">
              Triggers at 15% threshold
            </p>
          </div>
          {/* Toggle */}
          <div className="relative h-[17px] w-[30px] flex-shrink-0 rounded-full bg-terracotta">
            <div className="absolute right-[2px] top-[2px] h-[13px] w-[13px] rounded-full bg-white" />
          </div>
        </div>
      </CardSection>
    </>
  );
}

function OfflineCard() {
  const txns = [
    { name: "Latte + muffin", time: "2 min ago" },
    { name: "Cappuccino ×3", time: "5 min ago" },
    { name: "Breakfast combo", time: "11 min ago" },
  ];

  return (
    <>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-amber-50 text-base">
            📡
          </div>
          <div>
            <p className="text-[13px] font-semibold text-espresso">
              Offline Mode
            </p>
            <p className="text-[10px] text-espresso/40">
              Sell without internet
            </p>
          </div>
        </div>
        <StatusPill variant="warn">Offline</StatusPill>
      </div>

      <div className="mb-3 flex items-start gap-2 rounded-lg border border-amber-100 bg-amber-50 px-2.5 py-2">
        <span className="mt-0.5 animate-pulse text-[13px]">🌐</span>
        <div>
          <p className="text-[10px] font-semibold text-amber-800">
            No connection detected
          </p>
          <p className="text-[9px] text-amber-600">Offline mode is active</p>
        </div>
      </div>

      <CardSection className="mb-2">
        <CardLabel>Queued transactions</CardLabel>
        {txns.map((t) => (
          <div
            key={t.name}
            className="flex items-center justify-between border-b border-espresso/8 py-1.5 last:border-0"
          >
            <div>
              <p className="text-[11px] font-medium text-espresso">{t.name}</p>
              <p className="text-[9px] text-espresso/35">{t.time}</p>
            </div>
            <StatusPill variant="warn">Pending</StatusPill>
          </div>
        ))}
      </CardSection>

      <CardSection>
        <div className="flex items-center gap-2.5">
          <div className="flex h-[28px] w-[28px] flex-shrink-0 items-center justify-center rounded-full border border-amber-200 bg-amber-50 text-[14px]">
            ⟳
          </div>
          <div>
            <p className="text-[11px] font-semibold text-espresso">
              3 transactions saved locally
            </p>
            <p className="text-[9px] text-espresso/40">Will sync when online</p>
          </div>
        </div>
      </CardSection>
    </>
  );
}

function GrowthCard() {
  const bars = [
    { day: "M", h: 42, opacity: 0.7 },
    { day: "T", h: 52, opacity: 0.75 },
    { day: "W", h: 36, opacity: 0.65 },
    { day: "T", h: 60, opacity: 1 },
    { day: "F", h: 48, opacity: 0.75 },
    { day: "S", h: 64, opacity: 1 },
    { day: "S", h: 56, opacity: 0.9 },
  ];

  return (
    <>
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-terracotta/10 text-base">
          📈
        </div>
        <div>
          <p className="text-[13px] font-semibold text-espresso">
            Growth Tracker
          </p>
          <p className="text-[10px] text-espresso/40">
            Analytics &amp; insights
          </p>
        </div>
      </div>

      <div className="mb-2 grid grid-cols-2 gap-1.5">
        <div className="rounded-lg border border-espresso/8 bg-cream/60 p-2">
          <p className="text-[9px] text-espresso/40">This month</p>
          <p className="mt-0.5 text-[17px] font-bold text-espresso">$42K</p>
          <p className="text-[9px] font-semibold text-leaf">▲ 23%</p>
        </div>
        <div className="rounded-lg border border-espresso/8 bg-cream/60 p-2">
          <p className="text-[9px] text-espresso/40">Customers</p>
          <p className="mt-0.5 text-[17px] font-bold text-espresso">1,284</p>
          <p className="text-[9px] font-semibold text-leaf">▲ 18%</p>
        </div>
      </div>

      <CardSection className="mb-2">
        <CardLabel>Weekly revenue</CardLabel>
        <div className="flex h-[64px] items-end gap-1.5">
          {bars.map((b, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div
                className="w-full rounded-t"
                style={{
                  height: b.h,
                  background: "#C96F3D",
                  opacity: b.opacity,
                }}
              />
              <span className="text-[8px] text-espresso/35">{b.day}</span>
            </div>
          ))}
        </div>
      </CardSection>

      <CardSection>
        <div className="flex items-center gap-2.5">
          <span className="text-[20px]">☕</span>
          <div className="flex-1">
            <div className="mb-1 flex justify-between text-[11px]">
              <span className="font-medium text-espresso">
                Latte — #1 seller
              </span>
              <span className="font-bold text-terracotta">$1,240</span>
            </div>
            <ProgressBar pct={88} color="#C96F3D" />
          </div>
        </div>
      </CardSection>
    </>
  );
}

// ── Card content map ─────────────────────────────────────────────────────────
const CARD_CONTENT = [
  DashboardCard,
  CheckoutCard,
  InventoryCard,
  OfflineCard,
  GrowthCard,
];

// ── Main export ──────────────────────────────────────────────────────────────
interface Props {
  cardIndex: number;
  pos: number;
  label: string;
  onClick: () => void;
}

export default function CarouselCard({
  cardIndex,
  pos,
  label,
  onClick,
}: Props) {
  const Content = CARD_CONTENT[cardIndex];
  const style = POS_STYLES[pos] ?? POS_STYLES[0];

  return (
    <div
      onClick={onClick}
      className="absolute top-0 h-[440px] w-[280px] overflow-hidden rounded-2xl border border-espresso/10 bg-white p-5 shadow-sm"
      style={{
        left: "50%",
        marginLeft: "-140px",
        cursor: pos !== 0 ? "pointer" : "default",
        transition:
          "transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.65s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.65s",
        willChange: "transform, opacity",
        ...style,
      }}
      aria-label={pos !== 0 ? `Show ${label}` : undefined}
    >
      {/* Active top accent */}
      {pos === 0 && (
        <div className="absolute left-0 right-0 top-0 h-[3px] rounded-t-2xl bg-terracotta" />
      )}
      <Content />
    </div>
  );
}
