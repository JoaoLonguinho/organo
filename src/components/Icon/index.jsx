import "./Icon.css";

const Icon = ({imgUrl, imgName}) => {
    return(
        <div>
            <img src={imgUrl} alt={imgName} />
        </div>
    )
}
export default Icon