function screenshot() {
    html2canvas(document.body, {
        background: '#fff'
    }).then(function (canvas) {

        document.body.appendChild(canvas);

        // Get base64URL
        var base64URL = canvas.toDataURL('https://reqbin.com/echo/post/json').replace('image/jpeg', 'image/octet-stream');

        // AJAX request
        $.ajax({
            url: 'ajaxfile.php',
            type: 'post',
            data: {
                image: base64URL
            },
            success: function (data) {
                console.log('Upload successfully');
            }
        });
    });
}