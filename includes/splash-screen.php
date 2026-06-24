<div id="splash-screen" aria-hidden="true" style="position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:#100D0A;pointer-events:all;">
  <!-- Pulse rings -->
  <div class="splash-ring" style="position:absolute;width:160px;height:160px;border-radius:50%;border:1.5px solid rgba(201,111,61,0.4);animation:none;"></div>
  <div class="splash-ring splash-ring-2" style="position:absolute;width:160px;height:160px;border-radius:50%;border:1px solid rgba(201,111,61,0.2);animation:none;"></div>
  <!-- Logo -->
  <div style="position:relative;animation:logoEntrance 0.9s cubic-bezier(0.16,1,0.3,1) forwards;">
    <img src="<?= url('/images/Logo.png') ?>" alt="<?= BRAND ?? '' ?>" width="110" height="110" style="display:block;">
  </div>
</div>
<script src="<?= url('/js/splash.js') ?>"></script>
