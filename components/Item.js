

function Item(props){
    return (
        <div className={props.className}>
            {props.icon}
            <h3 className={"itemTitle " + props.titleClass}>{props.title}</h3>
            <span className={"material-symbols-outlined " + props.arrowClass}>chevron_right</span>       
        </div>
    )
} 

export default Item         