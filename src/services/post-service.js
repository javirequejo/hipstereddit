import axios from 'axios'

const postService = axios.create({
  baseURL: 'https://www.reddit.com/r/'
})

const getPostList = async r => {
    const list = await postService.get(`${r}.json`)
    if (Object.keys(list).length > 0) return list.data.data.children
    else return []
}

export {getPostList}