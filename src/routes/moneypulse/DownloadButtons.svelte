<script>
	import appleAppStore from '$images/apple-app-store.png';
	import googlePlayStore from '$images/google-play-store.png';

	const playStoreUrl =
		'https://play.google.com/store/apps/details?id=com.jeffryhermanto.moneypulse';
	const appStoreUrl = 'https://apps.apple.com/id/app/moneypulse/id6741426099';
</script>

<div class="download-buttons">
	<a href={playStoreUrl} target="_blank" rel="noopener noreferrer" class="download-button">
		<img src={googlePlayStore} alt="Google Play Store Logo" />
	</a>

	<a href={appStoreUrl} target="_blank" rel="noopener noreferrer" class="download-button">
		<img src={appleAppStore} alt="Apple App Store Logo" />
	</a>
</div>

<style>
	.download-buttons {
		display: flex;
		gap: 16px;
		justify-content: center;
		margin-top: -12px;
		margin-bottom: 36px;
	}

	.download-button {
		display: inline-block;
		/* padding: 8px; */
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.download-button:hover {
		background-color: #f0f0f0;
	}

	.download-button img {
		height: auto;
	}
</style>
