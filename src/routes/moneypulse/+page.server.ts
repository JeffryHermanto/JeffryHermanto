import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	const sourcePath = '/moneypulse';

	const downloadFiles = [
		{
			label: '5 juta / bulan',
			path: `${sourcePath}/5jt_moneypulse_template.mpd`,
			fileName: '5jt_moneypulse_template.mpd'
		},
		{
			label: '10 juta / bulan',
			path: `${sourcePath}/10jt_moneypulse_template.mpd`,
			fileName: '10jt_moneypulse_template.mpd'
		},
		{
			label: '15 juta / bulan',
			path: `${sourcePath}/15jt_moneypulse_template.mpd`,
			fileName: '15jt_moneypulse_template.mpd'
		},
		{
			label: '30 juta / bulan',
			path: `${sourcePath}/30jt_moneypulse_template.mpd`,
			fileName: '30jt_moneypulse_template.mpd'
		},

		{
			label: 'Multi Income',
			path: `${sourcePath}/multi_income_moneypulse_template.mpd`,
			fileName: 'multi_income_moneypulse_template.mpd'
		},
		{
			label: 'US $10,000 monthly',
			path: `${sourcePath}/$10k_moneypulse_template.mpd`,
			fileName: '$10k_moneypulse_template.mpd'
		}
	];

	return { downloadFiles };
};
