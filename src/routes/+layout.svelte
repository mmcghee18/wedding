<script>
	import "$styles/app.css";
	import Header from "$components/Header.svelte";
</script>

<Header />
<main id="content">
	<slot />
</main>

<style>
	main {
		max-width: 1000px;
		margin: auto;
		padding: 3rem 5rem;
	}
</style>
