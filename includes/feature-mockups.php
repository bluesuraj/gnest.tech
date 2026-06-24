<?php
/**
 * Renders a phone-frame mockup for a given feature ID.
 * Used on home and features pages to replace placeholder divs.
 */
function render_feature_mockup(string $id): void {
  ?>
  <div class="relative mx-auto w-[220px]">
    <!-- Phone frame -->
    <div class="overflow-hidden rounded-[24px] border-2 border-espresso/15 bg-white shadow-lg">
      <!-- Status bar -->
      <div class="flex items-center justify-between bg-espresso px-4 py-1.5">
        <span class="text-[9px] text-white/60">9:41</span>
        <div class="flex items-center gap-1">
          <div class="h-[6px] w-[6px] rounded-full bg-white/40"></div>
          <div class="h-[6px] w-[10px] rounded-sm bg-white/40"></div>
          <div class="h-[6px] w-[14px] rounded-sm bg-white/40"></div>
        </div>
      </div>
      <!-- Screen content -->
      <div class="px-3 py-3">
        <?php
        switch ($id) {
          case 'billing':
            ?>
            <div class="mb-2 flex items-center justify-between">
              <p class="text-[11px] font-bold text-espresso">New Order</p>
              <span class="rounded bg-leaf/10 px-1.5 py-0.5 text-[8px] font-semibold text-leaf">Table 4</span>
            </div>
            <div class="space-y-1.5">
              <div class="flex items-center justify-between rounded-lg bg-cream px-2.5 py-2">
                <div><p class="text-[10px] font-medium text-espresso">Cappuccino</p><p class="text-[8px] text-espresso/40">Oat milk, Extra shot</p></div>
                <div class="text-right"><p class="text-[10px] font-bold text-espresso">x2</p><p class="text-[9px] text-terracotta">$9.00</p></div>
              </div>
              <div class="flex items-center justify-between rounded-lg bg-cream px-2.5 py-2">
                <div><p class="text-[10px] font-medium text-espresso">Club Sandwich</p><p class="text-[8px] text-espresso/40">No onion</p></div>
                <div class="text-right"><p class="text-[10px] font-bold text-espresso">x1</p><p class="text-[9px] text-terracotta">$8.50</p></div>
              </div>
              <div class="flex items-center justify-between rounded-lg bg-cream px-2.5 py-2">
                <div><p class="text-[10px] font-medium text-espresso">Blueberry Muffin</p></div>
                <div class="text-right"><p class="text-[10px] font-bold text-espresso">x1</p><p class="text-[9px] text-terracotta">$4.00</p></div>
              </div>
            </div>
            <div class="mt-2 border-t border-dashed border-espresso/10 pt-2">
              <div class="flex justify-between text-[10px]"><span class="text-espresso/50">Subtotal</span><span class="text-espresso">$21.50</span></div>
              <div class="flex justify-between text-[10px]"><span class="text-espresso/50">GST (5%)</span><span class="text-espresso">$1.08</span></div>
              <div class="mt-1 flex justify-between text-[11px] font-bold"><span class="text-espresso">Total</span><span class="text-terracotta">$22.58</span></div>
            </div>
            <button class="mt-2 w-full rounded-lg bg-terracotta py-2 text-[10px] font-semibold text-white">Print Bill & KOT</button>
            <?php
            break;

          case 'payments':
            ?>
            <p class="mb-2 text-[11px] font-bold text-espresso">Payment</p>
            <div class="rounded-xl bg-cream p-3 text-center">
              <p class="text-[9px] text-espresso/40">Amount due</p>
              <p class="text-[22px] font-bold text-espresso">$22.58</p>
            </div>
            <p class="mt-2.5 mb-1.5 text-[9px] font-semibold uppercase tracking-wider text-espresso/40">Select method</p>
            <div class="grid grid-cols-2 gap-1.5">
              <div class="rounded-lg border-2 border-terracotta bg-terracotta/5 px-2 py-2.5 text-center"><span class="text-[14px]">&#128179;</span><p class="mt-0.5 text-[9px] font-semibold text-terracotta">UPI</p></div>
              <div class="rounded-lg border border-espresso/10 bg-cream px-2 py-2.5 text-center"><span class="text-[14px]">&#128179;</span><p class="mt-0.5 text-[9px] font-medium text-espresso/60">Card</p></div>
              <div class="rounded-lg border border-espresso/10 bg-cream px-2 py-2.5 text-center"><span class="text-[14px]">&#128181;</span><p class="mt-0.5 text-[9px] font-medium text-espresso/60">Cash</p></div>
              <div class="rounded-lg border border-espresso/10 bg-cream px-2 py-2.5 text-center"><span class="text-[14px]">&#128257;</span><p class="mt-0.5 text-[9px] font-medium text-espresso/60">Split</p></div>
            </div>
            <div class="mt-2 rounded-lg border border-espresso/8 bg-cream/60 p-2 text-center">
              <p class="text-[8px] text-espresso/40">UPI QR on receipt</p>
              <div class="mx-auto mt-1 h-12 w-12 rounded border border-espresso/10 bg-white p-1"><div class="h-full w-full rounded-sm bg-espresso/5 flex items-center justify-center text-[8px] text-espresso/30">QR</div></div>
            </div>
            <button class="mt-2 w-full rounded-lg bg-terracotta py-2 text-[10px] font-semibold text-white">Confirm Payment</button>
            <?php
            break;

          case 'inventory':
            ?>
            <p class="mb-2 text-[11px] font-bold text-espresso">Inventory</p>
            <div class="mb-2 flex items-start gap-1.5 rounded-lg border border-red-100 bg-red-50 px-2 py-1.5">
              <span class="text-[11px]">&#9888;</span>
              <div><p class="text-[9px] font-semibold text-red-700">Low stock: Oat Milk</p><p class="text-[8px] text-red-500">Only 2 litres left</p></div>
            </div>
            <div class="space-y-1.5">
              <div class="rounded-lg bg-cream px-2.5 py-2"><div class="flex justify-between text-[10px]"><span class="text-espresso/60">Coffee Beans</span><span class="font-semibold text-leaf">85%</span></div><div class="mt-1 h-1 overflow-hidden rounded-full bg-espresso/10"><div class="h-full rounded-full bg-leaf" style="width:85%"></div></div></div>
              <div class="rounded-lg bg-cream px-2.5 py-2"><div class="flex justify-between text-[10px]"><span class="text-espresso/60">Oat Milk</span><span class="font-semibold text-red-600">12%</span></div><div class="mt-1 h-1 overflow-hidden rounded-full bg-espresso/10"><div class="h-full rounded-full bg-red-500" style="width:12%"></div></div></div>
              <div class="rounded-lg bg-cream px-2.5 py-2"><div class="flex justify-between text-[10px]"><span class="text-espresso/60">Paper Cups</span><span class="font-semibold text-leaf">92%</span></div><div class="mt-1 h-1 overflow-hidden rounded-full bg-espresso/10"><div class="h-full rounded-full bg-leaf" style="width:92%"></div></div></div>
              <div class="rounded-lg bg-cream px-2.5 py-2"><div class="flex justify-between text-[10px]"><span class="text-espresso/60">Sugar Sachets</span><span class="font-semibold text-amber-600">38%</span></div><div class="mt-1 h-1 overflow-hidden rounded-full bg-espresso/10"><div class="h-full rounded-full bg-amber-500" style="width:38%"></div></div></div>
            </div>
            <?php
            break;

          case 'reports':
            ?>
            <p class="mb-2 text-[11px] font-bold text-espresso">Today's Report</p>
            <div class="rounded-xl bg-cream p-2.5 text-center mb-2">
              <p class="text-[9px] text-espresso/40">Total Sales</p>
              <p class="text-[20px] font-bold text-espresso">$2,847</p>
              <span class="text-[9px] font-semibold text-leaf">&#9650; 14% vs yesterday</span>
            </div>
            <div class="grid grid-cols-2 gap-1.5 mb-2">
              <div class="rounded-lg bg-cream px-2 py-1.5 text-center"><p class="text-[8px] text-espresso/40">Orders</p><p class="text-[13px] font-bold text-terracotta">87</p></div>
              <div class="rounded-lg bg-cream px-2 py-1.5 text-center"><p class="text-[8px] text-espresso/40">Avg Order</p><p class="text-[13px] font-bold text-espresso">$32.7</p></div>
            </div>
            <p class="mb-1 text-[9px] font-semibold text-espresso/40">Top Items</p>
            <div class="space-y-1">
              <div class="flex justify-between text-[10px] rounded-lg bg-cream px-2 py-1.5"><span class="text-espresso/60">1. Latte</span><span class="font-semibold text-espresso">$420</span></div>
              <div class="flex justify-between text-[10px] rounded-lg bg-cream px-2 py-1.5"><span class="text-espresso/60">2. Cappuccino</span><span class="font-semibold text-espresso">$380</span></div>
              <div class="flex justify-between text-[10px] rounded-lg bg-cream px-2 py-1.5"><span class="text-espresso/60">3. Sandwich</span><span class="font-semibold text-espresso">$310</span></div>
            </div>
            <?php
            break;

          case 'staff':
            ?>
            <p class="mb-2 text-[11px] font-bold text-espresso">Staff</p>
            <div class="space-y-1.5">
              <div class="flex items-center gap-2 rounded-lg bg-cream px-2.5 py-2">
                <div class="flex h-7 w-7 items-center justify-center rounded-full bg-terracotta text-[10px] font-bold text-white">RP</div>
                <div class="flex-1"><p class="text-[10px] font-medium text-espresso">Rahul P.</p><p class="text-[8px] text-espresso/40">Manager</p></div>
                <span class="rounded-full bg-leaf/10 px-1.5 py-0.5 text-[8px] font-semibold text-leaf">Active</span>
              </div>
              <div class="flex items-center gap-2 rounded-lg bg-cream px-2.5 py-2">
                <div class="flex h-7 w-7 items-center justify-center rounded-full bg-leaf text-[10px] font-bold text-white">AS</div>
                <div class="flex-1"><p class="text-[10px] font-medium text-espresso">Anita S.</p><p class="text-[8px] text-espresso/40">Cashier</p></div>
                <span class="rounded-full bg-leaf/10 px-1.5 py-0.5 text-[8px] font-semibold text-leaf">Active</span>
              </div>
              <div class="flex items-center gap-2 rounded-lg bg-cream px-2.5 py-2">
                <div class="flex h-7 w-7 items-center justify-center rounded-full bg-espresso/20 text-[10px] font-bold text-espresso/60">MK</div>
                <div class="flex-1"><p class="text-[10px] font-medium text-espresso">Maya K.</p><p class="text-[8px] text-espresso/40">Barista</p></div>
                <span class="rounded-full bg-espresso/10 px-1.5 py-0.5 text-[8px] font-semibold text-espresso/40">Off</span>
              </div>
            </div>
            <div class="mt-2 rounded-lg border border-espresso/8 bg-cream/60 p-2">
              <p class="text-[9px] font-semibold text-espresso/40 mb-1">Today's shifts</p>
              <div class="flex justify-between text-[9px]"><span class="text-espresso/50">Rahul P.</span><span class="text-espresso/70">$1,240 billed</span></div>
              <div class="flex justify-between text-[9px]"><span class="text-espresso/50">Anita S.</span><span class="text-espresso/70">$860 billed</span></div>
            </div>
            <?php
            break;

          case 'customers':
          case 'loyalty':
            ?>
            <p class="mb-2 text-[11px] font-bold text-espresso">Customer</p>
            <div class="rounded-xl bg-cream p-2.5 text-center mb-2">
              <div class="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-terracotta text-[14px] font-bold text-white">PS</div>
              <p class="text-[11px] font-semibold text-espresso">Priya Sharma</p>
              <p class="text-[8px] text-espresso/40">Regular since Mar 2024</p>
            </div>
            <div class="grid grid-cols-3 gap-1 mb-2">
              <div class="rounded-lg bg-cream px-1.5 py-1.5 text-center"><p class="text-[8px] text-espresso/40">Visits</p><p class="text-[12px] font-bold text-terracotta">42</p></div>
              <div class="rounded-lg bg-cream px-1.5 py-1.5 text-center"><p class="text-[8px] text-espresso/40">Points</p><p class="text-[12px] font-bold text-leaf">380</p></div>
              <div class="rounded-lg bg-cream px-1.5 py-1.5 text-center"><p class="text-[8px] text-espresso/40">Spent</p><p class="text-[12px] font-bold text-espresso">$1.2K</p></div>
            </div>
            <p class="mb-1 text-[9px] font-semibold text-espresso/40">Favourite orders</p>
            <div class="space-y-1">
              <div class="flex justify-between text-[9px] rounded-lg bg-cream px-2 py-1.5"><span class="text-espresso/60">Oat Latte</span><span class="text-espresso/40">18 times</span></div>
              <div class="flex justify-between text-[9px] rounded-lg bg-cream px-2 py-1.5"><span class="text-espresso/60">Avocado Toast</span><span class="text-espresso/40">9 times</span></div>
            </div>
            <div class="mt-2 rounded-lg border border-leaf/20 bg-leaf/5 p-2 text-center">
              <p class="text-[9px] font-semibold text-leaf">&#127873; Birthday in 5 days!</p>
            </div>
            <?php
            break;

          case 'multi-outlet':
            ?>
            <p class="mb-2 text-[11px] font-bold text-espresso">Outlets</p>
            <div class="space-y-1.5">
              <div class="rounded-lg bg-cream px-2.5 py-2">
                <div class="flex items-center justify-between mb-1"><p class="text-[10px] font-semibold text-espresso">Downtown</p><span class="rounded-full bg-leaf/10 px-1.5 py-0.5 text-[8px] font-semibold text-leaf">Open</span></div>
                <div class="flex justify-between text-[9px] text-espresso/50"><span>Today: $1,420</span><span>15 orders</span></div>
              </div>
              <div class="rounded-lg bg-cream px-2.5 py-2">
                <div class="flex items-center justify-between mb-1"><p class="text-[10px] font-semibold text-espresso">Mall Branch</p><span class="rounded-full bg-leaf/10 px-1.5 py-0.5 text-[8px] font-semibold text-leaf">Open</span></div>
                <div class="flex justify-between text-[9px] text-espresso/50"><span>Today: $2,180</span><span>28 orders</span></div>
              </div>
              <div class="rounded-lg bg-cream px-2.5 py-2">
                <div class="flex items-center justify-between mb-1"><p class="text-[10px] font-semibold text-espresso">Airport Kiosk</p><span class="rounded-full bg-amber-100 px-1.5 py-0.5 text-[8px] font-semibold text-amber-700">Setup</span></div>
                <div class="flex justify-between text-[9px] text-espresso/50"><span>Opens tomorrow</span><span>0 orders</span></div>
              </div>
            </div>
            <div class="mt-2 rounded-lg border border-espresso/8 bg-cream/60 p-2">
              <div class="flex justify-between text-[10px]"><span class="text-espresso/50">Total today</span><span class="font-bold text-terracotta">$3,600</span></div>
              <div class="flex justify-between text-[10px]"><span class="text-espresso/50">All orders</span><span class="font-bold text-espresso">43</span></div>
            </div>
            <?php
            break;

          case 'offline':
            ?>
            <div class="mb-2 flex items-center justify-between">
              <p class="text-[11px] font-bold text-espresso">Billing</p>
              <span class="rounded-full bg-amber-100 px-1.5 py-0.5 text-[8px] font-semibold text-amber-700">Offline</span>
            </div>
            <div class="mb-2 flex items-start gap-1.5 rounded-lg border border-amber-100 bg-amber-50 px-2 py-1.5">
              <span class="animate-pulse text-[11px]">&#127760;</span>
              <div><p class="text-[9px] font-semibold text-amber-800">No internet</p><p class="text-[8px] text-amber-600">All features working offline</p></div>
            </div>
            <div class="space-y-1.5">
              <div class="flex items-center justify-between rounded-lg bg-cream px-2.5 py-2">
                <div><p class="text-[10px] font-medium text-espresso">Espresso x2</p><p class="text-[8px] text-espresso/40">Just now</p></div>
                <span class="rounded-full bg-amber-100 px-1.5 py-0.5 text-[8px] font-semibold text-amber-700">Queued</span>
              </div>
              <div class="flex items-center justify-between rounded-lg bg-cream px-2.5 py-2">
                <div><p class="text-[10px] font-medium text-espresso">Latte + Muffin</p><p class="text-[8px] text-espresso/40">3 min ago</p></div>
                <span class="rounded-full bg-amber-100 px-1.5 py-0.5 text-[8px] font-semibold text-amber-700">Queued</span>
              </div>
              <div class="flex items-center justify-between rounded-lg bg-cream px-2.5 py-2">
                <div><p class="text-[10px] font-medium text-espresso">Breakfast combo</p><p class="text-[8px] text-espresso/40">8 min ago</p></div>
                <span class="rounded-full bg-amber-100 px-1.5 py-0.5 text-[8px] font-semibold text-amber-700">Queued</span>
              </div>
            </div>
            <div class="mt-2 rounded-lg border border-espresso/8 bg-cream/60 p-2 text-center">
              <p class="text-[10px] font-semibold text-espresso">3 bills saved locally</p>
              <p class="text-[8px] text-espresso/40">Will sync when online</p>
            </div>
            <?php
            break;

          case 'gst':
            ?>
            <p class="mb-2 text-[11px] font-bold text-espresso">GST Invoice</p>
            <div class="rounded-xl border border-espresso/10 bg-cream p-2.5 font-mono text-[8px]">
              <p class="text-center text-[10px] font-bold text-espresso">TAX INVOICE</p>
              <p class="text-center text-espresso/40">GSTIN: 07AAACX0000X1Z5</p>
              <div class="my-1.5 border-t border-dashed border-espresso/20"></div>
              <div class="flex justify-between"><span class="text-espresso/50">Cappuccino x2</span><span class="text-espresso">$9.00</span></div>
              <div class="flex justify-between"><span class="text-espresso/50">Sandwich</span><span class="text-espresso">$8.50</span></div>
              <div class="my-1.5 border-t border-dashed border-espresso/20"></div>
              <div class="flex justify-between"><span class="text-espresso/50">Subtotal</span><span class="text-espresso">$17.50</span></div>
              <div class="flex justify-between"><span class="text-espresso/50">CGST @2.5%</span><span class="text-espresso">$0.44</span></div>
              <div class="flex justify-between"><span class="text-espresso/50">SGST @2.5%</span><span class="text-espresso">$0.44</span></div>
              <div class="my-1.5 border-t border-dashed border-espresso/20"></div>
              <div class="flex justify-between font-bold"><span class="text-espresso">TOTAL</span><span class="text-terracotta">$18.38</span></div>
              <p class="mt-1 text-center text-espresso/30">HSN: 9963</p>
            </div>
            <div class="mt-2 grid grid-cols-2 gap-1.5">
              <div class="rounded-lg bg-cream px-2 py-1.5 text-center"><p class="text-[8px] text-espresso/40">GST Today</p><p class="text-[11px] font-bold text-espresso">$142</p></div>
              <div class="rounded-lg bg-cream px-2 py-1.5 text-center"><p class="text-[8px] text-espresso/40">Invoices</p><p class="text-[11px] font-bold text-espresso">87</p></div>
            </div>
            <?php
            break;

          default:
            ?>
            <div class="flex h-48 items-center justify-center text-[10px] text-espresso/30"><?= htmlspecialchars($id) ?></div>
            <?php
            break;
        }
        ?>
      </div>
      <!-- Home indicator -->
      <div class="flex justify-center py-1.5">
        <div class="h-1 w-10 rounded-full bg-espresso/15"></div>
      </div>
    </div>
  </div>
  <?php
}
?>
