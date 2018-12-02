import getModuleName from '../src/module';

test('must return "./module.js"', () => {
	const moduleName = getModuleName();

	expect(moduleName).toBe('./module.js');
});
