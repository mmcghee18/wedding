<script>
	import _ from "lodash";

	export let question;
	export let answer;
</script>

<div class="faq" id={_.kebabCase(question)}>
	<h3>{@html question}</h3>
	<p>{@html answer}</p>
</div>

<style>
	h3 {
		font-family: var(--serif);
		font-size: 1.2rem;
		font-weight: bold;
	}
	.faq {
		margin: 2rem 0;
	}
	p {
		white-space: pre-line;
		padding-left: 2rem;
	}
</style>
