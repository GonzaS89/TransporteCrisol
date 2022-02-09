document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
})

function iniciarApp(){
    scrollNav();
    navegacionFija();
    resaltarEnlaceActivo();
    mostrarFlete();
};

function scrollNav(){
    const enlaces = document.querySelectorAll('.header-navegacion a');

    enlaces.forEach ( enlace => {

        const link = enlace;    
        
        link.addEventListener('click', function(e){

            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({behavior: "smooth"});
        });
    });
};


function navegacionFija(){

    window.addEventListener('scroll', function(){
        const barra = document.querySelector('.header-contenedor');
        const body = document.querySelector('body');

   if (barra.getBoundingClientRect().bottom >= 0){
        barra.classList.add('fija');
        body.classList.add('body-scroll')
    }
    else{
        barra.classList.remove('fija');
        body.classList.remove('body-scroll')
    }
    
});
};

function resaltarEnlaceActivo(){

    window.addEventListener('scroll', function(){

        const enlaces = document.querySelectorAll('.header-navegacion a');
        const nosotros = document.getElementById('nosotros');
        const servicios = document.getElementById('servicios');
        const calculadora = document.getElementById('calculadora');
        const contacto = document.getElementById('contacto');
        

        enlaces.forEach(enlace => {

            const enlaceNos = enlaces[0];
            const enlaceCalc = enlaces[1]
            const enlaceServ = enlaces[2];
            const enlaceCont = enlaces[3];

            const enlaceValor = enlace.attributes.href.value;
            const nosotrosConID = '#' + nosotros.attributes.id.value;
            const serviciosConID = '#' + servicios.attributes.id.value;
            const contactoConID = '#' + contacto.attributes.id.value;
            const calcConID = '#' + calculadora.attributes.id.value;

            if (nosotros.getBoundingClientRect().top > 100){
                enlaceNos.classList.remove('resaltado')
            }
            if(nosotros.getBoundingClientRect().top <= 150
            && nosotros.getBoundingClientRect().bottom >= 150 
            && enlaceValor == nosotrosConID)
            {
            enlaceNos.classList.add('resaltado')
            enlaceCalc.classList.remove('resaltado');
            }
            if (calculadora.getBoundingClientRect().top <= 150 
           && calculadora.getBoundingClientRect().bottom >= 150 
           && enlaceValor == calcConID){

            enlaceServ.classList.remove('resaltado');
            enlaceNos.classList.remove('resaltado');
            enlaceCalc.classList.add('resaltado'); 
           }
           if (servicios.getBoundingClientRect().top <= 150 
           && servicios.getBoundingClientRect().bottom >= 150 
           && enlaceValor == serviciosConID){

            enlaceServ.classList.add('resaltado'); 
            enlaceCont.classList.remove('resaltado');
            enlaceCalc.classList.remove('resaltado'); 

           }

           if (contacto.getBoundingClientRect().top <= 150 
           && contacto.getBoundingClientRect().bottom >= 150 
           && enlaceValor == contactoConID){

            enlaceServ.classList.remove('resaltado');
            enlaceCont.classList.add('resaltado'); 
           }
    });
});
};

function mostrarFlete(){
    const boton = document.getElementById('btn2');

        
      
    boton.addEventListener('click', function(){
        const calculadora = document.querySelector('.calculadora');
        const ingreso = document.getElementById('kgs');
        const ingresoVd = document.getElementById('valor')
        const valorIngresoVd = ingresoVd.value;
        const valorIng = ingreso.value;
        let resul;
        let resulSeg;
        let envioTotal;
        const mensaje = document.createElement('p');

        if(valorIng == '' || valorIng == 0 ){
            
            mensaje.textContent = `Ingrese un valor válido en el primer campo`;
            mensaje.classList.add('mensajeError');
            calculadora.appendChild(mensaje);
            setTimeout(() => {
            mensaje.remove();
         },3500)
        }
        else{
            if(valorIng >=1 && valorIng <=10){
                resul=490;
            }
            if(valorIng >10 && valorIng <=20){
                resul=570;
            }
            if(valorIng >20 && valorIng <=30){
                resul=780;
            }
            if(valorIng >30 && valorIng <=40){
                resul=970;
            }
            if(valorIng >40 && valorIng <=50){
                resul=1146
            }
            if(valorIng >50 && valorIng <=60){
                resul=1310
            }
            if(valorIng >60 && valorIng <=70){
                resul=1490
            }
            if(valorIng >70 && valorIng <=80){
                resul=1630
            }
            if(valorIng >80 && valorIng <=90){
                resul=1730
            }
            if(valorIng >90 && valorIng <=100){
                resul=1854
            }
            if(valorIng >100 && valorIng <=120){
                resul=2105
            }
            if(valorIng >120 && valorIng <=140){
                resul=2345
            }
            if(valorIng >140 && valorIng <=150){
                resul=2598
            }
            if(valorIng >150 && valorIng <=160){
                resul=2850
            }
            if(valorIng >180 && valorIng <=200){
                resul=3075
            }
            if(valorIng >200 && valorIng <=250){
                resul=3692
            }
            if(valorIng >250 && valorIng <=300){
                resul=4124
            }
            if(valorIng >300 && valorIng <=350){
                resul=4690
            }
            if(valorIng >350 && valorIng <=400){
                resul=5292
            }
            if(valorIng >400 && valorIng <=500){
                resul=6446
            }
            if(valorIng >500 && valorIng <=600){
                resul=7622
            }
            if(valorIng >600 && valorIng <=700){
                resul=8407
            }
            if(valorIng >700 && valorIng <=800){
                resul=9536
            }
            if(valorIng >800 && valorIng <=900){
                resul=10178
            }
            if(valorIng >900 && valorIng <=1000){
                resul=11300
            }
            
            if(valorIngresoVd == '' || valorIngresoVd < 1000){
                mensaje.textContent = `Ingrese un valor válido en el segundo campo o un valor mayor a $ 1.000`;
                mensaje.classList.add('mensajeError');
                calculadora.appendChild(mensaje);
                setTimeout(() => {
                mensaje.remove();
                },3500)  
            }

            else{
                resulSeg=valorIngresoVd*0.008;
                envioTotal= resul + resulSeg;
    
                mensaje.textContent = `El valor de tu envío es de $${envioTotal} más IVA`;
                mensaje.classList.add('resultado');
                calculadora.appendChild(mensaje);
                setTimeout(() => {
                mensaje.remove();
             },5000)
            }
            
            }
                     
    });

   
}
