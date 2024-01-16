<script>
	import PageTitle from "$components/PageTitle.svelte";
</script>

<div class="rsvp">
	<PageTitle>RSVP</PageTitle>

	<a
		href="https://www.zola.com/wedding/michelleandmegan2024/rsvp"
		target="_blank">Click here to RSVP.</a
	>

	<p>Please RSVP by March 31st!</p>
</div>

<style>
	.rsvp {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h2 {
		text-align: center;
		font-family: var(--serif);
		display: none;
	}
	a {
		font-size: 3rem;
		text-align: center;
	}

	@media (max-width: 750px) {
		h2 {
			display: block;
		}
	}
</style>
