import axios from "axios";

function Map(){
    return(
<div className="Map">

<iframe width="2000" height="600" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=+(Title)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

</div>
);
}
export default Map