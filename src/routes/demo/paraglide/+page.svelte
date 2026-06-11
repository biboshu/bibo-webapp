<script lang="ts">
	import { setLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';
</script>

<h1>{m.hello_world({ name: 'SvelteKit User' })}</h1>

<div>
	<button onclick={(): void | Promise<void> => setLocale('en-US')}>en-US</button>
	<button onclick={(): void | Promise<void> => setLocale('fr-FR')}>fr-FR</button>
</div>
