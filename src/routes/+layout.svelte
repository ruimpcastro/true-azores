<script>
	import Footer from './Footer.svelte';

	import '../app.css';

	let { children } = $props();
</script>

<div class="app">
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
		rel="stylesheet"
	/>
	<main>
		{@render children()}
	</main>

	<Footer></Footer>
</div>

<style>
</style>
