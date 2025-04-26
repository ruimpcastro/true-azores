<script>
</script>

<section>
	<h3>Recent pictures of visited places</h3>
	<div class="row">
		<div class="column">
			<img src="https://picsum.photos/200/300" style="width:100%; max-height: 215px" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
		</div>
		<div class="column">
			<img src="https://picsum.photos/200/300" style="width:100%; max-height: 500px" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
		</div>
		<div class="column">
			<img src="https://picsum.photos/200/300" style="width:100%; max-height: 370px" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
		</div>
		<div class="column">
			<img src="https://picsum.photos/200/300" style="width:100%; max-height: 470px" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
			<img src="https://picsum.photos/200/300" style="width:100%" />
		</div>
	</div>
</section>

<style>
	.row {
		display: -ms-flexbox; /* IE10 */
		display: flex;
		-ms-flex-wrap: wrap; /* IE10 */
		flex-wrap: wrap;
		padding: 0 4px;
	}

	/* Create four equal columns that sits next to each other */
	.column {
		-ms-flex: calc(1200 * 0.25); /* IE10 */
		flex: calc(1200 * 0.25);
		max-width: calc(1200 * 0.25);
		padding: 0 4px;
	}

	.column img {
		margin-top: 8px;
		vertical-align: middle;
		width: 100%;
		border-radius: 1.5rem;
	}

	/* Responsive layout - makes a two column-layout instead of four columns */
	@media screen and (max-width: 800px) {
		.column {
			-ms-flex: calc(50% - 20px);
			flex: calc(50% - 20px);
			max-width: calc(50% - 20px);
		}
	}

	/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
	@media screen and (max-width: 600px) {
		.column {
			-ms-flex: 100%;
			flex: 100%;
			max-width: 100%;
		}
	}
</style>
