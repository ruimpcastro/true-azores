<script>
	import profilePicture from '../lib/images/profile-picture.png?enhanced';
</script>

<section class="container">
	<div>
		<enhanced:img class="profile-picture" alt="Profile picture" src={profilePicture} />
	</div>
	<div class="introduction">
		<h3>Nelson Silva</h3>
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
	.profile-picture {
		width: 200px;
		height: auto;
		transform: scaleX(-1);
		border-radius: 50%;
	}
</style>
