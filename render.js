const Renderer = function(){
        

    const renderPosts = function(posts){
        $("#posts").empty()
        for(let post of posts){
            $("#posts").append(
                `<div class="post" data-id="${post.id}">
                    <p class="post-text">${post.text}</p>
                    ${renderComments(post.comments)}
                    <button class="delete">Delete Post</button>
                </div>`
            )
        }
    }

    const renderComments = function(comments){
        let commentStr = ""
        for(let comment of comments){
            commentStr += 
                `<div class="comments" data-id="${comment.id}">
                    <span class="delete-comment">X</span>
                    <span>${comment.text}</span>
                </div>`
        }
        commentStr +=
            `<div>
                <input type="text" placeholder="Write a comment" class="comments">
                <button class="comment-button">Comment</button>
            </div>`
        return commentStr
    }

    return {
        renderPosts: renderPosts
    }
}