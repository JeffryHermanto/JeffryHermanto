<script lang="ts">
	import armand from '$images/moneypulse/armand.jpg';
	import chrysan from '$images/moneypulse/chrysan.jpg';
	import jenny from '$images/moneypulse/jenny.jpg';
	import william from '$images/moneypulse/william.jpg';
	import yuliana from '$images/moneypulse/yuliana.jpg';
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
				<img class="testimonial-image" src={yuliana} alt="person" />
				<em>Yuliana T. <small>- Accountant</small></em>
			</div>

			<div class="carousel-item container-fluid">
				<h2 class="testimonial-text">
					The financial checkup on MoneyPulse is exactly what I needed. It analyzed my cashflow and
					showed me exactly where I could cut back. The personalized insights have helped me create
					a budget I can stick to and start saving more for the future.
				</h2>
				<img class="testimonial-image" src={william} alt="person" />
				<em>William H. <small>- Sound Engineer</small></em>
			</div>

			<div class="carousel-item container-fluid">
				<h2 class="testimonial-text">
					"As someone who just graduated and started working, I didn't know where to begin with
					managing my money. The financial checkup tool in MoneyPulse was a total eye-opener. It
					provided me with actionable steps to pay off student loans, build credit, and start
					saving. I feel more financially literate than ever!"
				</h2>
				<img class="testimonial-image" src={armand} alt="person" />
				<em>Armand S. <small>- Recent Graduate</small></em>
			</div>

			<div class="carousel-item container-fluid">
				<h2 class="testimonial-text">
					MoneyPulse's financial checkup helped me assess my personal finances all in one place. I
					love how it shows the health of my cash flow, assets, and liabilities, and I've been able
					to adjust my financial strategy accordingly. It's been a game-changer for my personal
					wealth.
				</h2>
				<img class="testimonial-image" src={jenny} alt="person" />
				<em>Jenny T. <small>- Entrepreneur</small></em>
			</div>

			<div class="carousel-item container-fluid">
				<h2 class="testimonial-text">
					Between family expenses and managing household finances, I was always guessing about our
					financial health. After using the financial checkup feature, I've finally gotten a full
					picture of where we stand. It's helped me prioritize our savings goals and cut back on
					unnecessary spending. Highly recommend it!
				</h2>
				<img class="testimonial-image" src={chrysan} alt="person" />
				<em>Chrysan L. <small>- Full-Time Parent</small></em>
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
