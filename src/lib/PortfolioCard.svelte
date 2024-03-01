<script lang="ts">
	export let portfolio: any;
</script>

<div class="column is-half-tablet is-one-third-desktop">
	<div class="card">
		<div class="card-image">
			<figure class="image is-16by9">
				<img src={portfolio.image} alt={`${portfolio.title} image`} />
			</figure>
		</div>

		<div class="card-content">
			<div class="media">
				<div class="media-left">
					<figure class="image is-48x48">
						<img src={portfolio.icon} alt={`${portfolio.icon} icon`} />
					</figure>
				</div>
				<div class="media-content">
					<p class="title is-4">{portfolio.title}</p>
					<p class="subtitle is-6">{portfolio.subTitle}</p>
				</div>
			</div>
			<div class="content">
				<p>{portfolio.description}</p>
			</div>
		</div>

		<footer class="card-footer">
			{#if portfolio.buttonLabel && portfolio.url}
				<a href={portfolio.url} target="_blank" class="card-footer-item">
					<i class="fas fa-link"></i>&nbsp; {portfolio.buttonLabel}
				</a>
			{/if}
		</footer>
	</div>
</div>
