export default async function postChange(
	password: string,
	id?: string,
	token?: string
) {
	const postOptions = {
		method: "POST",
		body: JSON.stringify({ password }),
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	};
	const url = `http://localhost:3000/auth/password-reset/${id}/${token}`;

	try {
		const response = await fetch(url, postOptions);
		const result = await response.json();

		return result;
	} catch (error: Error) {
		console.error("x-> Email post request failed:", error.message);
	}
}
