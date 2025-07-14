<script>
	import logo from '$lib/images/true-azores-logo.jpg';
</script>

<section>
	<div class="hero-image">
		<div class="img-container">
			<img src={logo} alt="True Azores logo" />
		</div>
	</div>
</section>

<style>
	section {
		margin-bottom: 4rem;
	}
	.hero-image {
		background-image: url('$lib/images/gallery/sete-cidades/ph1.JPG');
		height: 50vh;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	.img-container {
		width: 164px;
		height: 164px;
		border-radius: 50%;
		overflow: hidden;
		position: relative;
		background-color: white;
		box-shadow: 0 0 20px rgba(0, 0, 100, 0.8);
		margin-bottom: 4rem;
	}
	img {
		width: 172px;
		height: 172px;
		position: absolute;
		left: 5%;
	}
</style>
