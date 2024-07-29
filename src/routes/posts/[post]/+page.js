import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const { default: asdf, metadata } = await import(`$lib/posts/${params.post}.md`);
		return {
			markdown: asdf,
			metadata: metadata
		};
	} catch (e) {
		error(404, 'not found');
	}
};
