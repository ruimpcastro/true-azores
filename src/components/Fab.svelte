<script>
	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

<button on:click={scrollToTop} class="fab-button" aria-label="Scroll to top">
	<i class="fa-solid fa-arrow-up fa-xl fab-icon" style="color: currentColor;" aria-hidden="true"
	></i>
</button>

<style>
	.fab-button {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		z-index: 1;
	}

	.fab-button:hover {
		background-color: #f2f2f2;
	}

	button {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: #e3e3e3;
		border: none;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: background-color 0.3s ease;
	}
</style>
