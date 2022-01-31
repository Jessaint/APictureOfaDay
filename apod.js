function clickNasa(){
 var data = document.getElementById("data").value
     $.ajax({url:`https://api.nasa.gov/planetary/apod?api_key=M4h73iFy8EIAjrtogzohYnJYc0g1gMHbaxbWYebK&date=${data}`,
        success: function( param){
        $("#image").attr('src',param.url)
        $('#nomeFoto').text( param.title)
        $('#description').text( param.explanation)},
        error:function(erro){
        console.log(`${erro.result + erro.status} Deu ruim :( `);},
});
    };
clickNasa()