

const LIST = [
        {   
            'id':'1',
            'name':'Голос страны KZ',
            'company':'Maximum Company',
            'img':"picture1"  
        },
        {   
            'id':'2',
            'name':'Лучший автор песен',
            'company':'Maximum Company',
            'img':"picture2"  
        },
        {   
            'id':'3',
            'name':'The Stars',
            'company':'Maximum Company',
            'img':"picture3"  
        },
        {   
            'id':'4',
            'name':'Top Singer',
            'company':'Maximum Company',
            'img':"picture4"  
        }
];

const reducer = (store = LIST, action) => {
    switch (action.type) {
        default: {
            return store
        }
    }
} 

export default reducer;