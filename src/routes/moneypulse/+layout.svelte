<script>
	import bootstrapScript from '$bootstrap/bootstrap.bundle.min.js?url';
	import '$bootstrap/bootstrap.min.css';
	import '$css/moneypulse.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';
</script>

<svelte:head>
	<title>MoneyPulse</title>
	<meta name="description" content="Financial Checkup App" />
	<meta name="author" content="Jeffry Hermanto" />
	<link
		href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
		rel="stylesheet"
	/>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src={bootstrapScript}></script>
</svelte:head>

<slot />
