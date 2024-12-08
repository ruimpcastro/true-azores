<script>
	import profilePicture from '../lib/images/profile-picture.png';
</script>

<section class="container">
	<div>
		<img alt="Profile picture" src={profilePicture} />
	</div>
	<div class="introduction">
		<h3>Lorem Ipsum</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur repudiandae dolorum
			consequuntur dolores, rem rerum velit? Tenetur hic, ad nostrum ipsum incidunt porro blanditiis
			culpa architecto iusto error, qui officia.
		</p>
	</div>
</section>

<style>
	.container {
		display: flex;
		flex-direction: row;
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
	img {
		width: 200px;
		transform: scaleX(-1);
		border-radius: 50%;
	}
</style>
