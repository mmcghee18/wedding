<script>
	export let date;
	export let title;
	export let time;
	export let locationName;
	export let locationAddress;
	export let locationLink;
	export let attire;
	export let description;
</script>

<div class="event">
	<p class="date">{date}</p>
	<h3>{title}</h3>
	<p>{time}</p>
	<p class="location-name">{locationName}</p>
	<a href={locationLink} target="_blank">{locationAddress}</a>
	<p class="description">Attire: {attire}</p>
	<p class="description">{@html description}</p>
</div>

<style>
	.event {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 2rem 0;
	}
	.date {
		font-family: var(--serif);
		font-size: 1.6rem;
	}
	h3 {
		font-size: 1.3rem;
		font-weight: 600;
		margin-bottom: 0;
		text-align: center;
	}
	p {
		margin: 0;
		text-align: center;
	}
	a {
		text-align: center;
		text-decoration: underline;
	}
	p.location-name {
		margin-top: 1rem;
	}
	p.description {
		margin-top: 1rem;
		max-width: 500px;
	}
</style>
