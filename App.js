const heading = React.createElement('Div',{id:"parent"},
    [React.createElement('Div',{id:"child"},
        [React.createElement('h1',{},"I am h1 Tag"),React.createElement('h2',{},"I am h2 Tag")]),
    React.createElement('Div',{id:"child2"},
        [React.createElement('h1',{},"I am h1 Tag"),React.createElement('h2',{},"I am h2 Tag")])
    ]
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
