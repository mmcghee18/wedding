<script>
	import PageTitle from "$components/PageTitle.svelte";
</script>

<div class="container">
	<PageTitle>Michelle & Megan</PageTitle>

	<div class="countdown">
		<h2>June 1, 2024</h2>
		<div>Ben Lomond, CA</div>
		<div class="rsvp">
			Please <a
				href={"https://www.zola.com/wedding/michelleandmegan2024/rsvp"}
				target="_blank">RSVP</a
			> by April 1st :)
		</div>
	</div>

	<div class="pics">
		<img src="home/pic4.jpg" />
		<img src="home/pic3.jpg" />
		<img src="home/pic1.jpg" />
	</div>

	<div class="text-wrapper">
		<div class="text">
			<p>
				In getting married we are forging a new family unit. We enter this
				commitment both hopeful for our future and the joys ahead, and with
				somber acknowledgement of unforeseen challenges to come.
			</p>

			<p>
				To navigate the joys and challenges ahead, we will need the twin pillars
				of celebration and support from our community - all of you! We hope that
				you will leave our wedding with a deeper understanding of us as a couple
				and with your own renewed commitments to community and family.
			</p>
		</div>

		<div class="text">
			<p>
				We're so excited to get married on the first day of Pride Month! It's
				2024, a time when a queer couple getting married is wonderfully
				ordinary.
			</p>
			<p>
				At the same time, it's an opportunity to reflect on those who fought
				(recently!) for this right, and continue to fight for the freedom and
				acceptance we all deserve.
			</p>
			<p>
				This event is a celebration of queer love and the families we create.
			</p>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h2 {
		font-family: var(--serif);
		margin: 0 0 1rem 0;
	}
	.rsvp {
		margin-top: 1rem;
	}
	.countdown {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 4rem;
	}
	.pics {
		display: flex;
		width: 100%;
		margin-bottom: 3rem;
	}
	img {
		padding: 10px;
		background: var(--color-gray-100);
		width: 33%;
		height: auto;
	}
	img:nth-child(1) {
		transform: rotate(5deg);
	}
	img:nth-child(2) {
		transform: rotate(-3deg);
	}
	img:nth-child(3) {
		transform: rotate(2deg);
	}
	.text-wrapper {
		display: flex;
	}
	.text {
		display: flex;
		flex-direction: column;
		width: 50%;
		margin: 0 1rem;
	}
</style>
