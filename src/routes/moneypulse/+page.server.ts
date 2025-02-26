import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	const title = 'MoneyPulse';
	const description = 'Financial Checkup App';
	const author = 'Jeffry Hermanto';

	return { title, description, author };
};
