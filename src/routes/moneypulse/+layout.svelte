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
		href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
		rel="stylesheet"
	/>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src={bootstrapScript}></script>
</svelte:head>

<slot />
