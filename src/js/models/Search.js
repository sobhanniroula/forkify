import { key, proxy, site } from '../config';
import axios from 'axios';
// we don't have to specify actual path name if the import is from external source (here: axios from npm)

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        
        try{
        const res = await axios(`${proxy}${site}search?key=${key}&q=${this.query}`);
        this.result = res.data.recipes;
        //console.log(this.result);
        } catch(error) {
            alert(error);
        }
    }
}