<script>
	import { onMount } from 'svelte';
	import seteCidadesPh0 from '$lib/images/gallery/sete-cidades/ph0.JPG';
	import seteCidadesPh1 from '$lib/images/gallery/sete-cidades/ph1.JPG';
	import seteCidadesPh2 from '$lib/images/gallery/sete-cidades/ph2.JPG';
	import seteCidadesPh3 from '$lib/images/gallery/sete-cidades/ph3.JPG';
	import seteCidadesPh4 from '$lib/images/gallery/sete-cidades/ph4.JPG';
	import seteCidadesPh6 from '$lib/images/gallery/sete-cidades/ph6.JPG';
	import seteCidadesPh7 from '$lib/images/gallery/sete-cidades/ph7.JPG';
	import seteCidadesPh8 from '$lib/images/gallery/sete-cidades/ph8.JPG';

	import lagoaFogoPh0 from '$lib/images/gallery/lagoa-do-fogo/ph0.JPG';
	import lagoaFogoPh1 from '$lib/images/gallery/lagoa-do-fogo/ph1.JPG';
	import lagoaFogoPh2 from '$lib/images/gallery/lagoa-do-fogo/ph2.JPG';
	import lagoaFogoPh3 from '$lib/images/gallery/lagoa-do-fogo/ph3.JPG';

	import nordestePh0 from '$lib/images/gallery/nordeste/ph0.JPG';
	import nordestePh1 from '$lib/images/gallery/nordeste/ph1.JPG';
	import nordestePh2 from '$lib/images/gallery/nordeste/ph2.JPG';
	import nordestePh3 from '$lib/images/gallery/nordeste/ph3.JPG';
	import nordestePh4 from '$lib/images/gallery/nordeste/ph4.JPG';
	import nordestePh5 from '$lib/images/gallery/nordeste/ph5.JPG';
	import nordestePh6 from '$lib/images/gallery/nordeste/ph6.JPG';
	import nordestePh7 from '$lib/images/gallery/nordeste/ph7.JPG';
	import nordestePh8 from '$lib/images/gallery/nordeste/ph8.JPG';
	import nordestePh9 from '$lib/images/gallery/nordeste/ph9.JPG';
	import nordestePh10 from '$lib/images/gallery/nordeste/ph10.JPG';
	import nordestePh11 from '$lib/images/gallery/nordeste/ph11.JPG';
	import nordestePh12 from '$lib/images/gallery/nordeste/ph12.JPG';
	import nordestePh13 from '$lib/images/gallery/nordeste/ph13.JPG';
	import nordestePh14 from '$lib/images/gallery/nordeste/ph14.JPG';
	import nordestePh15 from '$lib/images/gallery/nordeste/ph15.JPG';
	import nordestePh16 from '$lib/images/gallery/nordeste/ph16.JPG';

	import furnasPh0 from '$lib/images/gallery/furnas/ph0.JPG';
	import furnasPh1 from '$lib/images/gallery/furnas/ph1.JPG';
	import furnasPh2 from '$lib/images/gallery/furnas/ph2.JPG';
	import furnasPh3 from '$lib/images/gallery/furnas/ph3.JPG';
	import furnasPh4 from '$lib/images/gallery/furnas/ph4.JPG';
	import furnasPh5 from '$lib/images/gallery/furnas/ph5.JPG';
	import furnasPh6 from '$lib/images/gallery/furnas/ph6.JPG';
	import furnasPh7 from '$lib/images/gallery/furnas/ph7.JPG';
	import furnasPh8 from '$lib/images/gallery/furnas/ph8.JPG';
	import furnasPh9 from '$lib/images/gallery/furnas/ph9.JPG';

	onMount(() => {
		const accordions = document.getElementsByClassName('accordion');
		for (let i = 0; i < accordions.length; i++) {
			accordions[i].addEventListener('click', function () {
				this.classList.toggle('active');
				const panel = this.nextElementSibling;
				panel.style.display = this.classList.contains('active') ? 'block' : 'none';
			});
		}
	});
</script>

