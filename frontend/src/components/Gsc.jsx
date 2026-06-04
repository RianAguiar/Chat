import '../styles/Gsc.css'

function Gsc(props) {
    const eastereggemoji = '🧛‍♀️'
    return(
        <div>
            <button className={props.className}>{eastereggemoji}</button>
        </div>
    ) 
}

export default Gsc