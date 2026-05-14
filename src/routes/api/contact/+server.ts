import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { isValidEmail } from '$lib/functions';

export const POST: RequestHandler = async ({ request }) => {
	const { interests, email, message } = await request.json();

	if (!isValidEmail(email?.trim() ?? '')) {
		error(400, 'A valid email address is required');
	}

	if (!message?.trim()) {
		error(400, 'Message is required');
	}

	const interestList = interests ? interests.split(',').filter(Boolean) : [];

	console.log('[contact]', { email, message, interests: interestList });

	return json({ success: true });
};
