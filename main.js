$(document).ready(function(){
    $('#corrousel-imagens').slick({
        autoplay: true,
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })


    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
        // letras são representados por 's' e números '0'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            },
            mensagem: {
                required: true,
            },
            veiculo: {
                required: false,
            }
        },
        messages: {
            nome: 'Este campo é obrigatório',
            email: 'Email obrigatório',
            telefone: 'Telefone obrigatório',
            mensagem: 'Este campo é obrigatório'
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato')
        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top 
        }, 1000)



    })


})