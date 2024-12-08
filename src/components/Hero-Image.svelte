<script>
	import heroImage from '../lib/images/hero-image-example.png';
</script>

<section>
	<div class="hero-image">
		<h1>True Azores</h1>
	</div>
</section>

<style>
	section {
		margin-bottom: 4rem;
	}
	.hero-image {
		background-image: url('../lib/images/hero-image-example.png');
		height: 50vh;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
	}

	h1 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
		font-size: 3rem;
		text-align: center;
	}
</style>
