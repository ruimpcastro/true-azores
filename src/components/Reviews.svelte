<script>
</script>

<section>
	<h3 class="container-padding">Client Reviews</h3>
	<div class="cards">
		<section class="card">
			<div>
				<h4>Client A</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. As pernatur repudiandae dolorum
					consequuntur dolores, rem rerum velit? Tenetur hic, ad nostrum ipsum incidunt porro
					blanditiis culpa architecto iusto error, qui officia.
				</p>
			</div>
		</section>
		<section class="card">
			<div>
				<h4>Client B</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. As pernatur repudiandae dolorum
					consequuntur dolores, rem rerum velit? Tenetur hic, ad nostrum ipsum incidunt porro
					blanditiis culpa architecto iusto error, qui officia.
				</p>
			</div>
		</section>
		<section class="card">
			<div>
				<h4>Client C</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. As pernatur repudiandae dolorum
					consequuntur dolores, rem rerum velit? Tenetur hic, ad nostrum ipsum incidunt porro
					blanditiis culpa architecto iusto error, qui officia.
				</p>
			</div>
		</section>
	</div>
</section>

<style>
	.container-padding {
		max-width: 1200px;
		margin: 2rem auto 0;
		padding: 0 20px;
	}
	.cards {
		display: flex;
		gap: 1rem;
		max-width: 1200px;
		margin: 0 auto 1rem;
		padding: 0 20px;
	}

	.card {
		border-radius: 1.5rem;
		box-shadow: 0 0 10px rgba(0, 0, 100, 0.5);
		padding: 1rem;
		margin: 1rem 0.5rem;
	}

	@media (max-width: 1024px) {
		.cards {
			display: flex;
			overflow-x: auto;
			scroll-snap-type: x mandatory;
			gap: 0;
		}
		.card {
			min-width: 300px;
			padding: 1rem;
			scroll-snap-align: center;
		}
	}
</style>
