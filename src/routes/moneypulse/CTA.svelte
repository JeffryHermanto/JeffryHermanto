<script lang="ts">
	const appStoreUrl = 'https://apps.apple.com/id/app/moneypulse/id6741426099';
	const playStoreUrl =
		'https://play.google.com/store/apps/details?id=com.jeffryhermanto.moneypulse';
</script>

<section class="colored-section" id="cta">
	<div class="container-fluid">
		<h3 class="big-heading">Know Your Numbers. Know Your Health, Financially.</h3>

		<a href={appStoreUrl} target="_blank">
			<button class="download-button btn btn-lg btn-dark" type="button">
				<i class="fab fa-apple"></i>&nbsp;&nbsp;Download
			</button>
		</a>

		<a href={playStoreUrl} target="_blank">
			<button class="download-button btn btn-lg brn-light" type="button">
				<i class="fab fa-google-play"></i>&nbsp;&nbsp;Download
			</button>
		</a>
	</div>
</section>
