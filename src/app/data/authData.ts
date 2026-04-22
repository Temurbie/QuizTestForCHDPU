export interface IAuth{
    id: number
    login: string,
    parol: string,
    ban: boolean
}

export const AUTHDATA: IAuth[] = [
    {
        id : 1,
        ban : false,
        login : "Nilufar",
        parol: 'sobaka'

    },
    {
        id: 2,
        ban: true,
        login : "admin",
        parol: '123456'
    },
    {
        id: 3,
        ban: false,
        login : 'Ishonch01',
        parol: 'I0101Ishonch'
    },
      {
        id: 4,
        ban: false,
        login : 'Gavhar01',
        parol: 'Gavhar2101'
    },
      {
        id: 5,
        ban: false,
        login : 'Diyorbek01',
        parol: 'Diyorbek2101'
    },
      {
        id: 6,
        ban: false,
        login : 'SunShine',
        parol: 'SunShine2101'
    },
    {
        id: 7,
        ban: false,
        login : 'Dilnoza',
        parol: 'Dilnoza210101'
    },
     {
        id: 8,
        ban: false,
        login : 'Zahro',
        parol: '14741512'
    },

]