// /** @type {import('./$types').PageServerLoad} */
// export async function load({ cookies }) {
// 	const user = await db.getUserFromSession(cookies.get('sessionid'));
// 	return { user };
// }

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const mdp = data.get('mdp');

		console.log("email: "+email+" : "+mdp);

		return { success: true };
	},
	register: async (event) => {
		// TODO register the user
	}
};