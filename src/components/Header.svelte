<script>
	import { base } from "$app/paths";
	import Icon from "$components/helpers/Icon.svelte";
	import viewport from "$stores/viewport.js";
	import _ from "lodash";
	import { onMount } from "svelte";
	import { afterNavigate } from "$app/navigation";

	let names = ["Michelle", "Megan"];
	let currentPage;
	let menuOpen = false;
	const openMenu = () => (menuOpen = true);
	const closeMenu = () => (menuOpen = false);

	const pages = [
		"home",
		"events",
		"travel",
		"faq",
		"photos",
		"registry",
		"rsvp"
	];

	$: {
		if ($viewport.width > 750) {
			closeMenu();
		}
	}

	onMount(() => {
		names = _.shuffle(names);
	});
	afterNavigate(() => {
		currentPage = window.location.pathname.split("/")[1];
	});
</script>

<header>
	<h1>{names[0]} & {names[1]}</h1>
	<button class="open-menu" on:click={openMenu}>
		<Icon name="menu" />
	</button>

	<nav>
		<ul class="desktop">
			{#each pages as page}
				{@const link = `${base}/${page === "home" ? "" : page}`}
				{@const selected =
					(page === "home" && currentPage === "") || currentPage === page}
				{@const display =
					page === "faq"
						? "FAQs"
						: page === "rsvp"
						  ? "RSVP"
						  : _.startCase(page)}
				<li>
					<a href={link} class:selected>{display}</a>
				</li>
			{/each}
		</ul>

		<div class="slide-nav" class:visible={menuOpen}>
			<button class="close-menu" on:click={closeMenu}>
				<Icon name="x" stroke="white" />
			</button>

			<div class="info">
				<div>Michelle & Megan</div>
				<div>June 1, 2024</div>
			</div>

			<ul class="mobile">
				{#each pages as page}
					{@const link = `${base}/${page === "home" ? "" : page}`}
					{@const display =
						page === "faq"
							? "FAQs"
							: page === "rsvp"
							  ? "RSVP"
							  : _.startCase(page)}
					<li>
						<a href={link} on:click={closeMenu}>{display}</a>
					</li>
				{/each}
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
		margin-top: 2rem;
	}

	ul li {
		margin: 0 0.5rem;
	}
	ul.mobile li {
		font-size: 1.5rem;
		margin: 1rem 0;
	}

	li a {
		text-decoration: none;
		border-bottom: none;
	}
	li a.selected {
		border-bottom: 3px solid var(--color-accent);
	}
	ul li a:hover {
		border-bottom: 3px solid var(--color-accent);
		background: none;
	}
	ul.mobile li a {
		color: white;
	}

	.slide-nav {
		z-index: 1000;
		background: var(--color-fg);
		color: white;
		height: 100%;
		padding: 3.5rem 2rem;
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

	.info {
		border-bottom: 1px solid var(--color-gray-400);
		padding-bottom: 2rem;
	}

	@media (max-width: 750px) {
		ul.desktop {
			display: none;
		}
		.open-menu {
			display: flex;
		}
		h1 {
			display: none;
		}
	}
</style>
