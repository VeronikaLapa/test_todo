import Vuex from 'vuex';

export const ORDER = {date: 'date', status: 'status'}
export const store = new Vuex.Store({
    state: {
        todos: [],
        newTodo: '',
        order: ORDER.date,
        search: ''
    },
    mutations: {
        GET_TODO(state, todo){
            state.newTodo = todo
        },
        ADD_TODO(state){
            state.todos.push({
                body: state.newTodo,
                completed: false,
                date: new Date()
            })
        },
        COMPLETE_TODO(state, todo){
            todo.completed = !todo.completed
        },
        CLEAR_TODO(state){
            state.newTodo = ''
        },
        SET_ORDER(state, order) {
            state.order = order;
        },
        SET_SEARCH(state, search) {
            state.search = search;
        }
    },
    actions: {
        getTodo({commit}, todo){
            commit('GET_TODO', todo)
        },
        addTodo({commit}){
            commit('ADD_TODO')
        },
        completeTodo({commit}, todo){
            commit('COMPLETE_TODO', todo)
        },
        clearTodo({commit}){
            commit('CLEAR_TODO')
        },
        setOrder({commit}, order) {
            commit('SET_ORDER', order);
        },
        setSearch({commit}, search) {
            commit('SET_SEARCH', search)
        }
    },
    getters: {
        newTodo: state => state.newTodo,
        todos: state  => {
            let res;
            console.log(state.todos, state.search)
            if (state.search !== '') {
                res = state.todos.filter(todo=> {
                    return todo.body.includes(state.search)
                        || (todo.completed && "Выполнено".includes(state.search))
                        || (!todo.completed && "В работе".includes(state.search))
                })
            } else {
                res = state.todos;
            }
            console.log(res);
            if (state.order === ORDER.date) {
                return res;
            } else {
                return [...res.filter(todo=>todo.completed), ...res.filter(todo=>!todo.completed)]
            }
        },
        getOrder: state => state.order

    }
});
