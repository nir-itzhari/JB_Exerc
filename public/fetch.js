
const container = document.querySelector('#container')
const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => { return response.json() })
        .then((posts) => { RenderPosts(posts) })
}

const RenderPosts = (posts) => {
    $(container).empty()
    $('.header').html('Posts Titles')
    for (let post of posts) {
        $('<div/>').attr('data-id', post.id)
            .attr('data-body', post.body)
            .addClass('titles')
            .html(post.title)
            .appendTo(container)
    } 
}

$('body').on('click', 'div.titles', function () {
    $(container).hide('blind')
    $('.header').html('Posts Comments')

    const returnToTitles = () => {
        $('.header').html('Posts Titles')
            $('#postDetails').empty()
            $(container).show('blind')
    }
    
    const button = $('<button/>').on('click', returnToTitles)
        .addClass('btn btn-dark button')
        .html('Return to Posts')

    const title = $('<h2/>').html($(this).html())
                  .addClass('post')
    const body = $('<p/>')
        .html('<span class="bold">Post: </span>' + $(this)
            .attr('data-body'))
        .addClass('post')
    $('#postDetails').append(button, title, body)
    getComments($(this).attr('data-id'))
})
const getComments = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => {return response.json()})
        .then((comments) => {RenderComments(comments)})
}

const RenderComments =(comments) => {
    for (let comment of comments) {
        $('<p/>')
            .addClass('comment')
            .html(`<span class="bold"> Comment:</span>${comment.body}<br/><span class="bold"> Name:</span> ${comment.name}<br/><span class="bold"> Email:</span> ${comment.email}`)
            .appendTo($('#postDetails'))
    }
}

getPosts()