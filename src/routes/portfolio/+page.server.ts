import * as icons from '$images/icons/index';
import * as portfolioImages from '$images/portfolio/index';
import type { Portfolio } from '$types/portfolio.type';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	const title = 'Jeffry Hermanto - Portfolio';
	const description = `Jeffry Hermantos's Portfolio`;
	const author = 'Jeffry Hermanto';

	const portfolios: Portfolio[] = [
		{
			image: portfolioImages.raya,
			icon: icons.mobilePhone,
			title: 'Raya - Digital Bank',
			subTitle: 'Mobile App',
			description:
				'Digital savings and transactions in the palm of your hand from Bank Raya (subsidiary of BRI group).',
			buttonLabel: 'Google Play Store',
			url: 'https://play.google.com/store/apps/details?id=id.co.bankraya.apps'
		},
		{
			image: portfolioImages.inspiraya,
			icon: icons.mobilePhone,
			title: 'Inspiraya',
			subTitle: 'Mobile App',
			description:
				'Inspiraya is a product from Bank Raya which is intended to meet internal needs in the loan application process.',
			buttonLabel: 'Google Play Store',
			url: 'https://play.google.com/store/apps/details?id=id.co.bankraya.pinangprakarsa'
		},
		{
			image: portfolioImages.ballradar,
			icon: icons.mobilePhone,
			title: 'BallRadar',
			subTitle: 'Mobile App',
			description: 'BallRadar is a fun app to measure pitching speed!',
			buttonLabel: 'Google Play Store',
			url: 'https://play.google.com/store/apps/details?id=com.jeffryhermanto.ballradar'
		},
		{
			image: portfolioImages.orbitrade,
			icon: icons.mobilePhone,
			title: 'Orbitrade',
			subTitle: 'Mobile App',
			description:
				'Orbi Trade is an International Mini Account Broker that grows to be a home for traders to trade on various instruments.',
			buttonLabel: 'Google Play Store',
			url: 'https://play.google.com/store/apps/details?id=com.hmb.orbitrade.android'
		},
		{
			image: portfolioImages.haixinNotebook,
			icon: icons.mobilePhone,
			title: 'Hai Xin Mandarin - Notebook',
			subTitle: 'Mobile App',
			description: 'Haixin Notebook will help you to accelerate your Mandarin learning process.',
			buttonLabel: 'Google Play Store',
			url: 'https://play.google.com/store/apps/details?id=com.haixinmandarin.notebookapp'
		},
		{
			image: portfolioImages.greenotes,
			icon: icons.mobilePhone,
			title: 'Greenotes',
			subTitle: 'Mobile App',
			description: 'Greenotes is a fun and simple golf notes app.',
			buttonLabel: 'Apple App Store',
			url: 'https://apps.apple.com/id/app/greenotes/id1540478777'
		},
		{
			image: portfolioImages.rimaKata,
			icon: icons.mobilePhone,
			title: 'Rima Kata',
			subTitle: 'Mobile App',
			description: 'An easy to use app to find rhyming words.',
			buttonLabel: 'Apple App Store',
			url: 'https://apps.apple.com/id/app/rima-kata/id1535370735'
		},
		{
			image: portfolioImages.loadsmile,
			icon: icons.mobilePhone,
			title: 'Loadsmile',
			subTitle: 'Mobile App',
			description: 'Truck driver app.',
			buttonLabel: 'Apple App Store',
			url: 'https://apps.apple.com/au/app/ofload/id1501311870'
		},
		{
			image: portfolioImages.nativeUpdater,
			icon: icons.plugins,
			title: 'Native Updater',
			subTitle: 'Flutter Package',
			description:
				'Flutter package for prompting users to update with a native dialog when there is a newer version of the app in the store.',
			buttonLabel: 'pub.dev',
			url: 'https://pub.dev/packages/native_updater'
		},
		{
			image: portfolioImages.attendancePointSystem,
			icon: icons.devices,
			title: 'Attendance Point System',
			subTitle: 'macOS Desktop App',
			description: `Read QR Code from user's smartphone screen and add point accordingly.`
		},
		{
			image: portfolioImages.lirix,
			icon: icons.desktop,
			title: 'Lirix',
			subTitle: 'Desktop App',
			description: 'An easy to use app to find rhyming words.',
			buttonLabel: 'View',
			url: 'https://flamboyant-nightingale-c18342.netlify.app/'
		},
		{
			image: portfolioImages.tiketValet,
			icon: icons.desktop,
			title: 'Tiket Valet',
			subTitle: 'Desktop App',
			description: 'Generate valet parking ticket in PDF.',
			buttonLabel: 'View',
			url: 'https://pensive-boyd-d6dec7.netlify.app/'
		},
		{
			image: portfolioImages.nutrix,
			icon: icons.desktop,
			title: 'Nutrix',
			subTitle: 'Desktop App',
			description: 'An app to analyze nutritional your needs.',
			buttonLabel: 'View',
			url: 'https://nutrix-29e3f.firebaseapp.com/'
		},
		{
			image: portfolioImages.surveyPengembanganUsaha,
			icon: icons.desktop,
			title: 'Survey Pengembangan Usaha',
			subTitle: 'Desktop App',
			description: 'Online business survey.',
			buttonLabel: 'View',
			url: 'https://survey-pengembangan-usaha.firebaseapp.com/index.html'
		},
		{
			image: portfolioImages.nerfWar,
			icon: icons.desktop,
			title: 'Nerf War',
			subTitle: 'Desktop App',
			description: 'Scoring app for shooting battle.',
			buttonLabel: 'View',
			url: 'https://jeffryhermanto.github.io/NERFWar/'
		}
	];

	return { title, description, author, portfolios };
};
