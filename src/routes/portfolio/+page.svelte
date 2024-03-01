<script lang="ts">
	import type { PageData } from './$types';
	import '$css/bulma.min.css';
	import '$css/portfolio.css';
	import PortfolioCard from '$lib/PortfolioCard.svelte';

	export let data: PageData;

	$: ({ title, description, author, portfolios } = data);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content={author} />
</svelte:head>

<div id="wallpaper" class="wallpaper" data-image="images/city.jpg"></div>

<div class="container">
	<div class="columns is-multiline">
		{#each portfolios as portfolio}
			<PortfolioCard {portfolio} />
		{/each}
	</div>
</div>

<style>
	.wallpaper {
		animation-name: zoomOut;
	}
</style>
