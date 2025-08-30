<script lang="ts">
	import bootstrapScript from '$bootstrap/bootstrap.bundle.min.js?url';
	import Cta from './CTA.svelte';
	import Features from './Features.svelte';
	import Footer from './Footer.svelte';
	import Gallery from './Gallery.svelte';
	import Header from './Header.svelte';
	import RunningText from './RunningText.svelte';
	import Testimonials from './Testimonials.svelte';
</script>

<svelte:head>
	<title>MoneyPulse</title>
	<meta name="description" content="Financial Checkup App" />
	<meta name="author" content="Jeffry Hermanto" />
	<link rel="icon" href="/moneypulse_favicon.png" />
	<link
		href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
		rel="stylesheet"
	/>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src={bootstrapScript}></script>
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
