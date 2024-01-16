<h2>
	<slot />
</h2>

<style>
	h2 {
		text-align: center;
		font-family: var(--serif);
		display: none;
	}

	@media (max-width: 750px) {
		h2 {
			display: block;
		}
	}
</style>
