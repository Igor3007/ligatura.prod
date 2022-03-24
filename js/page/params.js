const PARAMS = {
    type: {
        pvd: {
            name: 'Пакет ПВД',
            desc: [
                'Пакеты ПВД гладкой фактуры, плотностью 70 мкн, с усиленой вырубной ручкой всегда в наличии на складе в Минске.',
                'Пакеты плотностью 50 мкн, 80 мкн, 100 мкн, пакеты 30х30 см, 40х40 см, 45х45 см, 70х60 см, нестандартных цветов можно оформить по заказной программе со сроком поставки 10 рабочих дней'
            ],
            size: [
                { 
                    title: '20x30',
                    colors: [
                        { title: 'Белый',   hex: '#fff', price: 0.27 },
                    ]
                },
                { 
                    title: '30x40',
                    colors: [
                        { title: 'Белый', hex: '#fff',   price: 0.41},
                        { title: 'Золото', hex: 'linear-gradient(#d8c786, #75662a)',  price: 0.76},
                        { title: 'Красный ', hex: '#d22630', price: 0.47},
                        { title: 'Бордовый ', hex: '#752936', price: 0.47},
                        { title: 'Жёлтый ', hex: '#FFC627', price: 0.47},
                        { title: 'Оранжевый ', hex: '#fC4C02', price: 0.47},
                        { title: 'Синий ', hex: '#0057B7', price: 0.47},
                        { title: 'Тёмно-синий ', hex: '#141B4D', price: 0.47},
                        { title: 'Голубой ', hex: '#00A9E0', price: 0.47},
                        { title: 'Голубой металлик ', hex: '#007DBA', price: 0.47},
                        { title: 'Серебро ', hex: 'linear-gradient(#dadaef, #8e9198)', price: 0.47},
                        { title: 'Бирюзовый ', hex: '#007C80', price: 0.47},
                        { title: 'Зелёный ', hex: '#007A33', price: 0.47},
                        { title: 'Темно-зеленый ', hex: '#004E42', price: 0.47},
                        { title: 'Салатовый  ', hex: '#37AD68', price: 0.47},
                        { title: 'Коричневый  ', hex: '#623B2A', price: 0.47},
                        { title: 'Светло-бежевый ', hex: '#F5E1A4', price: 0.47},
                        { title: 'Фиолетовый', hex: '#82464F', price: 0.47},
                        { title: 'Розовый', hex: '#F59BBB', price: 0.47},
                    ]
                },
                { 
                    title: '40x50',
                    colors: [
                        { title: 'Белый', hex: '#fff',   price: 0.58},
                        { title: 'Золото', hex: 'linear-gradient(#d8c786, #75662a)',  price: 0.76},
                        { title: 'Красный ', hex: '#d22630', price: 0.65},
                        { title: 'Бордовый ', hex: '#752936', price: 0.65},
                        { title: 'Жёлтый ', hex: '#FFC627', price: 0.65},
                        { title: 'Оранжевый ', hex: '#fC4C02', price: 0.65},
                        { title: 'Синий ', hex: '#0057B7', price: 0.65},
                        { title: 'Тёмно-синий ', hex: '#141B4D', price: 0.65},
                        { title: 'Голубой ', hex: '#00A9E0', price: 0.65},
                        { title: 'Голубой металлик ', hex: '#007DBA', price: 0.65},
                        { title: 'Серебро ', hex: 'linear-gradient(#dadaef, #8e9198)', price: 0.65},
                        { title: 'Бирюзовый ', hex: '#007C80', price: 0.65},
                        { title: 'Зелёный ', hex: '#007A33', price: 0.65},
                        { title: 'Темно-зеленый ', hex: '#004E42', price: 0.65},
                        { title: 'Салатовый  ', hex: '#37AD68', price: 0.65},
                        { title: 'Коричневый  ', hex: '#623B2A', price: 0.65},
                        { title: 'Светло-бежевый ', hex: '#F5E1A4', price: 0.65},
                        { title: 'Фиолетовый', hex: '#82464F', price: 0.65},
                        { title: 'Розовый', hex: '#F59BBB', price: 0.65},
                    ]
                },
                { 
                    title: '50x60',
                    colors: [
                        { title: 'Белый', hex: '#fff',   price: 0.81},
                        { title: 'Черный', hex: '#000', price: 0.92},
                        { title: 'Серебро', hex: 'linear-gradient(#dadaef, #8e9198)',  price: 0.92},
                    ]
                },
                { 
                    title: '60x50',
                    colors: [
                        { title: 'Белый', hex: '#fff',   price: 0.81},
                        { title: 'Черный', hex: '#000', price: 0.92},
                        { title: 'Серебро', hex: 'linear-gradient(#dadaef, #8e9198)',  price: 0.92},
                    ]
                },
                { 
                    title: '60x70',
                    colors: [
                        { title: 'Белый', hex: '#fff',   price: 0.83},
                        { title: 'Черный', hex: '#000', price: 0.93},
                        { title: 'Серебро', hex: 'linear-gradient(#dadaef, #8e9198)',  price: 0.93},
                    ]
                },

            ]
        },

        craft: {
            name: 'Крафт с кручеными ручками',
            desc: [
                'Пакеты крафт с кручеными ручками, плотность бумаги 80 г/м2, бурые и белые всегда в наличии на складе в Минске.',
                'Пакеты крафт иных размеров и цветов доступны к заказу со сроком поставки 10 рабочих дней.',
                ],
            size: [
                { 
                    title: '24x32x11',
                    colors: [
                        { title: 'Белый',   hex: '#fff', price: 0.59 },
                        { title: 'Бурый',   hex: '#964b00', price: 0.49 },
                    ]
                }, 
                { 
                    title: '35х45х15',
                    colors: [
                        { title: 'Белый',   hex: '#fff', price: 0.67 },
                        { title: 'Бурый',   hex: '#964b00', price: 0.56 },
                    ]
                }, 
            ]
        }
    },

    colorfulness: [
        { 
            'min' : 0, 
            'max' : 180,
            'price': {
                '1+0' : 130,
                '1+1' : 260,
                '2+0' : 213,
                '2+2' : 426,
                '3+0' : 303,
                '3+3' : 606,
            }
        },
        { 
            'min' : 181, 
            'max' : 350,
            'price': {
                '1+0' : 0.72,
                '1+1' : 1.44,
                '2+0' : 1.44,
                '2+2' : 2.88,
                '3+0' : 2.16,
                '3+3' : 4.32,
            }
        },
        { 
            'min' : 351, 
            'max' : 550,
            'price': {
                '1+0' : 0.6,
                '1+1' : 1.2,
                '2+0' : 1.2,
                '2+2' : 2.4,
                '3+0' : 2.74,
                '3+3' : 4.38,
            }
        },
        { 
            'min' : 551, 
            'max' : 1000,
            'price': {
                '1+0' : 0.52,
                '1+1' : 1.04,
                '2+0' : 0.91,
                '2+2' : 1.82,
                '3+0' : 1.37,
                '3+3' : 2.74,
            }
        },
        { 
            'min' : 1001, 
            'max' : 2000,
            'price': {
                '1+0' : 0.48,
                '1+1' : 1.96,
                '2+0' : 0.84,
                '2+2' : 1.68,
                '3+0' : 1.26,
                '3+3' : 2.52,
            }
        },
    ]
     


}