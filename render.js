const Renderer = function(){
        

    const renderPosts = function(posts){
        $("#posts").empty()
        for(let post of posts){
            $("#posts").append(`<div class="post" data-id="${post.id}"><div class="post-text">${post.text}</div>${renderComments(post.comments)}</div>`)
        }
    }

    const renderComments = function(comments){
        let commentStr = ""
        for(let comment of comments){
            commentStr += `<div class="comments" data-id="${comment.id}">${comment.text}</div>`
        }
        return commentStr
    }

    return {
        renderPosts: renderPosts
    }
}