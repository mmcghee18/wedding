<script>
	import PageTitle from "$components/PageTitle.svelte";
</script>

<PageTitle>Travel</PageTitle>

<div class="getting-there">
	<h3>Getting there</h3>
	<p>
		For out of town guests, we recommend flying into San Francisco (SFO) or San
		Jose (SJC) airports.
	</p>
	<p>
		From there, you can drive down to Ben Lomond and Santa Cruz - it is about an
		hour and a half from SFO and 45 minutes from SJC.
	</p>

	<div class="highlight">
		<p>
			<strong>Important note about driving to Waterfall Lodge:</strong>
		</p>
		<p>
			Waterfall Lodge has limited parking and does not allow people to park
			onsite unless they're staying there overnight. If you're staying elsewhere
			on Saturday night, we have a shuttle that will pick you up ~5 minutes out
			from Waterfall Lodge and bring you in. The shuttle pick-up is at this
			address: <a href="https://maps.app.goo.gl/ZDKXz6fA4psmTPGC7"
				>St Peter & St Paul Orthodox</a
			>. Plan to catch a shuttle around 2:30pm, stay tuned for more details.
		</p>

		<p>
			The shuttles will also bring guests back to their cars at the end of the
			reception.
		</p>

		<p>
			If you stay in a cabin on Saturday night after the ceremony (see info
			below), you are able to drive into and park at Waterfall Lodge.
		</p>
	</div>
</div>

<div class="cabins">
	<img src="cabins.jpeg" />
	<p class="caption">The cabins at Waterfall Lodge 😍</p>
</div>

<div class="where-to-stay">
	<h3>Where to stay</h3>
	<ul>
		<li>
			<strong>Waterfall Lodge</strong> - This is where Saturday's ceremony and
			reception will be held. There are cabins that are available on Saturday
			night only. This is a great option if you don't want to drive after the
			party, or just want more time in the redwoods! Cabins are $295 each, and
			can be occupied by groups of 2-4. If you are interested in this, please
			indicate that in your
			<a
				href="https://www.zola.com/wedding/michelleandmegan2024/rsvp"
				target="_blank">RSVP</a
			> and we'll be in touch.
		</li>

		<li><strong>Hotels</strong> - There are a number of nearby hotels.</li>
		<ul>
			<li>
				<strong>Historic Brookdale Lodge</strong> (<a
					href="https://maps.app.goo.gl/29wX72NpXNy46jJt5">Google Maps</a
				>)<br />
				This is one of the closest hotels to Waterfall Lodge.
			</li>
			<li>
				<strong>Quality Inn & Suites Santa Cruz Mountains</strong> (<a
					href="https://maps.app.goo.gl/r9j1Jp4ppNUw1LdU9">Google Maps</a
				>)<br />
				Another option in Ben Lomond, just 5 minutes away from Waterfall Lodge.
			</li>
			<li>
				<strong>Hampton Inn Santa Cruz West</strong> (<a
					href="https://maps.app.goo.gl/jdkLgZiaAjDkC8SV6">Google Maps</a
				>)<br />
				Santa Cruz is also a great place to stay and explore! This hotel is right
				across the street from where we'll be having welcome drinks on Friday, and
				is a 30 minute drive to Waterfall Lodge.
			</li>
		</ul>

		<li>
			<strong>Airbnb / VRBO</strong> - There are a number of options, in Ben Lomond,
			Santa Cruz, or other surrounding areas.
		</li>
	</ul>
</div>

<div class="map">
	<iframe
		src="https://www.google.com/maps/d/u/0/embed?mid=1ISti2Tg9F6tra00AhR5ym9EGrlyLPUY&ehbc=2E312F"
		width="640"
		height="480"
	></iframe>
</div>

<style>
	h3 {
		font-family: var(--serif);
	}
	li {
		margin: 1rem 0;
	}
	.getting-there {
		margin-bottom: 4rem;
	}
	.cabins {
		max-width: 500px;
		margin: auto;
	}
	.where-to-stay {
		margin-top: 4rem;
	}
	.map {
		margin-top: 4rem;
		display: flex;
		justify-content: center;
	}
	.highlight {
		background: rgb(246, 239, 204);
		padding: 0.5rem 1rem;
	}
</style>
