<script lang="ts">
	import logo from '$images/moneypulse/logo.png';
	import phone from '$images/moneypulse/phone.png';

	const appStoreUrl = 'https://apps.apple.com/id/app/moneypulse/id6741426099';
	const playStoreUrl =
		'https://play.google.com/store/apps/details?id=com.jeffryhermanto.moneypulse';
</script>

<section class="colored-section" id="title">
	<div class="container-fluid">
		<!-- Nav Bar -->

		<nav class="navbar navbar-expand-xl navbar-dark">
			<!-- svelte-ignore a11y_invalid_attribute -->
			<a class="navbar-brand" href="" style="color: #f1f6be">
				<img src={logo} width="60" height="60" class="d-inline-block align-top" alt="" />&nbsp
				MoneyPulse
			</a>

			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo02"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<a class="nav-link" href="#features">Features</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#testimonials">Testimonials</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#gallery">Gallery</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#cta">Download</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#footer">Templates</a>
					</li>
				</ul>
			</div>
		</nav>

		<!-- Title -->

		<div class="header-title">
			<div class="row">
				<div class="col-lg-6">
					<h1 class="big-heading">Financial Checkup App</h1>

					<a href={appStoreUrl} target="_blank">
						<button type="button" class="btn btn-dark btn-lg download-button">
							<i class="fab fa-apple"></i>&nbsp;&nbsp;Download
						</button>
					</a>

					<a href={playStoreUrl} target="_blank">
						<button type="button" class="btn btn-outline-light btn-lg download-button">
							<i class="fab fa-google-play"></i>&nbsp;&nbsp;Download
						</button>
					</a>
				</div>

				<div class="col-lg-6">
					<img class="title-image" src={phone} alt="iphone-mockup" />
				</div>
			</div>
		</div>
	</div>
</section>
