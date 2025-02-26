<script lang="ts">
	import type { PageData } from './$types';
	import cv from '$assets/CV_Jeffry_Hermanto.pdf';
	import '$css/main.css';
	import jeffry from '$images/jeffry.jpg';

	export let data: PageData;

	const social = [
		{
			url: 'https://github.com/jeffryhermanto',
			icon: 'github'
		},
		{
			url: 'https://www.linkedin.com/in/jeffryhermanto',
			icon: 'linkedin'
		},
		{
			url: 'https://instagram.com/jeffryhermanto',
			icon: 'instagram'
		},
		{
			url: 'https://twitter.com/jeffryhermanto',
			icon: 'twitter'
		}
	];

	$: ({ title, description, author } = data);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content={author} />
</svelte:head>

<div class="wallpaper"></div>

<div class="content">
	<aside class="side">
		<figure class="picture">
			<div class="picture-shadow"></div>

			<img
				class="picture-image"
				src={jeffry}
				alt="Portrait of Jeffry Hermanto"
				width="320"
				height="320"
			/>
		</figure>
	</aside>

	<main class="about">
		<h1 class="name">Hi, I'm {author}</h1>
		<p class="job">Software Engineer</p>

		<hr class="hr" />

		<div class="description">
			<p class="summary">{description}</p>
		</div>

		<div class="contact">
			<a class="button" href="mailto:jeffryhermanto@gmail.com">Get in touch</a>
		</div>

		<ul class="social">
			{#each social as item}
				<li>
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<a href={item.url} target="_blank">
						<i class={`fab fa-${item.icon}`}></i>
					</a>
				</li>
			{/each}
		</ul>

		<p class="portfolio">
			<a href="portfolio" target="_blank">
				<i class="fas fa-folder-open"></i>&nbsp; Portfolio
			</a>
		</p>

		<p class="cv">
			<a href={cv} target="_blank">
				<i class="fa fa-download mr-2"></i>&nbsp; CV
			</a>
		</p>
	</main>
</div>

<style>
	.wallpaper {
		animation-name: zoomOut;
	}

	.picture {
		animation-name: dropIn;
	}
</style>
