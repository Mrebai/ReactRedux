export const Circle = ({line , style}) =>{
return(
    <tr className={line}>
        {console.log(style[0])}
        <td id={line + "-1"} style={{background:style[0] , height : 100 , width: 100}}></td>
        <td id={line + "-2"} style={{background:style[1], height : 100 , width: 100}}></td>
        <td id={line + "-3"} style={{background:style[2], height : 100 , width: 100}}></td>
        <td id={line + "-4"} style={{background:style[3], height : 100 , width: 100}}></td>
        <td id={line + "-5"} style={{background:style[4], height : 100 , width: 100}}></td>


    </tr>
)
}