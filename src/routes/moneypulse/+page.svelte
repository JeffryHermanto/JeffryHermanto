<script lang="ts">
	import moneyPulseAppIcon from '$images/moneypulse_app_icon.png';
	import type { PageData } from './$types';
	import DownloadButtons from './DownloadButtons.svelte';

	export let data: PageData;

	const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.example.app';
	const appStoreUrl = 'https://apps.apple.com/us/app/example-app/id123456789';

	$: ({ downloadFiles } = data);
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>MoneyPulse - Resources</title>
	<link
		href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<body>
	<div class="container">
		<img src={moneyPulseAppIcon} alt="App Icon" class="AppIcon" />

		<h2 class="AppTitle">MoneyPulse</h2>

		<DownloadButtons />

		<h1>Resources</h1>

		<p>Download template berdasarkan berbagai level penghasilan per bulan:</p>

		<ul class="template-list">
			{#each downloadFiles as file}
				<li>
					<a href={file.path} download={file.fileName} class="download-link">
						{file.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</body>

<style>
	body {
		background-color: #196d31;
		font-family: 'Lato', sans-serif;
	}

	.container {
		width: 80%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 36px;
		background-color: white;
	}

	h1 {
		display: block;
		font-size: 2em;
		margin-top: 0.67em;
		margin-bottom: 0.67em;
		margin-left: 0;
		margin-right: 0;
		font-weight: bold;
	}

	h2 {
		display: block;
		font-size: 1.5em;
		margin-top: 0.83em;
		margin-bottom: 0.83em;
		margin-left: 0;
		margin-right: 0;
		font-weight: bold;
	}

	.AppIcon {
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 200px;
	}

	.AppTitle {
		text-align: center;
		margin-bottom: 50px;
	}

	p {
		font-size: 16px;
		margin-bottom: 20px;
		color: #333;
		line-height: 1.5;
	}

	.template-list {
		padding-left: 0;
		margin: 0;
		list-style: none;
	}

	.template-list li {
		margin-bottom: 12px;
	}

	.download-link {
		text-decoration: none;
		color: #007bff;
		font-weight: 600;
		display: inline-block;
		padding: 10px 15px;
		background-color: #f0f8ff;
		border-radius: 6px;
		width: max-content;
		transition: all 0.3s ease;
	}

	.download-link:hover {
		background-color: #007bff;
		color: white;
		transform: scale(1.05);
	}

	.download-link:focus {
		outline: 3px solid #0056b3;
		background-color: #0056b3;
		color: white;
	}
</style>
