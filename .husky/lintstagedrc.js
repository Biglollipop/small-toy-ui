/*
 * @Author: chenshiqiang
 * @Date: 2022-09-11 15:17:15
 * @LastEditors: chenshiqiang
 * @LastEditTime: 2022-09-11 15:17:21
 * @version:
 * @Descripttion:
 */
module.exports = {
	'*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
	'{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': [
		'prettier --write--parser json'
	],
	'package.json': ['prettier --write'],
	'*.vue': ['prettier --write', 'stylelint --fix'],
	'*.{scss,less,styl,css,html}': ['stylelint --fix', 'prettier --write'],
	'*.md': ['prettier --write'],
	'*.hbs': ['prettier --write']
}
