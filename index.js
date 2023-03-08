const validarCedula = (cedulaID) => {
    const length = cedulaID.length;
    let count = 0;

    if(length % 2 == 0)
    {
       
        for(let i = 0; i < length; i++)
        {
            let num = parseInt(cedulaID[i]);
            if (i % 2 == 0) 
            {
                if ((num *= 2) > 9)
                {

                    let num2 = num % 10;
                    let num1 = parseInt(num / 10);

                    num = num1 + num2;
                }
            }
            
            count += num;
        }
    }
    else {

        for(let i = length - 1 ; i >= 0; i--)
        {
            let num = parseInt(cedulaID[i]);
            if ((i - 1) % 2 == 0) 
             {
                if ((num *= 2) > 9)
                {
                   
                    let num2 = num % 10;
                    let num1 = parseInt(num / 10);

                    num = num1 + num2;
                }
            }
            
            count += num;
        }
    }

    return (count % 10) === 0;
}

const validarID = () => {
    const cedulaID = document.getElementById('cedulaID');
    const verificador = document.getElementById('cedulaVerif');
    let impresion = "";


    if( validarCedula(cedulaID.value) )
        impresion = "Cedula Valida! 👍🏽";
    else
        impresion = "Cedula Invalida 👎🏽";

    verificador.textContent = impresion;
    cedulaID.value = null;

};


