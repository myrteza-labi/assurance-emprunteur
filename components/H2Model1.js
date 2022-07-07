
export default function H2Model1(props) {

    return (
      <div className="h2Model1Container ">
          <h2 className={"h2Model1 " + props.className}>{props.title}</h2>
          <div className="h2Divider"></div>
      </div>
    );
  }
   