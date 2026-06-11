<script lang="ts">
	import { page } from '$app/state';
	import { browser } from '$app/environment';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import logo from '$lib/assets/images/logo.svg';

	if (browser) {
		import('cally');
	}

	let { children } = $props();

	const isTauri = browser && '__TAURI_INTERNALS__' in window;

	// App state
	let appReady = $state(false);
	let isOffline = $state(false);
	let updateAvailable: any = $state(null);
	let isMajorUpdate = $state(false);
	let isUpdating = $state(false);
	let updateProgress = $state(0);

	// Show app immediately for web, wait for update check on Tauri
	if (browser) {
		if (!isTauri) {
			showApp();
		}
	}

	function showApp() {
		appReady = true;
		if (browser) {
			const loader = document.getElementById('app-loader');
			const content = document.getElementById('app-content');
			if (loader) loader.remove();
			if (content) content.style.display = 'contents';
		}
	}

	// Tauri window
	let appWindow: any;
	let isMaximized = $state(false);

	if (isTauri) {
		import('@tauri-apps/api/window').then(async ({ getCurrentWindow }) => {
			appWindow = getCurrentWindow();
			isMaximized = await appWindow.isMaximized();
			appWindow.onResized(async () => {
				isMaximized = await appWindow.isMaximized();
			});
		});

		// Check for updates
		checkForUpdates();
	}

	async function checkForUpdates() {
		try {
			const { check } = await import('@tauri-apps/plugin-updater');
			const update = await check();

			if (update) {
				updateAvailable = update;
				isMajorUpdate = isMajorVersionBump(update.version);

				if (isMajorUpdate) {
					// Major update: show update screen (loader stays but content changes)
					const loader = document.getElementById('app-loader');
					if (loader) loader.remove();
					const content = document.getElementById('app-content');
					if (content) content.style.display = 'contents';
					return;
				}
			}

			// No update or minor/patch: let the user in
			showApp();
		} catch {
			// Offline or error: let the user in but flag offline
			isOffline = true;
			showApp();
		}
	}

	function isMajorVersionBump(newVersion: string): boolean {
		const current: string = __APP_VERSION__;
		const currentMajor = parseInt(current.replace(/^v/, '').split('.')[0] ?? '0');
		const newMajor = parseInt(newVersion.replace(/^v/, '').split('.')[0] ?? '0');
		return newMajor > currentMajor;
	}

	async function installUpdate() {
		if (!updateAvailable) return;
		isUpdating = true;

		try {
			await updateAvailable.downloadAndInstall((event: any) => {
				if (event.event === 'Started' && event.data.contentLength) {
					updateProgress = 0;
				} else if (event.event === 'Progress') {
					updateProgress += event.data.chunkLength;
				}
			});

			const { relaunch } = await import('@tauri-apps/plugin-process');
			await relaunch();
		} catch {
			isUpdating = false;
		}
	}

	// Titlebar
	function handleTitlebarMousedown(e: MouseEvent) {
		if (e.buttons !== 1 || !appWindow) return;
		if ((e.target as HTMLElement).closest('button')) return;

		if (e.detail === 2) {
			appWindow.toggleMaximize();
		} else {
			appWindow.startDragging();
		}
	}

	function minimize() {
		appWindow?.minimize();
	}

	function toggleMaximize() {
		appWindow?.toggleMaximize();
	}

	function close() {
		appWindow?.close();
	}

	// External links
	if (browser) {
		document.addEventListener('click', (e) => {
			const anchor = (e.target as HTMLElement).closest('a');
			if (!anchor) return;

			const href = anchor.getAttribute('href');
			if (!href) return;

			try {
				const url = new URL(href, window.location.origin);
				if (url.origin !== window.location.origin) {
					e.preventDefault();
					if (isTauri) {
						import('@tauri-apps/plugin-opener').then(({ openUrl }) => {
							openUrl(url.href);
						});
					} else {
						window.open(url.href, '_blank');
					}
				}
			} catch {
				// Invalid URL, let it through
			}
		});
	}
</script>

<svelte:head>
	<title>Bibo</title>
	<link rel="icon" href={logo} />
</svelte:head>

{#if isTauri}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="navbar h-10 min-h-0 bg-base-200 select-none" onmousedown={handleTitlebarMousedown}>
		<div class="flex-1">
			<span class="px-3 font-['Nunito'] font-semibold">Bibo</span>
		</div>
		<div class="flex flex-none items-center gap-1">
			{#if updateAvailable && !isMajorUpdate && appReady}
				<button class="btn btn-xs btn-primary" onclick={installUpdate} disabled={isUpdating}>
					{#if isUpdating}
						<span class="loading loading-xs loading-spinner"></span>
						Mise à jour...
					{:else}
						Restart to Update
					{/if}
				</button>
			{/if}
			<button class="btn btn-square btn-ghost btn-sm" onclick={minimize} aria-label="Minimiser">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path d="M5 12h14" />
				</svg>
			</button>
			<button
				class="btn btn-square btn-ghost btn-sm"
				onclick={toggleMaximize}
				aria-label="Agrandir"
			>
				{#if isMaximized}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<rect x="8" y="4" width="12" height="12" rx="1" />
						<path d="M4 8h12v12H4z" />
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<rect x="4" y="4" width="16" height="16" rx="2" />
					</svg>
				{/if}
			</button>
			<button
				class="btn btn-square btn-ghost btn-sm hover:bg-error hover:text-error-content"
				onclick={close}
				aria-label="Fermer"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path d="M6 6l12 12M6 18L18 6" />
				</svg>
			</button>
		</div>
	</div>
{/if}

{#if !appReady}
	<!-- Loading / Update check screen -->
	<div class="flex h-screen flex-col items-center justify-center gap-4">
		{#if isMajorUpdate && updateAvailable}
			<!-- Major update: force install -->
			<div class="card bg-base-200 p-8 text-center shadow-lg">
				<h2 class="text-xl font-bold">Mise à jour requise</h2>
				<p class="mt-2 text-base-content/70">
					Une nouvelle version majeure ({updateAvailable.version}) est disponible.
				</p>
				{#if updateAvailable.body}
					<p class="mt-2 text-sm text-base-content/60">{updateAvailable.body}</p>
				{/if}
				<button class="btn mt-6 btn-primary" onclick={installUpdate} disabled={isUpdating}>
					{#if isUpdating}
						<span class="loading loading-spinner"></span>
						Installation en cours...
					{:else}
						Installer la mise à jour
					{/if}
				</button>
			</div>
		{:else}
			<!-- Initial loading -->
			<span class="loading loading-lg loading-spinner"></span>
			<p class="text-sm text-base-content/60">Vérification des mises à jour...</p>
		{/if}
	</div>
{:else}
	{@render children()}
{/if}

<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>
