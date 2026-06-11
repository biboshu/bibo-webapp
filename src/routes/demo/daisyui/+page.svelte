<script lang="ts">
  let tabActive = $state(1);
  let rangeVal = $state(50);
  let showToast = $state(false);
  let countdownValue = $state(45);
</script>

<div class="mx-auto max-w-5xl space-y-12 p-8">
  <h1 class="text-4xl font-bold">DaisyUI 5 Components</h1>

  <!-- ===== BUTTONS ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Buttons</h2>

    <h3 class="text-lg font-medium">Colors</h3>
    <div class="flex flex-wrap gap-2">
      <button class="btn">Default</button>
      <button class="btn btn-neutral">Neutral</button>
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-accent">Accent</button>
      <button class="btn btn-info">Info</button>
      <button class="btn btn-success">Success</button>
      <button class="btn btn-warning">Warning</button>
      <button class="btn btn-error">Error</button>
      <button class="btn btn-ghost">Ghost</button>
      <button class="btn btn-link">Link</button>
    </div>

    <h3 class="text-lg font-medium">Outline</h3>
    <div class="flex flex-wrap gap-2">
      <button class="btn btn-outline">Default</button>
      <button class="btn btn-outline btn-primary">Primary</button>
      <button class="btn btn-outline btn-secondary">Secondary</button>
      <button class="btn btn-outline btn-accent">Accent</button>
      <button class="btn btn-outline btn-info">Info</button>
      <button class="btn btn-outline btn-success">Success</button>
      <button class="btn btn-outline btn-warning">Warning</button>
      <button class="btn btn-outline btn-error">Error</button>
    </div>

    <h3 class="text-lg font-medium">Soft</h3>
    <div class="flex flex-wrap gap-2">
      <button class="btn btn-soft btn-primary">Primary</button>
      <button class="btn btn-soft btn-secondary">Secondary</button>
      <button class="btn btn-soft btn-accent">Accent</button>
      <button class="btn btn-soft btn-info">Info</button>
      <button class="btn btn-soft btn-success">Success</button>
      <button class="btn btn-soft btn-warning">Warning</button>
      <button class="btn btn-soft btn-error">Error</button>
    </div>

    <h3 class="text-lg font-medium">Dash</h3>
    <div class="flex flex-wrap gap-2">
      <button class="btn btn-dash btn-primary">Primary</button>
      <button class="btn btn-dash btn-secondary">Secondary</button>
      <button class="btn btn-dash btn-accent">Accent</button>
      <button class="btn btn-dash btn-info">Info</button>
      <button class="btn btn-dash btn-success">Success</button>
      <button class="btn btn-dash btn-warning">Warning</button>
      <button class="btn btn-dash btn-error">Error</button>
    </div>

    <h3 class="text-lg font-medium">Sizes</h3>
    <div class="flex flex-wrap items-center gap-2">
      <button class="btn btn-xs btn-primary">Tiny</button>
      <button class="btn btn-sm btn-primary">Small</button>
      <button class="btn btn-md btn-primary">Medium</button>
      <button class="btn btn-lg btn-primary">Large</button>
      <button class="btn btn-xl btn-primary">Extra Large</button>
    </div>

    <h3 class="text-lg font-medium">Shapes & States</h3>
    <div class="flex flex-wrap items-center gap-2">
      <button class="btn btn-square btn-primary">✕</button>
      <button class="btn btn-circle btn-secondary">✕</button>
      <button class="btn btn-wide btn-accent">Wide</button>
      <button class="btn btn-active btn-primary">Active</button>
      <button class="btn btn-primary" disabled>Disabled</button>
      <button class="btn btn-primary">
        <span class="loading loading-sm loading-spinner"></span>
        Loading
      </button>
    </div>
  </section>

  <!-- ===== BADGES ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Badges</h2>
    <div class="flex flex-wrap gap-2">
      <span class="badge">Default</span>
      <span class="badge badge-neutral">Neutral</span>
      <span class="badge badge-primary">Primary</span>
      <span class="badge badge-secondary">Secondary</span>
      <span class="badge badge-accent">Accent</span>
      <span class="badge badge-info">Info</span>
      <span class="badge badge-success">Success</span>
      <span class="badge badge-warning">Warning</span>
      <span class="badge badge-error">Error</span>
      <span class="badge badge-ghost">Ghost</span>
    </div>
    <div class="flex flex-wrap gap-2">
      <span class="badge badge-outline badge-primary">Outline</span>
      <span class="badge badge-soft badge-secondary">Soft</span>
      <span class="badge badge-dash badge-accent">Dash</span>
      <span class="badge badge-lg badge-primary">Large</span>
      <span class="badge badge-sm badge-secondary">Small</span>
      <span class="badge badge-xs badge-accent">Tiny</span>
    </div>
  </section>

  <!-- ===== ALERTS ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Alerts</h2>
    <div role="alert" class="alert">
      <span>Default alert message.</span>
    </div>
    <div role="alert" class="alert alert-info">
      <span>Info: This is an informational alert.</span>
    </div>
    <div role="alert" class="alert alert-success">
      <span>Success: Operation completed!</span>
    </div>
    <div role="alert" class="alert alert-warning">
      <span>Warning: Proceed with caution.</span>
    </div>
    <div role="alert" class="alert alert-error">
      <span>Error: Something went wrong.</span>
    </div>
    <h3 class="text-lg font-medium">Alert Styles</h3>
    <div role="alert" class="alert alert-outline alert-info">
      <span>Outline info alert</span>
    </div>
    <div role="alert" class="alert alert-dash alert-success">
      <span>Dash success alert</span>
    </div>
    <div role="alert" class="alert alert-soft alert-warning">
      <span>Soft warning alert</span>
    </div>
  </section>

  <!-- ===== CARDS ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Cards</h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div class="card bg-base-200 shadow-md">
        <div class="card-body">
          <h3 class="card-title">Default Card</h3>
          <p>This is a default card with shadow.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-sm btn-primary">Action</button>
          </div>
        </div>
      </div>
      <div class="card bg-primary text-primary-content">
        <div class="card-body">
          <h3 class="card-title">Primary Card</h3>
          <p>A card with primary background color.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-sm">Buy Now</button>
          </div>
        </div>
      </div>
      <div class="card bg-base-200 shadow-md card-border">
        <div class="card-body">
          <h3 class="card-title">Bordered Card</h3>
          <p>A card with visible border.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-sm btn-secondary">Details</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== TABS ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Tabs</h2>
    <div class="tabs-border tabs">
      <button
        class="tab"
        class:tab-active={tabActive === 1}
        onclick={(): void => {
          tabActive = 1;
        }}>Tab 1</button
      >
      <button
        class="tab"
        class:tab-active={tabActive === 2}
        onclick={(): void => {
          tabActive = 2;
        }}>Tab 2</button
      >
      <button
        class="tab"
        class:tab-active={tabActive === 3}
        onclick={(): void => {
          tabActive = 3;
        }}>Tab 3</button
      >
    </div>
    <div class="rounded-box bg-base-200 p-4">
      {#if tabActive === 1}
        <p>Content for Tab 1</p>
      {:else if tabActive === 2}
        <p>Content for Tab 2</p>
      {:else}
        <p>Content for Tab 3</p>
      {/if}
    </div>

    <h3 class="text-lg font-medium">Tab Variants</h3>
    <div class="tabs-box tabs">
      <button class="tab-active tab">Box 1</button>
      <button class="tab">Box 2</button>
      <button class="tab">Box 3</button>
    </div>
    <div class="tabs-lift tabs">
      <button class="tab-active tab">Lift 1</button>
      <button class="tab">Lift 2</button>
      <button class="tab">Lift 3</button>
    </div>
  </section>

  <!-- ===== TOGGLE / CHECKBOX / RADIO ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Form Controls</h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div class="space-y-3">
        <h3 class="text-lg font-medium">Toggles</h3>
        <div class="flex items-center gap-2">
          <input type="checkbox" class="toggle toggle-primary" checked /><span>Primary</span>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" class="toggle toggle-secondary" /><span>Secondary</span>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" class="toggle toggle-accent" checked /><span>Accent</span>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" class="toggle toggle-success" /><span>Success</span>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" class="toggle toggle-warning" checked /><span>Warning</span>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" class="toggle toggle-error" /><span>Error</span>
        </div>
        <h4 class="pt-2 text-sm font-medium">Sizes</h4>
        <div class="flex items-center gap-4">
          <input type="checkbox" class="toggle toggle-primary toggle-xs" checked />
          <input type="checkbox" class="toggle toggle-primary toggle-sm" checked />
          <input type="checkbox" class="toggle toggle-md toggle-primary" checked />
          <input type="checkbox" class="toggle toggle-lg toggle-primary" checked />
        </div>
      </div>
      <div class="space-y-3">
        <h3 class="text-lg font-medium">Checkboxes</h3>
        <div class="flex items-center gap-2">
          <input type="checkbox" class="checkbox checkbox-primary" checked /><span>Primary</span>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" class="checkbox checkbox-secondary" /><span>Secondary</span>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" class="checkbox checkbox-accent" checked /><span>Accent</span>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" class="checkbox checkbox-success" /><span>Success</span>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" class="checkbox checkbox-warning" checked /><span>Warning</span>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" class="checkbox checkbox-error" /><span>Error</span>
        </div>
        <h4 class="pt-2 text-sm font-medium">Sizes</h4>
        <div class="flex items-center gap-4">
          <input type="checkbox" class="checkbox checkbox-xs checkbox-primary" checked />
          <input type="checkbox" class="checkbox checkbox-sm checkbox-primary" checked />
          <input type="checkbox" class="checkbox checkbox-md checkbox-primary" checked />
          <input type="checkbox" class="checkbox checkbox-lg checkbox-primary" checked />
        </div>
      </div>
      <div class="space-y-3">
        <h3 class="text-lg font-medium">Radios</h3>
        <div class="flex items-center gap-2">
          <input type="radio" name="radio-demo" class="radio radio-primary" checked /><span
            >Primary</span
          >
        </div>
        <div class="flex items-center gap-2">
          <input type="radio" name="radio-demo" class="radio radio-secondary" /><span
            >Secondary</span
          >
        </div>
        <div class="flex items-center gap-2">
          <input type="radio" name="radio-demo" class="radio radio-accent" /><span>Accent</span>
        </div>
        <div class="flex items-center gap-2">
          <input type="radio" name="radio-demo" class="radio radio-success" /><span>Success</span>
        </div>
        <div class="flex items-center gap-2">
          <input type="radio" name="radio-demo" class="radio radio-warning" /><span>Warning</span>
        </div>
        <div class="flex items-center gap-2">
          <input type="radio" name="radio-demo" class="radio radio-error" /><span>Error</span>
        </div>
        <h4 class="pt-2 text-sm font-medium">Sizes</h4>
        <div class="flex items-center gap-4">
          <input type="radio" name="radio-size" class="radio radio-xs radio-primary" checked />
          <input type="radio" name="radio-size" class="radio radio-sm radio-primary" />
          <input type="radio" name="radio-size" class="radio radio-md radio-primary" />
          <input type="radio" name="radio-size" class="radio radio-lg radio-primary" />
        </div>
      </div>
    </div>
  </section>

  <!-- ===== INPUTS ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Inputs</h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <input type="text" placeholder="Default input" class="input w-full" />
      <input type="text" placeholder="Primary" class="input w-full input-primary" />
      <input type="text" placeholder="Secondary" class="input w-full input-secondary" />
      <input type="text" placeholder="Accent" class="input w-full input-accent" />
      <input type="text" placeholder="Info" class="input w-full input-info" />
      <input type="text" placeholder="Success" class="input w-full input-success" />
      <input type="text" placeholder="Warning" class="input w-full input-warning" />
      <input type="text" placeholder="Error" class="input w-full input-error" />
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <input type="text" placeholder="Ghost input" class="input w-full input-ghost" />
      <input type="text" placeholder="Disabled" class="input w-full" disabled />
    </div>

    <h3 class="text-lg font-medium">Textarea</h3>
    <textarea class="textarea w-full textarea-primary" placeholder="Type something..."></textarea>

    <h3 class="text-lg font-medium">Select</h3>
    <select class="select w-full max-w-xs select-primary">
      <option disabled selected>Pick an option</option>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>

    <h3 class="text-lg font-medium">Range</h3>
    <input type="range" min="0" max="100" bind:value={rangeVal} class="range range-primary" />
    <p class="text-sm opacity-70">Value: {rangeVal}</p>

    <h3 class="text-lg font-medium">File Input</h3>
    <input type="file" class="file-input w-full max-w-xs file-input-primary" />
  </section>

  <!-- ===== FIELDSET ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Fieldset</h2>
    <fieldset class="fieldset">
      <legend class="fieldset-legend">Account Information</legend>
      <input type="text" class="input w-full" placeholder="Username" />
      <p class="label">Choose a unique username</p>
    </fieldset>
    <fieldset class="fieldset">
      <legend class="fieldset-legend">Password</legend>
      <input type="password" class="input w-full" placeholder="Enter password" />
      <p class="label">Minimum 8 characters</p>
    </fieldset>
  </section>

  <!-- ===== FLOATING LABEL ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Floating Label</h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <label class="floating-label">
        <input type="text" placeholder="Email" class="input w-full input-primary" />
        <span>Email</span>
      </label>
      <label class="floating-label">
        <input type="text" placeholder="Name" class="input w-full input-secondary" />
        <span>Name</span>
      </label>
    </div>
  </section>

  <!-- ===== VALIDATOR ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Validator</h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div>
        <input type="email" class="validator input w-full" placeholder="Email" required />
        <p class="validator-hint">Please enter a valid email address</p>
      </div>
      <div>
        <input
          type="text"
          class="validator input w-full"
          placeholder="Required field"
          required
          minlength="3"
        />
        <p class="validator-hint">Minimum 3 characters required</p>
      </div>
    </div>
  </section>

  <!-- ===== FILTER ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Filter</h2>
    <form class="filter">
      <input class="btn btn-square" type="reset" value="×" />
      <input class="btn" type="radio" name="filter-demo" aria-label="All" />
      <input class="btn" type="radio" name="filter-demo" aria-label="Design" />
      <input class="btn" type="radio" name="filter-demo" aria-label="Development" />
      <input class="btn" type="radio" name="filter-demo" aria-label="Marketing" />
    </form>
  </section>

  <!-- ===== PROGRESS & LOADING ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Progress & Loading</h2>

    <h3 class="text-lg font-medium">Progress Bars</h3>
    <div class="space-y-2">
      <progress class="progress w-full progress-primary" value="20" max="100"></progress>
      <progress class="progress w-full progress-secondary" value="40" max="100"></progress>
      <progress class="progress w-full progress-accent" value="60" max="100"></progress>
      <progress class="progress w-full progress-info" value="70" max="100"></progress>
      <progress class="progress w-full progress-success" value="80" max="100"></progress>
      <progress class="progress w-full progress-warning" value="90" max="100"></progress>
      <progress class="progress w-full progress-error" value="45" max="100"></progress>
    </div>

    <h3 class="text-lg font-medium">Radial Progress</h3>
    <div class="flex flex-wrap gap-4">
      <div
        class="radial-progress text-primary"
        style="--value:25; --size:4rem;"
        aria-valuenow="25"
        role="progressbar"
      >
        25%
      </div>
      <div
        class="radial-progress text-secondary"
        style="--value:50; --size:4rem;"
        aria-valuenow="50"
        role="progressbar"
      >
        50%
      </div>
      <div
        class="radial-progress text-accent"
        style="--value:75; --size:4rem;"
        aria-valuenow="75"
        role="progressbar"
      >
        75%
      </div>
      <div
        class="radial-progress text-success"
        style="--value:100; --size:4rem;"
        aria-valuenow="100"
        role="progressbar"
      >
        100%
      </div>
    </div>

    <h3 class="text-lg font-medium">Loading Spinners</h3>
    <div class="flex flex-wrap gap-4">
      <span class="loading loading-lg loading-spinner text-primary"></span>
      <span class="loading loading-lg loading-dots text-secondary"></span>
      <span class="loading loading-lg loading-ring text-accent"></span>
      <span class="loading loading-lg loading-ball text-info"></span>
      <span class="loading loading-lg loading-bars text-success"></span>
      <span class="loading loading-lg loading-infinity text-warning"></span>
    </div>
  </section>

  <!-- ===== COUNTDOWN ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Countdown</h2>
    <div class="flex gap-5">
      <div class="flex flex-col items-center">
        <span class="countdown font-mono text-4xl">
          <span style="--value:15;" aria-live="polite" aria-label="15">15</span>
        </span>
        days
      </div>
      <div class="flex flex-col items-center">
        <span class="countdown font-mono text-4xl">
          <span style="--value:10;" aria-live="polite" aria-label="10">10</span>
        </span>
        hours
      </div>
      <div class="flex flex-col items-center">
        <span class="countdown font-mono text-4xl">
          <span
            style="--value:{countdownValue};"
            aria-live="polite"
            aria-label={String(countdownValue)}>{countdownValue}</span
          >
        </span>
        sec
      </div>
    </div>
    <button
      class="btn btn-sm btn-primary"
      onclick={(): void => {
        countdownValue = countdownValue > 0 ? countdownValue - 1 : 59;
      }}>Decrement</button
    >
  </section>

  <!-- ===== TOOLTIP ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Tooltips</h2>
    <div class="flex flex-wrap gap-4">
      <div class="tooltip" data-tip="Default tooltip">
        <button class="btn">Hover me</button>
      </div>
      <div class="tooltip tooltip-primary" data-tip="Primary tooltip">
        <button class="btn btn-primary">Primary</button>
      </div>
      <div class="tooltip tooltip-secondary" data-tip="Secondary tooltip">
        <button class="btn btn-secondary">Secondary</button>
      </div>
      <div class="tooltip tooltip-accent" data-tip="Accent tooltip">
        <button class="btn btn-accent">Accent</button>
      </div>
    </div>
  </section>

  <!-- ===== COLLAPSE / ACCORDION ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Collapse / Accordion</h2>
    <div class="collapse-arrow collapse bg-base-200">
      <input type="checkbox" />
      <div class="collapse-title font-semibold">Click to expand (arrow)</div>
      <div class="collapse-content">
        <p>Hidden content revealed on click.</p>
      </div>
    </div>
    <div class="collapse-plus collapse bg-base-200">
      <input type="checkbox" />
      <div class="collapse-title font-semibold">Click to expand (plus)</div>
      <div class="collapse-content">
        <p>Another collapsible section.</p>
      </div>
    </div>
    <div class="join join-vertical w-full">
      <div class="collapse-arrow collapse join-item border border-base-300">
        <input type="radio" name="accordion" checked />
        <div class="collapse-title font-semibold">Accordion Item 1</div>
        <div class="collapse-content"><p>Content for item 1.</p></div>
      </div>
      <div class="collapse-arrow collapse join-item border border-base-300">
        <input type="radio" name="accordion" />
        <div class="collapse-title font-semibold">Accordion Item 2</div>
        <div class="collapse-content"><p>Content for item 2.</p></div>
      </div>
      <div class="collapse-arrow collapse join-item border border-base-300">
        <input type="radio" name="accordion" />
        <div class="collapse-title font-semibold">Accordion Item 3</div>
        <div class="collapse-content"><p>Content for item 3.</p></div>
      </div>
    </div>
  </section>

  <!-- ===== TABLE ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Table</h2>
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Alice</td>
            <td>Developer</td>
            <td><span class="badge badge-sm badge-success">Active</span></td>
          </tr>
          <tr>
            <th>2</th>
            <td>Bob</td>
            <td>Designer</td>
            <td><span class="badge badge-sm badge-warning">Away</span></td>
          </tr>
          <tr>
            <th>3</th>
            <td>Charlie</td>
            <td>Manager</td>
            <td><span class="badge badge-sm badge-error">Offline</span></td>
          </tr>
          <tr>
            <th>4</th>
            <td>Diana</td>
            <td>QA</td>
            <td><span class="badge badge-sm badge-info">Busy</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- ===== MODAL ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Modal</h2>
    <button
      class="btn btn-primary"
      onclick={(): void => {
        const modal = document.getElementById('demo_modal');
        if (modal instanceof HTMLDialogElement) modal.showModal();
      }}>Open Modal</button
    >
    <dialog id="demo_modal" class="modal">
      <div class="modal-box">
        <h3 class="text-lg font-bold">Hello!</h3>
        <p class="py-4">This is a DaisyUI modal dialog.</p>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </section>

  <!-- ===== DROPDOWN ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Dropdown</h2>
    <div class="flex flex-wrap gap-4">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn m-1 btn-primary">Dropdown</div>
        <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
        <ul
          tabindex="0"
          class="dropdown-content menu z-10 w-52 rounded-box bg-base-200 p-2 shadow-sm"
        >
          <li><a href="#!">Item 1</a></li>
          <li><a href="#!">Item 2</a></li>
          <li><a href="#!">Item 3</a></li>
        </ul>
      </div>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn m-1 btn-secondary">Dropdown End</div>
        <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
        <ul
          tabindex="0"
          class="dropdown-content menu z-10 w-52 rounded-box bg-base-200 p-2 shadow-sm"
        >
          <li><a href="#!">Item A</a></li>
          <li><a href="#!">Item B</a></li>
        </ul>
      </div>
    </div>
  </section>

  <!-- ===== SWAP ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Swap</h2>
    <div class="flex flex-wrap items-center gap-4">
      <label class="swap swap-rotate text-4xl">
        <input type="checkbox" />
        <div class="swap-on">🌙</div>
        <div class="swap-off">☀️</div>
      </label>
      <label class="swap swap-flip text-4xl">
        <input type="checkbox" />
        <div class="swap-on">😈</div>
        <div class="swap-off">😇</div>
      </label>
    </div>
  </section>

  <!-- ===== STEPS ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Steps</h2>
    <ul class="steps w-full">
      <li class="step step-primary">Register</li>
      <li class="step step-primary">Choose plan</li>
      <li class="step">Purchase</li>
      <li class="step">Confirmation</li>
    </ul>
  </section>

  <!-- ===== TIMELINE ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Timeline</h2>
    <ul class="timeline">
      <li>
        <div class="timeline-start">2024</div>
        <div class="timeline-middle"><div class="badge badge-xs badge-primary"></div></div>
        <div class="timeline-end timeline-box">Project started</div>
        <hr class="bg-primary" />
      </li>
      <li>
        <hr class="bg-primary" />
        <div class="timeline-start">2025</div>
        <div class="timeline-middle"><div class="badge badge-xs badge-primary"></div></div>
        <div class="timeline-end timeline-box">Beta release</div>
        <hr />
      </li>
      <li>
        <hr />
        <div class="timeline-start">2026</div>
        <div class="timeline-middle"><div class="badge badge-xs"></div></div>
        <div class="timeline-end timeline-box">Production launch</div>
      </li>
    </ul>
  </section>

  <!-- ===== STAT ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Stats</h2>
    <div class="stats w-full bg-base-200 shadow">
      <div class="stat">
        <div class="stat-title">Total Users</div>
        <div class="stat-value text-primary">25.6K</div>
        <div class="stat-desc">21% more than last month</div>
      </div>
      <div class="stat">
        <div class="stat-title">Revenue</div>
        <div class="stat-value text-secondary">$12,400</div>
        <div class="stat-desc">↗ 14% increase</div>
      </div>
      <div class="stat">
        <div class="stat-title">New Registers</div>
        <div class="stat-value text-accent">1,200</div>
        <div class="stat-desc">↘ 2% decrease</div>
      </div>
    </div>
  </section>

  <!-- ===== AVATAR ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Avatars</h2>
    <div class="flex flex-wrap items-center gap-4">
      <div class="avatar avatar-placeholder">
        <div class="w-12 rounded-full bg-primary text-primary-content">
          <span>AB</span>
        </div>
      </div>
      <div class="avatar avatar-placeholder">
        <div class="w-12 rounded-full bg-secondary text-secondary-content">
          <span>CD</span>
        </div>
      </div>
      <div class="avatar-online avatar avatar-placeholder">
        <div class="w-12 rounded-full bg-accent text-accent-content">
          <span>EF</span>
        </div>
      </div>
      <div class="avatar-offline avatar avatar-placeholder">
        <div class="w-12 rounded-full bg-neutral text-neutral-content">
          <span>GH</span>
        </div>
      </div>
      <div class="avatar-group -space-x-4">
        <div class="avatar avatar-placeholder">
          <div class="w-10 rounded-full bg-primary text-primary-content"><span>A</span></div>
        </div>
        <div class="avatar avatar-placeholder">
          <div class="w-10 rounded-full bg-secondary text-secondary-content"><span>B</span></div>
        </div>
        <div class="avatar avatar-placeholder">
          <div class="w-10 rounded-full bg-accent text-accent-content"><span>C</span></div>
        </div>
        <div class="avatar avatar-placeholder">
          <div class="w-10 rounded-full bg-neutral text-neutral-content"><span>+3</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== INDICATOR ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Indicator</h2>
    <div class="flex flex-wrap gap-8">
      <div class="indicator">
        <span class="indicator-item badge badge-primary">99+</span>
        <button class="btn">Inbox</button>
      </div>
      <div class="indicator">
        <span class="indicator-item badge indicator-start badge-secondary">New</span>
        <div class="rounded-box bg-base-200 p-4">Start indicator</div>
      </div>
      <div class="indicator">
        <span class="indicator-item badge indicator-bottom badge-accent">!</span>
        <button class="btn btn-outline">Bottom</button>
      </div>
    </div>
  </section>

  <!-- ===== STATUS ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Status</h2>
    <div class="flex flex-wrap items-center gap-6">
      <div class="flex items-center gap-2">
        <span class="status status-primary"></span><span>Primary</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="status status-secondary"></span><span>Secondary</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="status status-accent"></span><span>Accent</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="status status-success"></span><span>Online</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="status status-warning"></span><span>Away</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="status status-error"></span><span>Offline</span>
      </div>
    </div>
    <h3 class="text-lg font-medium">Sizes</h3>
    <div class="flex flex-wrap items-center gap-4">
      <span class="status status-xs status-success"></span>
      <span class="status status-sm status-success"></span>
      <span class="status status-md status-success"></span>
      <span class="status status-lg status-success"></span>
      <span class="status status-xl status-success"></span>
    </div>
  </section>

  <!-- ===== CHAT BUBBLE ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Chat Bubbles</h2>
    <div class="chat-start chat">
      <div class="chat-bubble chat-bubble-primary">Hey there! How are you?</div>
    </div>
    <div class="chat-end chat">
      <div class="chat-bubble chat-bubble-secondary">I'm doing great, thanks!</div>
    </div>
    <div class="chat-start chat">
      <div class="chat-bubble chat-bubble-accent">What are you working on?</div>
    </div>
    <div class="chat-end chat">
      <div class="chat-bubble chat-bubble-info">Building a DaisyUI showcase 🎨</div>
    </div>
  </section>

  <!-- ===== SKELETON ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Skeleton</h2>
    <div class="flex w-full max-w-sm flex-col gap-4">
      <div class="h-32 w-full skeleton"></div>
      <div class="h-4 w-3/4 skeleton"></div>
      <div class="h-4 w-1/2 skeleton"></div>
      <div class="flex items-center gap-4">
        <div class="h-12 w-12 shrink-0 skeleton rounded-full"></div>
        <div class="flex w-full flex-col gap-2">
          <div class="h-4 w-full skeleton"></div>
          <div class="h-4 w-2/3 skeleton"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== DIFF ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Diff</h2>
    <figure class="diff aspect-16/9 max-w-md">
      <div class="diff-item-1">
        <div
          class="grid h-full place-content-center bg-primary text-6xl font-bold text-primary-content"
        >
          A
        </div>
      </div>
      <div class="diff-item-2">
        <div
          class="grid h-full place-content-center bg-secondary text-6xl font-bold text-secondary-content"
        >
          B
        </div>
      </div>
      <div class="diff-resizer"></div>
    </figure>
  </section>

  <!-- ===== CAROUSEL ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Carousel</h2>
    <div class="carousel carousel-center gap-4 rounded-box bg-base-200 p-4">
      <div class="carousel-item">
        <div
          class="grid h-40 w-64 place-content-center rounded-box bg-primary text-xl font-bold text-primary-content"
        >
          Slide 1
        </div>
      </div>
      <div class="carousel-item">
        <div
          class="grid h-40 w-64 place-content-center rounded-box bg-secondary text-xl font-bold text-secondary-content"
        >
          Slide 2
        </div>
      </div>
      <div class="carousel-item">
        <div
          class="grid h-40 w-64 place-content-center rounded-box bg-accent text-xl font-bold text-accent-content"
        >
          Slide 3
        </div>
      </div>
      <div class="carousel-item">
        <div
          class="grid h-40 w-64 place-content-center rounded-box bg-neutral text-xl font-bold text-neutral-content"
        >
          Slide 4
        </div>
      </div>
    </div>
  </section>

  <!-- ===== STACK ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Stack</h2>
    <div class="stack w-64">
      <div class="card bg-primary text-primary-content">
        <div class="card-body"><p>Item 1</p></div>
      </div>
      <div class="card bg-secondary text-secondary-content">
        <div class="card-body"><p>Item 2</p></div>
      </div>
      <div class="card bg-accent text-accent-content">
        <div class="card-body"><p>Item 3</p></div>
      </div>
    </div>
  </section>

  <!-- ===== LIST ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">List</h2>
    <ul class="list rounded-box bg-base-200">
      <li class="list-row">
        <div class="avatar avatar-placeholder">
          <div class="w-10 rounded-full bg-primary text-primary-content"><span>A</span></div>
        </div>
        <div>
          <div class="font-bold">Alice Johnson</div>
          <div class="text-xs opacity-60">Developer</div>
        </div>
        <button class="btn btn-ghost btn-sm">View</button>
      </li>
      <li class="list-row">
        <div class="avatar avatar-placeholder">
          <div class="w-10 rounded-full bg-secondary text-secondary-content"><span>B</span></div>
        </div>
        <div>
          <div class="font-bold">Bob Smith</div>
          <div class="text-xs opacity-60">Designer</div>
        </div>
        <button class="btn btn-ghost btn-sm">View</button>
      </li>
      <li class="list-row">
        <div class="avatar avatar-placeholder">
          <div class="w-10 rounded-full bg-accent text-accent-content"><span>C</span></div>
        </div>
        <div>
          <div class="font-bold">Charlie Brown</div>
          <div class="text-xs opacity-60">Manager</div>
        </div>
        <button class="btn btn-ghost btn-sm">View</button>
      </li>
    </ul>
  </section>

  <!-- ===== LINK ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Link</h2>
    <div class="flex flex-wrap gap-4">
      <a class="link" href="#!">Default</a>
      <a class="link link-primary" href="#!">Primary</a>
      <a class="link link-secondary" href="#!">Secondary</a>
      <a class="link link-accent" href="#!">Accent</a>
      <a class="link link-neutral" href="#!">Neutral</a>
      <a class="link link-success" href="#!">Success</a>
      <a class="link link-info" href="#!">Info</a>
      <a class="link link-warning" href="#!">Warning</a>
      <a class="link link-error" href="#!">Error</a>
    </div>
    <div class="flex flex-wrap gap-4">
      <a class="link link-primary link-hover" href="#!">Hover link</a>
    </div>
  </section>

  <!-- ===== BREADCRUMBS ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Breadcrumbs</h2>
    <div class="breadcrumbs text-sm">
      <ul>
        <li><a href="#!">Home</a></li>
        <li><a href="#!">Documents</a></li>
        <li>Current Page</li>
      </ul>
    </div>
  </section>

  <!-- ===== MENU ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Menu</h2>
    <ul class="menu w-56 rounded-box bg-base-200">
      <li><a href="#!">Item 1</a></li>
      <li>
        <details>
          <summary>Submenu</summary>
          <ul>
            <li><a href="#!">Sub Item 1</a></li>
            <li><a href="#!">Sub Item 2</a></li>
          </ul>
        </details>
      </li>
      <li><a href="#!" class="active">Active Item</a></li>
      <li class="disabled"><a href="#!">Disabled</a></li>
    </ul>
  </section>

  <!-- ===== NAVBAR ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Navbar</h2>
    <div class="navbar rounded-box bg-base-200">
      <div class="navbar-start">
        <a class="btn text-xl btn-ghost" href="#!">Brand</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal">
          <li><a href="#!">Home</a></li>
          <li><a href="#!">About</a></li>
          <li><a href="#!">Contact</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <button class="btn btn-sm btn-primary">Login</button>
      </div>
    </div>
  </section>

  <!-- ===== HERO ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Hero</h2>
    <div class="hero min-h-48 rounded-box bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h3 class="text-3xl font-bold">Hello there</h3>
          <p class="py-4">
            A hero section is a great way to capture attention with a bold message and call to
            action.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== JOIN (Button Group) ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Join (Button Group)</h2>
    <div class="join">
      <button class="btn join-item btn-primary">Left</button>
      <button class="btn join-item btn-primary">Center</button>
      <button class="btn join-item btn-primary">Right</button>
    </div>
    <div class="join">
      <input class="input join-item" placeholder="Email" />
      <button class="btn join-item btn-secondary">Subscribe</button>
    </div>
  </section>

  <!-- ===== PAGINATION ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Pagination</h2>
    <div class="join">
      <button class="btn join-item">«</button>
      <button class="btn join-item">1</button>
      <button class="btn btn-active join-item">2</button>
      <button class="btn join-item">3</button>
      <button class="btn join-item">»</button>
    </div>
  </section>

  <!-- ===== DIVIDER ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Divider</h2>
    <div class="divider">OR</div>
    <div class="divider divider-primary">Primary</div>
    <div class="divider divider-secondary">Secondary</div>
    <div class="divider divider-accent">Accent</div>
  </section>

  <!-- ===== KBD ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Keyboard</h2>
    <div class="flex flex-wrap gap-2">
      <kbd class="kbd">⌘</kbd>
      <kbd class="kbd">⇧</kbd>
      <kbd class="kbd">⌥</kbd>
      <kbd class="kbd">Ctrl</kbd>
      <kbd class="kbd">A</kbd>
      <kbd class="kbd">B</kbd>
      <kbd class="kbd">C</kbd>
    </div>
    <p>Press <kbd class="kbd kbd-sm">Ctrl</kbd> + <kbd class="kbd kbd-sm">C</kbd> to copy</p>
  </section>

  <!-- ===== MASK ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Mask</h2>
    <div class="flex flex-wrap gap-4">
      <div class="mask h-16 w-16 bg-primary mask-squircle"></div>
      <div class="mask h-16 w-16 bg-secondary mask-heart"></div>
      <div class="mask h-16 w-16 bg-accent mask-hexagon"></div>
      <div class="mask h-16 w-16 bg-info mask-star"></div>
      <div class="mask h-16 w-16 bg-success mask-star-2"></div>
      <div class="mask h-16 w-16 bg-warning mask-triangle"></div>
      <div class="mask h-16 w-16 bg-error mask-diamond"></div>
      <div class="mask h-16 w-16 bg-neutral mask-circle"></div>
      <div class="mask h-16 w-16 bg-primary mask-pentagon"></div>
      <div class="mask h-16 w-16 bg-secondary mask-decagon"></div>
    </div>
  </section>

  <!-- ===== RATING ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Rating</h2>
    <div class="rating">
      <input type="radio" name="rating-1" class="mask bg-warning mask-star-2" />
      <input type="radio" name="rating-1" class="mask bg-warning mask-star-2" />
      <input type="radio" name="rating-1" class="mask bg-warning mask-star-2" checked />
      <input type="radio" name="rating-1" class="mask bg-warning mask-star-2" />
      <input type="radio" name="rating-1" class="mask bg-warning mask-star-2" />
    </div>
    <div class="rating-lg rating">
      <input type="radio" name="rating-2" class="mask bg-error mask-heart" />
      <input type="radio" name="rating-2" class="mask bg-error mask-heart" />
      <input type="radio" name="rating-2" class="mask bg-error mask-heart" />
      <input type="radio" name="rating-2" class="mask bg-error mask-heart" checked />
      <input type="radio" name="rating-2" class="mask bg-error mask-heart" />
    </div>
  </section>

  <!-- ===== TEXT ROTATE ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Text Rotate</h2>
    <div class="flex items-center gap-2 text-2xl font-bold">
      We build
      <span class="text-rotate text-3xl">
        <span class="justify-items-center">
          <span class="text-primary">Websites</span>
          <span class="text-secondary">Apps</span>
          <span class="text-accent">Platforms</span>
          <span class="text-info">APIs</span>
          <span class="text-success">Tools</span>
        </span>
      </span>
    </div>
  </section>

  <!-- ===== DOCK ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Dock</h2>
    <div
      class="relative flex h-48 items-end justify-center overflow-hidden rounded-box bg-base-200 p-4"
    >
      <div class="dock static">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            /></svg
          >
          <span class="dock-label">Home</span>
        </button>
        <button class="dock-active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            /></svg
          >
          <span class="dock-label">Info</span>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            /></svg
          >
          <span class="dock-label">Stats</span>
        </button>
      </div>
    </div>
  </section>

  <!-- ===== MOCKUP CODE ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Mockup Code</h2>
    <div class="mockup-code">
      <pre data-prefix="$"><code>npm i daisyui</code></pre>
      <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
      <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
    </div>
  </section>

  <!-- ===== MOCKUP BROWSER ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Mockup Browser</h2>
    <div class="mockup-browser bg-base-300">
      <div class="mockup-browser-toolbar">
        <div class="input">https://daisyui.com</div>
      </div>
      <div class="flex justify-center bg-base-200 px-4 py-16">Hello!</div>
    </div>
  </section>

  <!-- ===== MOCKUP PHONE ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Mockup Phone</h2>
    <div class="mockup-phone">
      <div class="mockup-phone-camera"></div>
      <div class="mockup-phone-display">
        <div class="flex h-full items-center justify-center bg-base-200">
          <p class="text-lg font-bold">Phone content</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== MOCKUP WINDOW ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Mockup Window</h2>
    <div class="mockup-window bg-base-300">
      <div class="flex justify-center bg-base-200 px-4 py-16">
        <p>Window content goes here</p>
      </div>
    </div>
  </section>

  <!-- ===== FOOTER ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Footer</h2>
    <footer class="footer rounded-box bg-base-200 p-10 sm:footer-horizontal">
      <nav>
        <h6 class="footer-title">Services</h6>
        <a class="link link-hover" href="#!">Branding</a>
        <a class="link link-hover" href="#!">Design</a>
        <a class="link link-hover" href="#!">Marketing</a>
      </nav>
      <nav>
        <h6 class="footer-title">Company</h6>
        <a class="link link-hover" href="#!">About us</a>
        <a class="link link-hover" href="#!">Contact</a>
        <a class="link link-hover" href="#!">Jobs</a>
      </nav>
      <nav>
        <h6 class="footer-title">Legal</h6>
        <a class="link link-hover" href="#!">Terms of use</a>
        <a class="link link-hover" href="#!">Privacy policy</a>
        <a class="link link-hover" href="#!">Cookie policy</a>
      </nav>
    </footer>
  </section>

  <!-- ===== CALENDAR (Cally) ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Calendar (Cally)</h2>

    <h3 class="text-lg font-medium">Calendar</h3>
    <calendar-date class="cally rounded-box border border-base-300 bg-base-100 shadow-lg">
      <svg
        aria-label="Previous"
        class="size-4 fill-current"
        {...{ slot: 'previous' }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg
      >
      <svg
        aria-label="Next"
        class="size-4 fill-current"
        {...{ slot: 'next' }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"><path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg
      >
      <calendar-month></calendar-month>
    </calendar-date>

    <h3 class="text-lg font-medium">Date Picker (dropdown)</h3>
    <button
      popovertarget="cally-popover-demo"
      class="input"
      id="cally-demo"
      style="anchor-name:--cally-demo"
    >
      Pick a date
    </button>
    <div
      popover
      id="cally-popover-demo"
      class="dropdown rounded-box bg-base-100 shadow-lg"
      style="position-anchor:--cally-demo"
    >
      <calendar-date
        class="cally"
        onchange={(e: Event): void => {
          const el = document.getElementById('cally-demo');
          const target = e.target;
          if (el && target instanceof HTMLInputElement) el.innerText = target.value;
        }}
      >
        <svg
          aria-label="Previous"
          class="size-4 fill-current"
          {...{ slot: 'previous' }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg
        >
        <svg
          aria-label="Next"
          class="size-4 fill-current"
          {...{ slot: 'next' }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"><path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg
        >
        <calendar-month></calendar-month>
      </calendar-date>
    </div>
  </section>

  <!-- ===== THEME CONTROLLER ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Theme Controller</h2>
    <div class="flex flex-wrap items-center gap-4">
      <label class="flex items-center gap-2">
        <input type="checkbox" value="dark" class="theme-controller toggle toggle-primary" />
        <span>Dark mode</span>
      </label>
    </div>
  </section>

  <!-- ===== TOAST ===== -->
  <section class="space-y-4">
    <h2 class="border-b border-base-300 pb-2 text-2xl font-semibold">Toast</h2>
    <button
      class="btn btn-primary"
      onclick={(): void => {
        showToast = true;
        setTimeout((): void => {
          showToast = false;
        }, 3000);
      }}
    >
      Show Toast (3s)
    </button>
    <div class="flex flex-col gap-2">
      <p class="text-sm opacity-70">Static examples:</p>
      <div class="relative h-48 w-full overflow-hidden rounded-box bg-base-200">
        <div class="toast static toast-start toast-bottom">
          <div class="alert alert-info">
            <span>Bottom-start toast</span>
          </div>
        </div>
        <div class="toast static toast-center toast-bottom">
          <div class="alert alert-success">
            <span>Bottom-center toast</span>
          </div>
        </div>
        <div class="toast static toast-end toast-bottom">
          <div class="alert alert-error">
            <span>Bottom-end toast</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

{#if showToast}
  <div class="toast toast-end toast-bottom">
    <div class="alert alert-success">
      <span>Action completed successfully!</span>
    </div>
  </div>
{/if}
