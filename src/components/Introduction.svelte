<script>
	import profilePicture from '$lib/images/profile-picture.png';
</script>

<section class="container">
	<div class="pre-intro">
		<h1 class="hero-text">Meet your next Azorean tour guide</h1>
	</div>
	<section class="introduction-container">
		<div class="picture-container">
			<img alt="Profile picture" src={profilePicture} />
		</div>
		<div class="introduction">
			<h3>Nelson Silva</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur repudiandae dolorum
				consequuntur dolores, rem rerum velit? Tenetur hic, ad nostrum ipsum incidunt porro
				blanditiis culpa architecto iusto error, qui officia.
			</p>
		</div>
	</section>
</section>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 0 20px;
	}
	.pre-intro {
		display: flex;
		justify-content: center;
	}
	.hero-text {
		font-size: 3rem;
		text-align: center;
	}
	.introduction-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 2rem;

		@media (max-width: 768px) {
			flex-direction: column;
			gap: 0;
			text-align: justify;
			text-justify: auto;
		}
	}
	.introduction {
		max-width: 35rem;
	}

	.picture-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	img {
		width: 200px;
		height: auto;
		transform: scaleX(-1);
		border-radius: 50%;
		box-shadow: 0 0 20px rgba(0, 0, 100, 0.8);
	}
</style>
