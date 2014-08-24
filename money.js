var debits = require('./debits-data.js');
var transactions = [];
for (var d in debits) {
	f(d,debits[d]);
}
h();

//console.log(g());

function h() {
	var json = JSON.parse(g());
	for (var j in json) {
		var bar = '';
		for (var i = parseInt(json[j].amount); i>=0;--i) {
			if (i % 25 == 0) {
				bar += '-'
			}
		}
		var tuple = '\033[33m' + json[j].transaction + '\033[0m' + '~\033[31m' + bar + '$' + json[j].amount + '\033[0m';
		console.log(tuple);
	}
}

function g() {
	var out = '[';
	for (var t in transactions) {
		out += '{"transaction":"' + transactions[t].transaction.substring(0,16) + '","amount":"' + transactions[t].amount + '"},';
	}
	out+='{}]';
	return out;
}

function f (d,data) {
	var amount = data.Amount*-1;
	var key = data.Description.substring(0,3);
	if (key.length == 0) {
		key = '###';
		data.Description = 'CHECKS'
	}
	if (transactions[key]) {
		transactions[key].amount += amount;
	} else {
		transactions[key] = {
			transaction: data.Description,
			amount: amount
		};
	}
}