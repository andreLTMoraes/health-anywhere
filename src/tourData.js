export const doctor = {
    name: 'Karev',
    points:[
        {
            name: 'Posto 1',
            address: 'Rua Tal',
            municipe: 'Bairro Tal',
            city: 'Cidade Tal',
            patientes: [
                {
                    name: 'Paciente 1'
                },
                {
                    name: 'Paciente 2'
                }
            ]
        },
        {
            name: 'Posto 2',
            address: 'Rua Outra',
            municipe: 'Bairro Outra',
            city: 'Cidade Outra',
            patientes: [
                {
                    name: 'Paciente 3'
                }
            ]
        }
    ]
};

export const patients = [
    {   
        id: 1,
        name: 'Paciente 1',
        yearOld: 20,
        admeasurements: [
            {
                name: 'Oximetria',
                values: [96, 94, 97],
                dates: ['25/07/2021', '26/07/2021', '27/07/2021']
            }
        ]
    },
    {
        id: 2,
        name: 'Paciente 2',
        yearOld: 84,
        admeasurements: [
            {
                name: 'Oximetria',
                values: [86, 90, 87, 82],
                dates: ['15/06/2021', '16/06/2021', '17/06/2021', '18/06/2021']
            },
            {
                name: 'Temperatura',
                values: [32, 34, 36, 34],
                dates: ['15/06/2021', '16/06/2021', '17/06/2021', '18/06/2021']
            }
        ]
    },
    {
        id: 3,
        name: 'Paciente 3',
        yearOld: 45,
        admeasurements: [
            {
                name: 'Temperatura',
                values: [36, 35, 36],
                dates: ['21/07/2021', '22/07/2021', '24/07/2021']
            }
        ]
    }
];