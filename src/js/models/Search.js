/*
API address: https://www.food2fork.com/api
My API key: 88510e8fc791de7f31cd5fd7d009b646
Teacher's API key: 462b1cc8d4f2730081462fbc65136320
Other API keys: 
1. jiwepiyaz@directmail.top, Letssee@444, 5e810ae0ed398d834e00e75e710d1557
2. 
3. 
*/

import axios from 'axios';
// we don't have to specify actual path name if the import is from external source (here: axios from npm)

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const site = 'https://www.food2fork.com/api/';
        // const key = '88510e8fc791de7f31cd5fd7d009b646';
        //const key = '462b1cc8d4f2730081462fbc65136320';
        const key = '5e810ae0ed398d834e00e75e710d1557';
        try{
        const res = await axios(`${proxy}${site}search?key=${key}&q=${this.query}`);
        this.result = res.data.recipes;
        //console.log(this.result);
        } catch(error) {
            alert(error);
        }
    }
}