<script lang="ts">
	import '$css/moneypulse.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import type { PageData } from './$types';
	import Cta from './CTA.svelte';
	import Features from './Features.svelte';
	import Footer from './Footer.svelte';
	import Gallery from './Gallery.svelte';
	import Header from './Header.svelte';
	import RunningText from './RunningText.svelte';
	import Testimonials from './Testimonials.svelte';

	export let data: PageData;

	$: ({ title, description, author } = data);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content={author} />

	<!-- Google Fonts -->
	<link
		href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
		rel="stylesheet"
	/>

	<!-- Bootstrap CSS-->
	<link
		rel="stylesheet"
		href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
		integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
		crossorigin="anonymous"
	/>

	<!-- JQuery -->
	<script
		src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
		integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
		crossorigin="anonymous"
	></script>

	<!-- Popper -->
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
		integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
		crossorigin="anonymous"
	></script>

	<!-- Bootstrap -->
	<script
		src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
		integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
		crossorigin="anonymous"
	></script>
</svelte:head>

<div class="body">
	<Header />
	<Features />
	<Testimonials />
	<RunningText />
	<Gallery />
	<Cta />
	<Footer />
</div>
