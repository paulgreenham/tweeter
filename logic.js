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

    const _getPosts = () => _posts

    const _addPost = function(inputText){
        _currentPostNumber ++
        _posts.push({text: inputText, id: "p" + _currentPostNumber, comments: []})
    }

    const _removePost = function(postNumber){
        for(let index in _posts){
            if(_posts[index].id == postNumber){
                _posts.splice(index, 1)
            }
        }
    }

    const _addComment = function(inputText, postID){
        for(let post of _posts){
            if(post.id == postID){
               _currentCommentNumber++
               post.comments.push({id: "c" + _currentCommentNumber, text: inputText})
            }
        }
    }

    const _removeComment = function(postID, commentID){
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
        getPosts: _getPosts,
        addPost: _addPost,
        removePost: _removePost,
        addComment: _addComment,
        removeComment: _removeComment
    }
}

const tweeter = Tweeter()

tweeter.addPost("This is my own post!")
console.log(tweeter.getPosts())

tweeter.removePost("p1")
console.log(tweeter.getPosts())

tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("Second the best!", "p2")
console.log(tweeter.getPosts())

tweeter.removeComment("p2", "c6")
console.log(tweeter.getPosts())