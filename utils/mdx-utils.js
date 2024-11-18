import { api } from '../services/api'

export const getPosts = async () => {
    let { data, error } = await api.from('posts')
        .select('*')

    if (error) {
        console.error('Erro ao buscar dados:', error);
        return;
    }

    if (data) {
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

    let { data: post, error } = await api
        .from('posts')
        .select("*")
        .eq('id', id)

        if (error) {
            console.error('Erro ao buscar dados:', error);
            return;
        }
    
        if (post) {
            console.log(post)
            return post[0];
        }

    return []
}