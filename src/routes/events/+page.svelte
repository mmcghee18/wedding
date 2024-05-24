<script>
	import Event from "$components/Event.svelte";
	import PageTitle from "$components/PageTitle.svelte";
</script>

<div class="events">
	<PageTitle>Events</PageTitle>

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
		attire={"Cute casual"}
		description="We'll have some snacks and there will be drinks available for purchase. We'd recommend eating dinner before you come.<br/>Come say hi, we'd love to give you a hug before the big day!"
	/>
	<Event
		date="Saturday, June 1, 2024"
		title="Ceremony & Reception 🌲"
		time="3:30 - 10pm"
		locationName="Waterfall Lodge and Retreat"
		locationAddress="180 Hidden Falls Trail, Ben Lomond, CA 95005"
		locationLink={"https://maps.app.goo.gl/u2cjHNFdX4FQzMFf6"}
		attire={"Semi-formal (and bring a layer!)"}
		description="Join us for our ceremony in the redwoods followed by dinner and dancing. The ceremony will start at 3:30pm, so please plan to arrive by 3pm. The reception will end at 10pm, but we'll have shuttles taking people to an afterparty at a nearby bar."
	/>
	<Event
		date="Sunday, June 2, 2024"
		title="Farewell Hike 🌊"
		time="11:00am"
		locationName="Wilder Ranch State Park"
		locationAddress="Meet here (trailhead parking lot)"
		locationLink={"https://www.google.com/maps/place/Wilder+Ranch+Day+Use+Parking/@36.9621272,-122.0885102,14.61z/data=!4m6!3m5!1s0x808e430cdd7ca689:0xb9159324337fc767!8m2!3d36.9601915!4d-122.0857124!16s%2Fg%2F11j6hdwzk8?entry=ttu"}
		attire={"Something good for hiking!"}
		description="Grab your own coffee & breakfast, and then join us for a hike on the beautiful California coast. We'll gather at the trailhead and start hiking the <a href=https://www.alltrails.com/trail/us/california/old-landing-cove-trail target=_blank>Old Cove Landing Trail</a> (an easy 2.4-mile loop that takes a little under an hour) at 11:15am.<br/>We'll re-live our favorite memories of the weekend and say goodbye for now."
	/>
</div>

<style>
	.intro {
		max-width: 630px;
		text-align: center;
	}
	.events {
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
