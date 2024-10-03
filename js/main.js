$(document).ready(function(){



if(window.location.href.indexOf('index')>-1){

    $('.bxslider').bxSlider({

        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true

    });

}

    

//Posts

if(window.location.href.indexOf('index')>-1){

var posts=[
    {

    title: "Prueba de titulo 1",
    date: moment().date() + " de "+ moment().format("MMMM") + " del "+ moment().format("YYYY"),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {

        title: "Prueba de titulo 2",
        date: moment().date() + " de "+ moment().format("MMMM") + " del "+ moment().format("YYYY"),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    
        },
        {

            title: "Prueba de titulo 3",
            date: moment().date() + " de "+ moment().format("MMMM") + " del "+ moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        
            },
            {

                title: "Prueba de titulo 4",
                date: moment().date() + " de "+ moment().format("MMMM") + " del "+ moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            
                },
                {

                    title: "Prueba de titulo 5",
                    date: moment().date() + " de "+ moment().format("MMMM") + " del "+ moment().format("YYYY"),
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                
                    },
                    {

                        title: "Prueba de titulo 6",
                        date: moment().date() + " de "+ moment().format("MMMM") + " del "+ moment().format("YYYY"),
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    
                        },
                    
];

posts.forEach((item, index) => {

    var post=`
    
    <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
    
    
    
    
    `;

    $("#posts").append(post);
});
}

//Selector de tema

var theme = $("#theme");
var cargado = localStorage.getItem("color");

if(cargado==null){
    cargado="css/green.css";
}

theme.attr("href",cargado);  


$("#to-green").click(function(){

    var green = "css/green.css";
    theme.attr("href", green);
    localStorage.setItem("color", green);
});

$("#to-blue").click(function(){
    
    var blue = "css/blue.css";
     theme.attr("href", blue);
    localStorage.setItem("color", blue);
});

$("#to-red").click(function(){

    var red = "css/red.css";
    theme.attr("href", red);
    localStorage.setItem("color", red);
});


//Scroll arriba de la web

    $(".subir").click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        },500);

            return false;

    });



    //Login falso

    $("#login form").submit(function(){

        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);



    })

    var form_name = localStorage.getItem("form_name");




    if(form_name != null && form_name != "undefined"){


        var about_parrafo = $("#about p");

        about_parrafo.html("<br> <strong>Bienevenido "+form_name+"<strong/>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();


        $("#logout").click(function(){

            localStorage.removeItem("form_name");
            location.reload();
        });



    }

    //Acordeon

    if(window.location.href.indexOf('about')>-1){

        $("#acordeon").accordion();


    }

    //Reloj

    if(window.location.href.indexOf('reloj')>-1){

        

            setInterval(function(){

                var reloj = moment().format('h:mm:ss');
                $("#reloj").html(reloj);

            },500);
        



    }

    //Validacion

    if(window.location.href.indexOf('contact')>-1){
        
    $("form input[name='born_date']").datepicker({

        dateFormat: "dd-mm-yy",
        lang: "es"

    });

    $("#form_contact").disableAutoFill();

        $.validate({

            lang: "es"

        });

        

    }
        
    

    

});