<script>
	import Event from "$components/Event.svelte";
</script>

<div class="schedule">
	<h2>Schedule</h2>
	<p class="intro">
		There will be several opportunities to celebrate and connect throughout the
		weekend!
	</p>

	<Event
		date="Friday, May 31, 2024"
		title="Welcome Drinks 🍻"
		time="7:30 - 9:30pm"
		locationName="Humble Sea Brewing Co."
		locationAddress="820 Swift Street, Santa Cruz, CA 95060"
		locationLink={"https://maps.app.goo.gl/hrivu5z4HWjnseH5A"}
		description="Come say hi, we'd love to give you a hug before the big day!"
	/>
	<Event
		date="Saturday, June 1, 2024"
		title="Ceremony and Reception 🌲"
		time="3:30 - 10:00pm"
		locationName="Waterfall Lodge and Retreat"
		locationAddress="180 Hidden Falls Trail, Ben Lomond, CA 95005"
		locationLink={"https://maps.app.goo.gl/u2cjHNFdX4FQzMFf6"}
		description="Join us for our ceremony in the redwoods followed by dinner and dancing."
	/>
	<Event
		date="Sunday, June 2, 2024"
		title="Farewell Hike 🌊"
		time="11:00am"
		locationName="Wilder Ranch State Park"
		locationAddress="1401 Coast Rd, Santa Cruz, CA 95060"
		locationLink={"https://maps.app.goo.gl/U9AYH5vzKy2hn3wo6"}
		description="Grab your own coffee & breakfast, and then join us for a hike on the beautiful California coast. We'll re-live our favorite memories of the weekend and say goodbye for now."
	/>
</div>

<style>
	.intro {
		max-width: 630px;
		text-align: center;
	}
	.schedule {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h2 {
		font-family: var(--serif);
		display: none;
		text-align: center;
	}

	@media (max-width: 750px) {
		h2 {
			display: block;
		}
	}
</style>
