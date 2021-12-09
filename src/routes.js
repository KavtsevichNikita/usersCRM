// default

import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router)


//Pages

import Home from '@/pages/Home'
import NotFound from '@/pages/404'
import Users from '@/pages/Users'

// Routering

export default new Router ({
    // mode: history,
    routes : [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/users',
            name: 'users',
            component: Users
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        },
    ]
})