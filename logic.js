const Tweeter = function(){
    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    let _currentPostNumber = 2
    let _currentCommentNumber = 6

    const getPosts = () => _posts

    const addPost = function(inputText){
        _currentPostNumber ++
        _posts.push({text: inputText, id: "p" + _currentPostNumber, comments: []})
    }

    const removePost = function(postNumber){
        for(let index in _posts){
            if(_posts[index].id == postNumber){
                _posts.splice(index, 1)
            }
        }
    }

    const addComment = function(inputText, postID){
        for(let post of _posts){
            if(post.id == postID){
               _currentCommentNumber++
               post.comments.push({id: "c" + _currentCommentNumber, text: inputText})
            }
        }
    }

    const removeComment = function(postID, commentID){
        for(let post of _posts){
            if(post.id == postID){
                for(let index in post.comments){
                    if(post.comments[index].id == commentID){
                        post.comments.splice(index, 1)
                    }
                }
            }
        }
    }

    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}