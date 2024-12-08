<script>
	import HeroImage from '../components/Hero-Image.svelte';
	import Introduction from '../components/Introduction.svelte';
	import Pictures from '../components/Pictures.svelte';
	import Reviews from '../components/Reviews.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
	<HeroImage />
	<div class="content">
		<Introduction />
		<Reviews />
		<Pictures />
	</div>
</div>

<style>
</style>
