import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { email, message, interests } = await request.json();

	if (!email || !message) {
		error(400, 'Missing required fields');
	}

	const interestList = interests ? interests.split(',').filter(Boolean) : [];

	console.log('[contact]', { email, message, interests: interestList });

	return json({ ok: true });
};
