<script lang="ts">
	import james from '$images/moneypulse/james.png';
	import jessica from '$images/moneypulse/jessica.png';
	import maya from '$images/moneypulse/maya.png';
	import ryan from '$images/moneypulse/ryan.png';
	import tanya from '$images/moneypulse/tanya.png';
</script>

<section class="colored-section" id="testimonials">
	<div id="testimonial-carousel" class="carousel slide" data-ride="false">
		<div class="carousel-inner">
			<div class="carousel-item active container-fluid">
				<h2 class="testimonial-text">
					I've always been a bit overwhelmed by my finances, but MoneyPulse's financial checkup
					feature gave me a clear overview of where I stand. It broke down my debts, savings, and
					spending habits in an easy-to-understand way. I now feel empowered to take control and
					make smarter financial decisions!
				</h2>
				<img class="testimonial-image" src={jessica} alt="person" />
				<em>Jessica L. <small>- Marketing Executive, 34</small></em>
			</div>

			<div class="carousel-item container-fluid">
				<h2 class="testimonial-text">
					The financial checkup on MoneyPulse is exactly what I needed. It analyzed my cashflow and
					showed me exactly where I could cut back. The personalized insights have helped me create
					a budget I can stick to and start saving more for the future.
				</h2>
				<img class="testimonial-image" src={ryan} alt="person" />
				<em>Ryan P. <small>- Software Engineer, 27</small></em>
			</div>

			<div class="carousel-item container-fluid">
				<h2 class="testimonial-text">
					"As someone who just graduated and started working, I didn't know where to begin with
					managing my money. The financial checkup tool in MoneyPulse was a total eye-opener. It
					provided me with actionable steps to pay off student loans, build credit, and start
					saving. I feel more financially literate than ever!"
				</h2>
				<img class="testimonial-image" src={james} alt="person" />
				<em>James H. <small>- Recent Graduate, 23</small></em>
			</div>

			<div class="carousel-item container-fluid">
				<h2 class="testimonial-text">
					MoneyPulse's financial checkup helped me assess my personal finances all in one place. I
					love how it shows the health of my cash flow, assets, and liabilities, and I've been able
					to adjust my financial strategy accordingly. It's been a game-changer for my personal
					wealth.
				</h2>
				<img class="testimonial-image" src={maya} alt="person" />
				<em>Maya G. <small>- Entrepreneur, 36</small></em>
			</div>

			<div class="carousel-item container-fluid">
				<h2 class="testimonial-text">
					Between family expenses and managing household finances, I was always guessing about our
					financial health. After using the financial checkup feature, I've finally gotten a full
					picture of where we stand. It's helped me prioritize our savings goals and cut back on
					unnecessary spending. Highly recommend it!
				</h2>
				<img class="testimonial-image" src={tanya} alt="person" />
				<em>Tanya W. <small>- Full-Time Parent, 38</small></em>
			</div>
		</div>

		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a class="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
			<span class="carousel-control-prev-icon"></span>
		</a>

		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a class="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
			<span class="carousel-control-next-icon"></span>
		</a>
	</div>
</section>
