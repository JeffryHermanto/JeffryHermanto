<script lang="ts">
	import one from '$images/moneypulse/screenshot_01.png';
	import two from '$images/moneypulse/screenshot_02.png';
	import three from '$images/moneypulse/screenshot_03.png';
	import four from '$images/moneypulse/screenshot_04.png';
	import five from '$images/moneypulse/screenshot_05.png';
	import six from '$images/moneypulse/screenshot_06.png';
</script>

<section class="white-section" id="gallery">
	<h2 class="section-heading">Gallery</h2>
	<p>Get a sneak peek into the MoneyPulse app.</p>

	<div class="row">
		<div class="gallery-column col-lg-4 col-md-12">
			<div class="card">
				<div class="card-header"><h3>Your Financial Health at a Glance</h3></div>
				<div class="card-body">
					<img src={one} alt="Screenshot 1" />
				</div>
			</div>
		</div>

		<div class="gallery-column col-lg-4 col-md-12">
			<div class="card">
				<div class="card-header"><h3>Monitor Your Net Worth Progress</h3></div>
				<div class="card-body">
					<img src={two} alt="Screenshot 2" />
				</div>
			</div>
		</div>

		<div class="gallery-column col-lg-4 col-md-12">
			<div class="card">
				<div class="card-header"><h3>Easy Navigation</h3></div>
				<div class="card-body">
					<img src={three} alt="Screenshot 3" />
				</div>
			</div>
		</div>

		<div class="gallery-column col-lg-4 col-md-12">
			<div class="card">
				<div class="card-header"><h3>Easy Budgeting</h3></div>
				<div class="card-body">
					<img src={four} alt="Screenshot 4" />
				</div>
			</div>
		</div>

		<div class="gallery-column col-lg-4 col-md-12">
			<div class="card">
				<div class="card-header"><h3>Financial Health Score Explanation</h3></div>
				<div class="card-body">
					<img src={five} alt="Screenshot 5" />
				</div>
			</div>
		</div>

		<div class="gallery-column col-lg-4 col-md-12">
			<div class="card">
				<div class="card-header"><h3>Easy Customization</h3></div>
				<div class="card-body">
					<img src={six} alt="Screenshot 6" />
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	h3 {
		font-weight: 700;
		font-size: 1em;
		margin: 5px;
	}
</style>
