import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				'open-sans': ['Open Sans', 'sans-serif'],
				raleway: ['Raleway', 'sans-serif']
			},
			colors: { background: '#D3E9EA', secondary: '#A0A67D', accent: '#FFB347' }
		}
	},

	plugins: [typography, forms, containerQueries, aspectRatio]
};
