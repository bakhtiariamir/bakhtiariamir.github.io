const Image = (props) => {
    let width = props.width ? props.width : 25;
    let height = props.height ? props.height : 25;    
    return <img style={{width:width,height:height}}  className="resume-image" src={require('/public/images/'+props.url)}  />;
}

export default Image;