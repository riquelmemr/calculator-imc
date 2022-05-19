function MyEscope() {
    const form = document.querySelector('.form')
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const inputWeight = e.target.querySelector('.weight');
        const inputHeight = e.target.querySelector('.height');
        
        const weight = Number(inputWeight.value);
        const height = Number(inputHeight.value);

        if (!weight) {
            setResulted('Peso inválido', false);
            return;
        }

        if (!height) {
            setResulted('Altura inválida', false);
            return;
        }

        const imc = getImc(weight, height);
        const infographic = getInfographic(imc);

        const msg = `Seu IMC é ${imc} (${infographic}).`;
        setResulted(msg, true)
    });

    function getInfographic(imc) {
        const infographic = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 
        'Obesidade Grau 2', 'Obesidade Grau 3'];

        if(imc >= 39.9) {
            return infographic[5];
        } 
        if (imc >= 34.9) {
            return infographic[4];
        }
        if (imc >= 29.9) {
            return infographic[3];
        }
        if (imc >= 24.9) {
            return infographic[2];
        }
        if (imc >= 18.5) {
            return infographic[1];
        }
        if (imc < 18.5) {
            return infographic[0];
        }
    }

    function getImc(weight, height) {
        const imc = weight / height ** 2;
        return imc.toFixed(2);
    }

    function setResulted(msg, isValid) {
        const resulted = document.querySelector('.resulted');
        resulted.innerHTML = '';
        const p = newP();

        if (isValid) {
            p.classList.add('valid');
        } 
        else {
            p.classList.add('invalid');
        }
        
        p.innerHTML = msg;
        resulted.appendChild(p);
    }

    function newP() { // cria parágrafo
        const p = document.createElement('p'); 
        return p;
    }
}

MyEscope();
