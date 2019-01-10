export default {
    "@global": {
        html: {
            backgroundColor: '#202021'
        }

    },
    'section': {
        backgroundColor: '#202021',
        composes: ['section'],
        '& *': {
            color: '#d4d4d4'
        },
        '& li': {
            color: 'white'
        }

    }
}