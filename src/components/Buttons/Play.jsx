
import {hasClassProps} from "@utils/helpers"

const PlayButton= ({url,className,...rest}) => {
    let classes = "btn-play" + hasClassProps(className);
    return (
      <a href="https://www.youtube.com/watch?v=zo9dJFo8H8g" className={classes} {...rest}>
        <i className="fa-solid fa-play"></i>
      </a>
    )
}

export default PlayButton;


// {% macro Play(props) %}
//   <a href="https://www.youtube.com/watch?v=zo9dJFo8H8g" class="btn-play{{" "+ 
//   props.className if props.className}}">
//     <i class="fa-solid fa-play"></i>
// </a>
// {% endmacro %}




