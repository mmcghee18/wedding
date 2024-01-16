<script>
	import "$styles/app.css";
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
</script>

<Header />
<main id="content">
	<slot />
</main>
<Footer />

<style>
	main {
		max-width: 1000px;
		margin: auto;
		padding: 2rem 5rem;
	}

	@media (max-width: 750px) {
		main {
			padding: 0rem 2rem;
		}
	}
</style>
