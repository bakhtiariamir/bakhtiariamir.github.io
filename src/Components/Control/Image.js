const Image = (props) => {
    return <img style={{width:25,height:25}}  className="resume-image" src={require('/public/images/'+props.url)}  />;
}

export default Image;