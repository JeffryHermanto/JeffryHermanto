import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	const sourcePath = '/moneypulse';

	const downloadFiles = [
		{
			label: 'Penghasilan 5 juta per bulan',
			path: `${sourcePath}/5jt_moneypulse_template.mpd`,
			fileName: '5jt_moneypulse_template.mpd'
		},
		{
			label: 'Penghasilan 10 juta per bulan',
			path: `${sourcePath}/10jt_moneypulse_template.mpd`,
			fileName: '10jt_moneypulse_template.mpd'
		},
		{
			label: 'Penghasilan 15 juta per bulan',
			path: `${sourcePath}/15jt_moneypulse_template.mpd`,
			fileName: '15jt_moneypulse_template.mpd'
		},
		{
			label: 'Penghasilan 30 juta per bulan',
			path: `${sourcePath}/30jt_moneypulse_template.mpd`,
			fileName: '30jt_moneypulse_template.mpd'
		},
		{
			label: 'Penghasilan US $10,000 per bulan',
			path: `${sourcePath}/$10k_moneypulse_template.mpd`,
			fileName: '$10k_moneypulse_template.mpd'
		},
		{
			label: 'Penghasilan Dengan Berbagai Sumber',
			path: `${sourcePath}/multi_income_moneypulse_template.mpd`,
			fileName: 'multi_income_moneypulse_template.mpd'
		}
	];

	return { downloadFiles };
};
