import { reactive } from 'vue';

export const store = reactive({
    apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0',
    cardList: [],
    loading: true
});