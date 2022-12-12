import type { RouteRecordRaw } from 'vue-router'

import CharacterLayout from '@/characters/layout/CharacterLayout.vue';
import CharacterId from '@/characters/pages/CharacterId.vue';
import CharacterList from '@/characters/pages/CharacterId.vue';
import CharacterSearch from '@/characters/pages/CharacterSearch.vue';


const characterRoute: RouteRecordRaw = {
    path: '/characters',
    redirect: '/characters/list',
    component: CharacterLayout,
    children:[
        {
            path:'by/:id', name: 'characcter-id', component: CharacterId
        },
        {
            path:'list', name: 'characcter-list', component: CharacterList
        },
        {
            path:'search', name: 'characcter-search', component: CharacterSearch
        }
    ]
}
export default characterRoute
