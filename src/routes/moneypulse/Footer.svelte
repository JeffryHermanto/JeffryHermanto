<script lang="ts">
	const sourcePath = '/moneypulse';

	const downloadFiles = [
		{
			label: 'IDR 5 juta / bulan',
			path: `${sourcePath}/5jt_moneypulse_template.mpd`,
			fileName: '5jt_moneypulse_template.mpd'
		},
		{
			label: 'IDR 10 juta / bulan',
			path: `${sourcePath}/10jt_moneypulse_template.mpd`,
			fileName: '10jt_moneypulse_template.mpd'
		},
		{
			label: 'IDR 15 juta / bulan',
			path: `${sourcePath}/15jt_moneypulse_template.mpd`,
			fileName: '15jt_moneypulse_template.mpd'
		},
		{
			label: 'IDR 30 juta / bulan',
			path: `${sourcePath}/30jt_moneypulse_template.mpd`,
			fileName: '30jt_moneypulse_template.mpd'
		},

		{
			label: 'IDR Multi Income',
			path: `${sourcePath}/multi_income_moneypulse_template.mpd`,
			fileName: 'multi_income_moneypulse_template.mpd'
		},
		{
			label: 'USD $10,000 monthly',
			path: `${sourcePath}/$10k_moneypulse_template.mpd`,
			fileName: '$10k_moneypulse_template.mpd'
		}
	];
</script>

<footer class="white-section" id="footer">
	<div class="container-fluid">
		<h1>Templates</h1>

		<p>Download the template based on various monthly income levels:</p>

		{#each downloadFiles as file}
			<a href={file.path} download={file.fileName} class="download-link">
				{file.label}
			</a>
		{/each}
	</div>

	<div class="container-fluid">
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a href="https://www.instagram.com/jeffryhermanto/" target="_blank">
			<i class="social-icon fa-brands fa-instagram"></i> MoneyPulse on Instagram
		</a>

		<p>© 2025 Jeffry Hermanto. All rights reserved.</p>
	</div>
</footer>

<style>
	h1 {
		display: block;
		font-size: 2em;
		margin-top: 0.67em;
		margin-bottom: 0.67em;
		margin-left: 0;
		margin-right: 0;
		font-weight: bold;
	}

	p {
		font-size: 16px;
		margin-bottom: 20px;
		color: #333;
		line-height: 1.5;
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
		margin: 8px;
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
