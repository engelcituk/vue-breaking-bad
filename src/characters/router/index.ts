import type { RouteRecordRaw } from 'vue-router'

import CharacterLayout from '@/characters/layout/CharacterLayout.vue';
import CharacterId from '@/characters/pages/CharacterId.vue';
import CharacterList from '@/characters/pages/CharacterList.vue';
import CharacterSearch from '@/characters/pages/CharacterSearch.vue';


const characterRoute: RouteRecordRaw = {
    path: '/characters',
    redirect: '/characters/list',
    component: CharacterLayout,
    children:[
        {
            path:'by/:id',
            name: 'characcter-id',
            component: CharacterId,
            props: {title:'Por id'}
        },
        {
            path:'list',
            name: 'characcter-list',
            component: CharacterList,
            props: {title:'Lista'}
        },
        {
            path:'search',
            name: 'characcter-search',
            component: CharacterSearch,
            props: { title:'Búsqueda'}

        }
    ]
}
export default characterRoute
