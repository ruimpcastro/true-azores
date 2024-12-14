<script>
	import HeroImage from '../components/Hero-Image.svelte';
	import Introduction from '../components/Introduction.svelte';
	import Pictures from '../components/Pictures.svelte';
	import Reviews from '../components/Reviews.svelte';
	import { PUBLIC_BUILD_VERSION } from '$env/static/public';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div data-version="${PUBLIC_BUILD_VERSION ?? null}">
	<HeroImage />
	<div class="content">
		<Introduction />
		<Reviews />
		<Pictures />
	</div>
</div>

<style>
</style>
