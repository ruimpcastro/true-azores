<script>
	import profilePicture from '$lib/images/profile-picture.png';
</script>

<section class="container">
	<div class="pre-intro">
		<h1 class="hero-text">Meet your next São Miguel tour guide</h1>
	</div>
	<section class="introduction-container">
		<div class="picture-container">
			<img alt="Profile picture" src={profilePicture} />
		</div>
		<div class="introduction">
			<h3>Nelson Silva</h3>
			<p>
				Born in Portugal, Nelson began his career in hospitality at a young age as a baggage handler
				in luxury hotels, quickly advancing due to his dedication and attention to detail.
			</p>
			<p>
				He later became a hotel director on cruise ships, managing complex operations and ensuring
				exceptional passenger experiences for 15 years, traveling the world and gaining invaluable
				experience working with diverse nationalities and cultures. Driven by a deep love for the
				Azores, he moved to the island of São Miguel to combine his two passions: the island and
				tourism.
			</p>
			<p>
				Currently, he is focused on promoting local tourism and creating authentic, high‑quality
				experiences with professionalism and a commitment to excellence alongside his team.
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
