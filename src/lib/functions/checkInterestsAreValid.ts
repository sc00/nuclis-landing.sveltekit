import { interestOptions } from '$lib/constants';

export function checkInterestsAreValid(values: string[]): boolean {
	const validValues = new Set(interestOptions.map((i) => i.value));
	return values.every((v) => validValues.has(v));
}
