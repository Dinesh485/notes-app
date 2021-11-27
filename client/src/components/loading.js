import { useSelector } from "react-redux";

const Loading = () => {
    const darkMode = useSelector(state => state.darkMode)
    return ( 
       <div className = 'w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-md '>
            <svg className  = 'w-20 md:w-22 lg:w-28 xl:w-32 ' style={{margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto',}}  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<circle className = {`fill-current text-[#88E0EF] ` } cx="30" cy="50"  r="20">
  <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30" begin="-0.5s"></animate>
</circle>
<circle className = {`fill-current  ${darkMode ?'text-[#D84343] ' : 'text-[#FF5151]'}`} cx="70" cy="50"  r="20">
  <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30" begin="0s"></animate>
</circle>
<circle className = {`fill-current text-[#88E0EF] `} cx="30" cy="50"  r="20">
  <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30" begin="-0.5s"></animate>
  <animate attributeName="fill-opacity" values="0;0;1;1" calcMode="discrete" keyTimes="0;0.499;0.5;1" dur="1s" repeatCount="indefinite"></animate>
</circle>
</svg>
       </div>
     );
}
 
export default Loading;          