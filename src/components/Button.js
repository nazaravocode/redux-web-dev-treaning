import React from 'react';
import {setItem} from '../actions/App/AppActions';
import {connect} from "react-redux";

const  Button = (props) => {
  const {setItem,text} = props;
    /*onClick={event => text.text === 'clicked' ?  setItem("Уже кликал") :  setItem("Clicked")}*/
return <button
    onClick={() => text === 'Clicked' ?  setItem("Уже кликал") :  setItem("Clicked")}

>
Click me
</button>
}

function mapStateToProps(state) {
    const text = state.text;
    return {
        text
    }

}
const mapDispatchToProps = dispatch => ({
    setItem: payload => dispatch(setItem(payload))
});
export default  connect(mapStateToProps,mapDispatchToProps) (Button)