
const githubUsersRef = document.querySelector('#container')
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => { return response.json() })
        .then((posts) => { RenderPosts(posts) })
}

function RenderPosts(posts) {
    $(githubUsersRef).empty()
    $('.header').html('Posts Titles')
    for (let post of posts) {
        $('<div/>').attr('data-id', post.id)
            .attr('data-body', post.body)
            .addClass('titles')
            .html(post.title)
            .appendTo(githubUsersRef)
    } 
}

$('body').on('click', 'div.titles', function () {
    $(githubUsersRef).hide('blind')
    $('.header').html('Posts Comments')


    const button = $('<button/>').on('click', () => {
        $('.header').html('Posts Titles')
        $('#postDetails').empty()
        $(githubUsersRef).show('blind')
    })
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

function getComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => {
            return response.json()
        })
        .then((comments) => {
            RenderComments(comments)
        })
}

function RenderComments(comments) {
    for (let comment of comments) {
        $('<p/>')
            .addClass('comment')
            .html(`<span class="bold"> Comment:</span>${comment.body}<br/><span class="bold"> Name:</span> ${comment.name}<br/><span class="bold"> Email:</span> ${comment.email}`)
            .appendTo($('#postDetails'))
    }
}

getPosts()