<script>
	import '$css/moneypulse.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';
</script>

<svelte:head>
	<title>MoneyPulse</title>
	<meta name="description" content="Financial Checkup App" />
	<meta name="author" content="Jeffry Hermanto" />

	<script
		src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
		integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
		crossorigin="anonymous"
	></script>

	<link
		href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
		rel="stylesheet"
	/>

	<link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.min.css" />
	<script src="/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
</svelte:head>

<slot />
