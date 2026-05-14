import { json, error } from '@sveltejs/kit';
import { checkEmailIsValid, checkInterestsAreValid } from '$lib/functions';

export const POST = async ({ request }) => {
	const body = await request.json();

	const email = body.email?.trim() ?? '';
	const message = body.message?.trim() ?? '';
	const interests = body.interests?.split(',').filter(Boolean) ?? [];

	const emailIsValid = checkEmailIsValid(email);
	const messageIsValid = Boolean(message);
	const interestsAreValid = checkInterestsAreValid(interests);

	if (!emailIsValid) {
		error(400, 'Invalid email');
	}

	if (!messageIsValid) {
		error(400, 'Invalid message');
	}

	if (!interestsAreValid) {
		error(400, 'Invalid interests');
	}

	console.log('[contact]', { email, message, interests });

	return json({ success: true });
};
