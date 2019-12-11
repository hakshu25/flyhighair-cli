'use strict';
const {h, Text} = require('ink'); // eslint-disable-line no-unused-vars
const SelectInput = require('ink-select-input'); // eslint-disable-line no-unused-vars
const opn = require('opn');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Twitter',
		url: 'https://twitter.com/fly_highup_air'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/flyhighair'
	},
	{
		label: 'Qiita',
		url: 'https://qiita.com/hakshu'
	},
	{
		label: 'Exit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>I'm a Web Developer</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
