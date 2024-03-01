import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	const title = 'Jeffry Hermanto - Software Engineer Companies LOVE to Hire';

	const description =
		'Experienced full-stack web & mobile developer who has a track record of success creating apps & websites that are both well-received & commercially viable. Skilled with working as a team & incorporating input into projects. Ability to always look for ways to improve upon an already existing app to keep people downloading it & enjoying it. Strong eye for detail & tenacity to never quit on something until it is absolutely perfect.';

	const author = 'Jeffry Hermanto';

	return { title, description, author };
};
