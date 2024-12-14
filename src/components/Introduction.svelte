<script>
	import profilePicture from '../lib/images/profile-picture.png';
</script>

<section class="container">
	<div>
		<img
			class="profile-picture"
			alt="Profile picture"
			src="https://scontent.ffnc2-1.fna.fbcdn.net/v/t1.6435-9/127189277_10158906955959583_2985634516736407316_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=MxNw_Wb79Q4Q7kNvgG3KaAW&_nc_zt=23&_nc_ht=scontent.ffnc2-1.fna&_nc_gid=AZUD6zMw1kkcG0HeYRw_h_5&oh=00_AYDgbvtR_qT1qJ_u6rX-stclHM2wOir3IoaJeXKmKg0y5Q&oe=678540A9"
		/>
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