<section>
	<h3>Recent pictures of visited places</h3>
	<button class="accordion"
		><span>Sete Cidades</span><i class="fa-solid fa-chevron-down"></i></button
	>
	<div class="panel">
		<div class="row">
			<div class="column">
				<img src={seteCidadesPh1} style="width:100%" />
				<img src={seteCidadesPh3} style="width:100%" />
			</div>
			<div class="column">
				<img src={seteCidadesPh6} style="width:100%" />
				<img src={seteCidadesPh2} style="width:100%" />
			</div>
			<div class="column">
				<img src={seteCidadesPh0} style="width:100%" />
				<img src={seteCidadesPh4} style="width:100%" />
			</div>
			<div class="column">
				<img src={seteCidadesPh7} style="width:100%" />
				<img src={seteCidadesPh8} style="width:100%" />
			</div>
		</div>
	</div>
	<button class="accordion"
		><span>Lagoa do Fogo</span><i class="fa-solid fa-chevron-down"></i></button
	>
	<div class="panel">
		<div class="row">
			<div class="column">
				<img src={lagoaFogoPh0} style="width:100%" />
				<img src={lagoaFogoPh1} style="width:100%" />
			</div>
			<div class="column">
				<img src={lagoaFogoPh2} style="width:100%" />
				<img src={lagoaFogoPh3} style="width:100%" />
			</div>
		</div>
	</div>
	<button class="accordion"><span>Nordeste</span><i class="fa-solid fa-chevron-down"></i></button>
	<div class="panel">
		<div class="row">
			<div class="column">
				<img src={nordestePh5} style="width:100%" />
				<img src={nordestePh0} style="width:100%" />
				<img src={nordestePh11} style="width:100%" />
				<img src={nordestePh3} style="width:100%" />
			</div>
			<div class="column">
				<img src={nordestePh8} style="width:100%" />
				<img src={nordestePh14} style="width:100%" />
				<img src={nordestePh7} style="width:100%" />
				<img src={nordestePh6} style="width:100%" />
				<img src={nordestePh15} style="width:100%" />
			</div>
			<div class="column">
				<img src={nordestePh9} style="width:100%" />
				<img src={nordestePh2} style="width:100%" />
				<img src={nordestePh10} style="width:100%" />
				<img src={nordestePh12} style="width:100%" />
			</div>
			<div class="column">
				<img src={nordestePh4} style="width:100%" />
				<img src={nordestePh13} style="width:100%" />
				<img src={nordestePh16} style="width:100%" />
				<img src={nordestePh1} style="width:100%" />
			</div>
		</div>
	</div>
	<button class="accordion">
		<span>Furnas</span>
		<i class="fa-solid fa-chevron-down"></i>
	</button>
	<div class="panel">
		<div class="row">
			<div class="column">
				<img src={furnasPh6} style="width:100%" />
				<img src={furnasPh1} style="width:100%" />
			</div>
			<div class="column">
				<img src={furnasPh3} style="width:100%" />
				<img src={furnasPh4} style="width:100%" />
				<img src={furnasPh2} style="width:100%" />
			</div>
			<div class="column">
				<img src={furnasPh7} style="width:100%" />
				<img src={furnasPh8} style="width:100%" />
			</div>
			<div class="column">
				<img src={furnasPh5} style="width:100%" />
				<img src={furnasPh0} style="width:100%" />
				<img src={furnasPh9} style="width:100%" />
			</div>
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

	img {
		margin-top: 8px;
		vertical-align: middle;
		width: 100%;
		border-radius: 1.5rem;
		box-shadow: 0 0 5px rgba(0, 0, 100, 0.5);
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

	.accordion {
		background-color: transparent;
		font-size: 1rem;
		padding: 1rem 1rem;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		border: none;
		outline: none;
		box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.1);
		transition: 0.4s;
		margin-bottom: 8px;
	}

	:global(.accordion.active) {
		background-color: rgba(0, 0, 100, 0.05);
	}
	:global(.accordion.active i) {
		-webkit-transform: rotate(180deg);
		-ms-transform: rotate(180deg);
		transform: rotate(180deg);
		transition: transform 0.4 ease-out;
	}

	:global(.accordion i) {
		-webkit-transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		transform: rotate(0deg);
		transition: transform 0.4s ease-out;
	}

	.panel {
		display: none;
		overflow: hidden;
	}
</style>
