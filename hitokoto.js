/**
 * This module provides a function to retrieve a random sentence (hitokoto) 
 * from a collection of poetry objects.
 */

// Project: gaokao-poetry https://github.com/clover-yan/gaokao-poetry
// Author: Clover Yan https://www.khyan.top

/**
 * Retrieves a random sentence (hitokoto) from a collection of poetry objects.
 *
 * @async
 * @function getHitokoto
 * @param {Array<Object>} poetryObjects - An array of poetry objects, where each object contains a title, author, and an array of sentences.
 * @returns {Promise<Object>} A promise that resolves to an object containing:
 *   - `from` {string}: The title of the poetry article.
 *   - `from_who` {string}: The author of the poetry article.
 *   - `hitokoto` {string}: A randomly selected sentence from the poetry article.
 * @throws {Error} Throws an error if:
 *   - The input is not a valid array of poetry objects.
 *   - The poetry objects or their properties are invalid or missing.
 *   - The sentences array is empty or contains invalid data.
 */
export async function getHitokoto(poetryObjects) {
	if (!Array.isArray(poetryObjects) || poetryObjects.length === 0) {
		throw new Error('Invalid or empty sentences.json file');
	}

	const randomArticle = poetryObjects[Math.floor(Math.random() * poetryObjects.length)];
	if (!typeof randomArticle === 'object' || randomArticle === null) {
		throw new Error('Invalid sentences.json file');
	}

	const sentences = randomArticle.content;
	if (!Array.isArray(sentences) || sentences.length === 0) {
		throw new Error('Invalid sentences.json file');
	}

	const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
	if (typeof randomSentence !== 'string') {
		throw new Error('Invalid sentences.json file');
	}

	return { 'from': randomArticle.title, 'from_who': randomArticle.author, 'hitokoto': randomSentence };
}
