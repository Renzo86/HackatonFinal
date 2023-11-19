Culqi.publicKey = "pk_test_1916e2a75d4efdcb"; ///si tiene forma de sacarlo desde .env sería genial

Culqi.options({
    lang: "auto",
    installments: false, // Habilitar o deshabilitar el campo de cuotas
    paymentMethods: {
    tarjeta: true,
    yape: false,
    bancaMovil: false,
    agente: false,
    billetera: false,
    cuotealo: false,
    },
});

