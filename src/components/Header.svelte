<script>
	import Icon from "$components/helpers/Icon.svelte";
	import viewport from "$stores/viewport.js";

	let menuOpen = false;

	$: {
		if ($viewport.width > 750) {
			menuOpen = false;
		}
	}
</script>

<header>
	<h1>Michelle & Megan</h1>
	<button class="open-menu" on:click={() => (menuOpen = true)}>
		<Icon name="menu" />
	</button>

	<nav>
		<ul class="desktop">
			<li><a href="/">Home</a></li>
			<li><a href="/schedule">Schedule</a></li>
			<li><a href="/registry">Registry</a></li>
			<li><a href="/travel">Travel</a></li>
			<li><a href="/faq">FAQs</a></li>
			<li><a href="/photos">Photos</a></li>
			<li><a href="/rsvp">RSVP</a></li>
		</ul>

		<div class="slide-nav" class:visible={menuOpen}>
			<button class="close-menu" on:click={() => (menuOpen = false)}>
				<Icon name="x" />
			</button>

			<ul class="mobile">
				<li><a href="/">Home</a></li>
				<li><a href="/schedule">Schedule</a></li>
				<li><a href="/registry">Registry</a></li>
				<li><a href="/travel">Travel</a></li>
				<li><a href="/faq">FAQs</a></li>
				<li><a href="/photos">Photos</a></li>
				<li><a href="/rsvp">RSVP</a></li>
			</ul>
		</div>
	</nav>
</header>

<style>
	header {
		max-width: 700px;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
	}

	.open-menu {
		display: none;
		position: absolute;
		top: 2rem;
		right: 2rem;
		font-size: 1.5rem;
		border-radius: 50%;
		padding: 8px;
		background-color: #f9f9f9;
		box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
	}

	h1 {
		margin: 1rem 0 2rem 0;
		text-align: center;
		font-family: var(--serif);
	}

	nav {
		width: 100%;
	}

	ul {
		display: flex;
		width: 100%;
		justify-content: space-between;
		list-style-type: none;
		margin: 0;
		padding: 0;
		font-family: var(--sans);
	}
	ul.mobile {
		flex-direction: column;
		margin-top: 3rem;
	}

	ul li {
		margin: 0 0.5rem;
	}
	ul.mobile li {
		font-size: 1.5rem;
		margin: 1rem;
	}

	li a {
		text-decoration: none;
		border-bottom: none;
	}

	ul li a:hover {
		border-bottom: 3px solid var(--color-accent);
		background: none;
	}

	.slide-nav {
		background-color: lightgrey;
		height: 100%;
		padding: 1rem;
		position: fixed;
		right: 0;
		top: 0;
		text-align: left;
		width: 300px;
		transition: transform 0.3s ease-in-out 0s;
		transform: translateX(301px);
	}
	.slide-nav.visible {
		transform: translateX(0px);
	}

	.close-menu {
		font-size: 1.5rem;
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: none;
	}

	@media (max-width: 750px) {
		ul.desktop {
			display: none;
		}
		.open-menu {
			display: flex;
		}
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 2rem;
		}
	}
</style>
