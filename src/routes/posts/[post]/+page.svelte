<script>
	import { base } from '$app/paths';
	export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<svelte:component this={data.markdown}></svelte:component>
<!-- {#await a then Markd} -->
<!-- 	<Markd.default /> -->
<!-- {/await} -->
