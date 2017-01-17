import axios from 'axios';

const KEY = 'b447c136-a2ee-4f35-a082-0436cf8afcae';

module.exports = (word) => {
	let url = `http:\/\/sandbox.api.simsimi.com/request.p?key=${KEY}&lc=zh&text=${word}`;
	return axios.get(url);
};