
const myInfoObject = {
    name:'Thomas Sullivan',
    infoList : ['United States',' Girl Dad', 'male','sullivan.thom@gmail.com'],
    year : 2023
}


const mainStyles = {
    border : '5px solid blue',
    backgroundColor : 'yellow',
    
}
const listStyles = {
    width:'fit-content', 
    display:'block',
    marginLeft:'auto',
    marginRight:'auto',
    textAlign:'left'
}
const footerStyles = {
    border : '5px solid purple'
}
const appStyles = {
    textAlign : 'center'
}

const nameElement = <h1>{myInfoObject.name}</h1>
const infoElements = myInfoObject.infoList.map(e=> <li key={e}>{e}</li>)
const myInfo = <main
    style={mainStyles}
>
    {nameElement}
    <ul style={listStyles}>{infoElements}</ul>
</main>
const footer = <footer
    style={footerStyles}
>
    Copyright {myInfoObject.year}
</footer>

const app = (
    <div
        style={appStyles}
    >
        {myInfo}
        {footer}
    </div>
)
const rootElement = document.querySelector('.root')
ReactDOM.render(app, rootElement)